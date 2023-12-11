"use client";

import { FC, useState } from "react";

import { weDoThings } from "@/content/homeJson.json";
import { Title, SubTitle } from "@/components/Title";
import { Tab } from "./Tab";

import styles from "./WeDoThings.module.scss";

import {
    pulseIcon,
    trophyWhiteIcon,
    wayfinder,
    giveMoney,
    cartIcon,
} from "@/assets/icons";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { mainRoutes } from "@/constants/routes.constants";

const tabs = [cartIcon, giveMoney, trophyWhiteIcon, pulseIcon, wayfinder];

const WeDoThings: FC = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    console.log(selectedTabIndex);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <Title text={weDoThings.title} />
                <SubTitle text={weDoThings.subTitle} />
            </div>

            <div className={styles.tabs}>
                <div className={styles["tab-row"]}>
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            icon={tab}
                            title={weDoThings.tabs[index].title}
                            selected={selectedTabIndex === index ? true : false}
                            clickHanlder={setSelectedTabIndex}
                            index={index}
                        />
                    ))}
                </div>

                <div className={styles["tab-content"]}>
                    <div className={styles["tab-content__left"]}>
                        <div className={styles["tab-content_icon-wrapp"]}>
                            <Image src={tabs[selectedTabIndex]} alt="" />
                        </div>
                    </div>
                    <div className={styles["tab-content__right"]}>
                        <h4>{weDoThings.tabs[selectedTabIndex].title}</h4>
                        <p>{weDoThings.tabs[selectedTabIndex].text}</p>

                        <div className={styles["tab-button"]}>
                            <Button
                                href={mainRoutes.becomeVip}
                                text="Join the Big Baba"
                                typeIcon="diamond"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { WeDoThings };
