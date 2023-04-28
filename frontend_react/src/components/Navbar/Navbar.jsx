import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={images.logo} alt="logo" />
            </div>
            <ul className={styles.links}>
                {[
                    "Домашняя",
                    "Обо мне",
                    "Мои работы",
                    "Навыки",
                    "Контакты",
                ].map((item) => (
                    <li className={styles.link} key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
