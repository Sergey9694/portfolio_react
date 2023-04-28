import { useState } from "react";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

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
            <div className={styles.burger}>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }} //ширина 300 по x
                        transition={{ duration: 0.85, ease: "easeOut" }} //продолжительность 0.85с
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {[
                                "Домашняя",
                                "Обо мне",
                                "Мои работы",
                                "Навыки",
                                "Контакты",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setToggle(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
