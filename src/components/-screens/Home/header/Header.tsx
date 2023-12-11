import { FC } from "react";

import styles from "./header.module.scss";
import { mainRoutes } from "@/constants/routes.constants";
import { Button } from "@/components/shared/Button";
import { Video } from "@/components/ui/video";

import { title, subTitle, plashUp } from "@/content/homeJson.json";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.plashUp}>{plashUp}</div>
                <h1 className={styles.title}>{title}</h1>
                <p>{subTitle}</p>

                <div className={styles.buttonWrapp}>
                    <Button
                        text="Become a member"
                        href={mainRoutes.becomeVip}
                        typeIcon="diamond"
                    />
                </div>
            </div>

            <div className={styles.video}>
                <Video />
            </div>
        </header>
    );
};

export { Header };
