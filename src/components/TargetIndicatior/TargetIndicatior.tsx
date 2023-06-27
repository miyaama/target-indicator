import { FC, useEffect, useState } from "react";

import styles from "./TargetIndicatior.module.scss";

import { InfoIcon } from "../icons";
import { BALANCE_URL, TARGET_BALANCE } from "../../utils/constants";
import { ProgressBar } from "../ProgressBar";

export const TargetIndicatior: FC = () => {
  const [balance, setBalance] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchBalance(): Promise<void> {
    try {
      const response = await fetch(BALANCE_URL);
      const data = await response.json();
      setBalance(data.balance_usd);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchBalance();
  }, []);

  useEffect(() => {
    if (isLoaded && balance < TARGET_BALANCE) {
      const timer = setInterval(() => {
        setBalance((prevBalance) => {
          const newBalance = +(prevBalance + 0.2).toFixed(1);
          return newBalance >= TARGET_BALANCE ? TARGET_BALANCE : newBalance;
        });
      }, 2000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isLoaded, balance]);

  const isTargetBalance = balance === TARGET_BALANCE;
  const amountNeeded = (TARGET_BALANCE - balance).toFixed(1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Target Indicator Demo</p>
      </div>
      <div className={styles.body}>
        <div className={styles.indicatorContainer}>
          <div className={styles.indicatior}>
            <p className={styles.reached}>Reached:</p>
            <ProgressBar current={balance} target={TARGET_BALANCE} />
            <div
              className={`${styles.targetContainer} ${
                isTargetBalance ? styles.greenBackground : ""
              }`}
            >
              <p className={styles.target}>Target</p>
              <p className={styles.targetValue}>{`$${TARGET_BALANCE}`}</p>
            </div>
          </div>
          {isTargetBalance ? null : (
            <div className={styles.information}>
              <InfoIcon className={styles.infoIcon} />
              <p>You need ${amountNeeded} more to reach your target.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
