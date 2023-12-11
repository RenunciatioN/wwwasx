import { FC } from "react";
import cn from "classnames";

import styles from "./Tab.module.scss";
import Image from "next/image";

interface IProps {
    icon: string;
    title: string;
    selected: boolean;
    clickHanlder: (state: number) => void;
    index: number;
}

const Tab: FC<IProps> = ({
    icon,
    title,
    selected = false,
    clickHanlder,
    index,
}) => {
   
    

    return (
        <div
            className={cn(styles.tab, {
                [styles.active]: selected,
            })}
            onClick={() => clickHanlder(index)}
        >
            <div className={styles["icon-wrapp"]}>
                <Image src={icon} alt="" />
            </div>

            <div className={styles.title}>{title}</div>
        </div>
    );
};

export { Tab };
