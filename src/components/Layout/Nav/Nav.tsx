"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Nav.module.scss";

import logo from "@/assets/images/logo.png";
import { navList } from "./data";
import { mainRoutes } from "@/constants/routes.constants";
import { MenuItem } from "./MenuItem";

const Nav: FC = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <nav className={styles.nav}>
            <div className={styles.row}>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="The Big Baba"
                        width={52}
                        height={48}
                    />
                </Link>

                <ul className={styles.list}>
                    {navList.map((item, index) => (
                        <MenuItem
                            key={item.path}
                            item={item}
                            isSelected={activeIndex === index}
                            handleClick={() => setActiveIndex(index)}
                        />
                    ))}
                </ul>

                <Link href={mainRoutes.login} className={styles.loginBtn}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M2.83216 0.998829C1.68372 0.600554 0.62643 1.68157 1.06544 2.82004C2.11956 5.5537 3.40161 8.26475 4.00622 9.5081C4.25592 10.0215 4.69572 10.4132 5.22835 10.6104L8.98015 12L5.22835 13.3895C4.69572 13.5868 4.25592 13.9784 4.00622 14.4919C3.40161 15.7352 2.11956 18.4464 1.06544 21.18C0.62643 22.3185 1.68372 23.3995 2.83216 23.0012C6.6912 21.6629 14.8325 18.5016 21.841 13.5423C22.9123 12.7842 22.9123 11.2157 21.841 10.4577C14.8325 5.4984 6.69115 2.33713 2.83216 0.998829Z"
                            fill="black"
                        />
                    </svg>

                    <span>Login / Signup</span>
                </Link>
            </div>
        </nav>
    );
};

export { Nav };
