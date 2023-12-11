import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IMenuItem } from "./data";
import { usePathname } from "next/navigation";

interface IProps {
    item: IMenuItem;
    isSelected: boolean;
    handleClick: () => void;
}

const MenuItem: FC<IProps> = ({ item, isSelected, handleClick }) => {
    const pathname = usePathname();

  

    return (
        <motion.li
            style={{
                position: "relative",
            }}
            onClick={handleClick}
        >
            {isSelected && <ActiveLine />}

            <Link href={item.path}>
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <span>{item.name}</span>
            </Link>
        </motion.li>
    );
};

export { MenuItem };

const ActiveLine = () => {
    return (
        <motion.div
            layoutId="activeLink"
            style={{
                width: "100%",
                height: 3,
                position: "absolute",
                bottom: "-30px",
                backgroundColor: "#FF4C25",
                borderRadius: "3px",
            }}
        />
    );
};

