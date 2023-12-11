import Image from "next/image";
import { FC } from "react";

import styles from "./allPrize.module.scss";
import allPrizeImg from "@/assets/images/allPrize.png";

import { allPrize } from "@/content/homeJson.json";

const AllPrize: FC = ({}) => {
    return (
        <div className={styles.allPrize}>
            <Image src={allPrizeImg} width={708} height={432} alt="all prize" />

            <div className={styles.allPrizeText}>
                <div>
                    <span>{allPrize.accentTitle} </span>
                    {allPrize.title}
                </div>

                <p>
                    {allPrize.text1} <span>{allPrize.text2}</span>
                    {allPrize.text3}
                </p>
            </div>
        </div>
    );
};

export { AllPrize };
