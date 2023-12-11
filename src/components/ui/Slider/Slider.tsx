import { FC } from "react";

import styles from "./Slider.module.scss";

interface ISliderProps {
    children: React.ReactNode;
    orintation: "horizontal" | "vertical";
}

const Slider: FC<ISliderProps> = ({ children, orintation = "horizontal" }) => {
    return (
        <div className={styles.slider}>
            <div className={styles["slider-container"]}>{children}</div>
        </div>
    );
};

export { Slider };

interface ISliderItemProps {
    children: React.ReactNode;
}

const SliderItem: FC<ISliderItemProps> = ({ children }) => {
    return <div className={styles["slider-item"]}>{children}</div>;
};

export { SliderItem };

export const slideNext = () => {
    
};
export const slidePrev = () => {};
