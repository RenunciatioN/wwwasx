"use client";

import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import styles from "./Questions.module.scss";

import minusIcon from "@/assets/icons/minus.svg";
import plusIcon from "@/assets/icons/plus.svg";
import Image from "next/image";

const variants = {
    hidden: {},
    show: {
        height: "auto",
        overflow: "auto",
    },
};

interface IProps {
    title: string;
    text: string;
}

const QuestionItem: FC<IProps> = ({ title, text }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.item}>
            <div
                className={cn(styles.title, {
                    [styles.open]: show,
                })}
                onClick={() => setShow(!show)}
            >
                <div>{title}</div>
                {show ? (
                    <Image
                        src={minusIcon}
                        alt="close"
                        className={styles.icon}
                    />
                ) : (
                    <Image src={plusIcon} alt="open" className={styles.icon} />
                )}
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        className={styles.body}
                        animate={{
                            height: 'auto',
                           
                            opacity: 1,
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                        exit={{
                           
                            height: "0",
                            opacity: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                        initial={{
                          
                            height: "0",
                            opacity: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}

                        transition={{
                            duration: 0.3
                        }}
                    >
                        <div style={{ padding: "20px 0" }}>{text}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export { QuestionItem };
