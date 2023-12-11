import { FC } from "react";
import cn from "classnames";

import styles from "./OurWinners.module.scss";

interface IProps {
    index: number;
}

const SliderCard: FC<IProps> = ({ index }) => {
    return (
        <div
            className={cn(styles.card, {
                [styles.gold]: index === 1,
                [styles.silver]: index === 2,
                [styles.bronze]: index === 3,
            })}
        >
            <div className={styles["card-img-wrapp"]}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.25 10.1666C1.25 4.96345 5.51235 0.75 10.7647 0.75C15.9514 0.75 20.1726 4.85882 20.2773 9.97215L22.2174 12.677C22.564 13.1602 22.5274 13.8672 21.9648 14.2113C21.5385 14.4719 20.9157 14.7752 20.0793 14.9963L19.7917 18.4112C19.7084 19.401 18.8189 20.1231 17.8331 20.0012L16.5735 19.8454V21.3041C16.5735 22.0574 16.0823 22.7386 15.3138 22.8816C14.3878 23.0539 12.8714 23.25 10.7647 23.25C8.65795 23.25 7.14155 23.0539 6.21555 22.8816C5.44695 22.7386 4.95586 22.0574 4.95586 21.3041V17.6252C2.70279 15.904 1.25 13.2036 1.25 10.1666ZM4.82027 11.8329C4.07407 9.2148 5.16575 6.3269 7.63045 4.90389C10.0952 3.48088 13.142 3.97942 15.0363 5.9347C15.6127 6.5297 15.3555 7.46545 14.6381 7.87965L6.70375 12.4606C5.9863 12.8748 5.04735 12.6296 4.82027 11.8329Z"
                        fill="#818181"
                    />
                </svg>
            </div>

            <div className={styles["card-text"]}>№{index}</div>
        </div>
    );
};

export { SliderCard };
