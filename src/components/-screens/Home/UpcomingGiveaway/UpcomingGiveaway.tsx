import { FC } from "react";
import { SubTitle, Title } from "@/components/Title";

import { upcomingGiveaway as data } from "@/content/homeJson.json";
import styles from "./UpcomingGiveaway.module.scss";
import { Button } from "@/components/shared/Button";
import { mainRoutes } from "@/constants/routes.constants";
import Image from "next/image";

const UpcomingGiveaway: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Title text={data.title} />
                <SubTitle text={data.text} />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.announcement}>
                        <span>{data.announcement}</span>
                    </div>

                    <div className={styles.warn}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0403 3.24233C11.0538 1.21545 13.9463 1.21545 14.9597 3.24233L22.7236 18.7702C23.6379 20.5987 22.3083 22.75 20.264 22.75H4.73609C2.69179 22.75 1.36218 20.5987 2.27642 18.7702L10.0403 3.24233ZM13.0584 15.0034L13.8247 8.48973C13.918 7.69675 13.2984 7 12.4999 7C11.7015 7 11.0819 7.69675 11.1752 8.48973L11.9415 15.0034C11.9748 15.2866 12.2148 15.5 12.4999 15.5C12.7851 15.5 13.0251 15.2866 13.0584 15.0034ZM13.4999 18C13.4999 18.5523 13.0522 19 12.4999 19C11.9477 19 11.4999 18.5523 11.4999 18C11.4999 17.4477 11.9477 17 12.4999 17C13.0522 17 13.4999 17.4477 13.4999 18Z"
                                fill="#FF5F3B"
                            />
                        </svg>
                        <span>Our presale is on now!</span>
                    </div>

                    <div className={styles.indicator}>{data.spotsFilled}</div>

                    <p>
                        Get ready for a giveaway like no other! A membership
                        packed with endless perks and monthly events!
                    </p>

                    <div className={styles.lables}>
                        <span>Presale is on NOW!</span>
                        <span>
                            First 1,000 members will be added into an exclusive
                            giveaway
                        </span>
                        <span>LIMITED TO 5000 ENTRIES/ENTRANTS</span>
                    </div>

                    <div className={styles.btn}>
                        <Button
                            text="Learn more"
                            href={mainRoutes.becomeVip}
                            typeIcon="arrow"
                        />
                    </div>
                </div>

                {/* <Image src='/images/giveway-prize-fon.png' alt="" width={566} height={340} className={styles['fon-img-1']} /> */}
                {/* <Image src='/images/giveway-prize-fon-2.png' alt="" width={476} height={270} className={styles['fon-img-2']} /> */}
            </div>
        </section>
    );
};

export { UpcomingGiveaway };
