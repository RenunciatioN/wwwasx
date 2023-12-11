import { FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

import logo from "@/assets/images/logo.png";
import { message, facebook, instagram } from "@/assets/icons";
import { footer } from "@/content/base.json";
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer__row"]}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        width={45}
                        height={42}
                        alt="The Big Baba"
                    />
                </div>

                <div className={styles.copy}>
                    <p>{footer.copy}</p>
                    <p>{footer.company}</p>
                </div>

                <Link
                    href={`mailto:${footer.contact}`}
                    className={styles.contact}
                >
                    <Image src={message} width={24} height={24} alt="contact" />
                    <span>{footer.contact}</span>
                </Link>

                <div className={styles.social}>
                    <span>Socials</span>
                    <Link href={footer.facebookLink}>
                        <Image
                            src={facebook}
                            width={24}
                            height={24}
                            alt="Instagram"
                        />
                    </Link>
                    <Link href={footer.instagramLink}>
                        <Image
                            src={instagram}
                            width={24}
                            height={24}
                            alt="Facebook"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
