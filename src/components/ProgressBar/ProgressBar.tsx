import { FC } from "react";

import { ArrowIcon } from "../icons";
import { ProgressBarProps } from "./ProgressBar.model";
import styles from "./ProgressBar.module.scss";

export const ProgressBar: FC<ProgressBarProps> = ({ current, target }) => {
  const calculateProgress = (): number => {
    return ((current / target) * 100);
  };

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${calculateProgress()}%` }}
      >
        <div className={styles.progressBarInfo}>
          <ArrowIcon className={styles.arrowIcon} />
          {`$${current}`}
        </div>
      </div>
    </div>
  );
};
