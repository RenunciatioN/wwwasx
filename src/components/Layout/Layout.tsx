import { FC } from "react";
import { Nav } from "./Nav";
import styles from "./Layout.module.scss";
import { Footer } from "./Footer";

interface IProps {
    children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export { Layout };
