import { FC } from "react";
import styles from "./Title.module.scss";

const Title: FC<{ text: string; className?: string }> = ({
    text,
    className,
}) => {
    return (
        <h2 className={`${styles.title} ${className && className}`}>{text}</h2>
    );
};

export { Title };

const SubTitle: FC<{ text: string; className?: string }> = ({
    text,
    className,
}) => {
    return (
        <h3 className={`${styles.subTitle} ${className && className}`}>
            {text}
        </h3>
    );
};

export { SubTitle };
