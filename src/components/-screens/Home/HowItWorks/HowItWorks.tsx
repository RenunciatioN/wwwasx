import { FC } from "react";
import Image from "next/image";
import styles from "./HowItWorks.module.scss";
import { howItWorks } from "@/content/homeJson.json";
import {
    diamondBlackIcon,
    controllerIcon,
    applacationIcon,
    trophyIcon,
} from "@/assets/icons";
import bgFon from "@/assets/images/logo-fon.png";
import { Title } from "@/components/Title";

const iconsCards = [
    applacationIcon,
    diamondBlackIcon,
    controllerIcon,
    trophyIcon,
];

const HowItWorks: FC = () => {
    return (
        <section className={styles["how-it-works"]}>
            <Title text={howItWorks.title} className={styles.title} />

            <div
                className={styles.cards}
                style={{ backgroundImage: `url(${bgFon.src})` }}
            >
                {iconsCards.map((icon, index) => (
                    <WorkCard
                        key={index}
                        icon={icon}
                        text={howItWorks.cards[index].text}
                        title={howItWorks.cards[index].title}
                    />
                ))}
            </div>
        </section>
    );
};

export { HowItWorks };

interface IWorkCardProps {
    icon: string;
    title: string;
    text: string;
}

const WorkCard: FC<IWorkCardProps> = ({ icon, title, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles["icon-wrap"]}>
                <Image src={icon} alt={""} width={24} height={24} />
            </div>

            <h4>{title}</h4>

            <p>{text}</p>
        </div>
    );
};
