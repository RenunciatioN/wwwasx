import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Button.module.scss";

import { diamondBlackIcon, cursorArrow } from "@/assets/icons";

interface IProps {
    href: string;
    text: string;
    typeIcon: "diamond" | "arrow";
}

const obj = {
    diamond: diamondBlackIcon,
    arrow: cursorArrow,
};

const Button: FC<IProps> = ({ href, text, typeIcon }) => {
    return (
        <Link href={href} className={styles.button}>
            <Image src={obj[typeIcon]} alt="" width={24} height={24} />
            <span> {text}</span>
        </Link>
    );
};

export { Button };
