import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";

import styles from "./About.module.scss";

const abouts = [
    {
        title: "Разработка  одностраничных лендингов",
        description: "Продукты, созданные при помощи HTML/CSS/JavaScript",
        imgUrl: images.about01,
    },
    {
        title: "Разработка  многостраничных сайтов",
        description:
            "Продукты, созданные при помощи HTML/CSS/JavaScript(возможно применение Bootstrap, Material UI и др.)",
        imgUrl: images.about02,
    },
    {
        title: "Разработка веб приложений",
        description: "Продукты, созданные при помощи библиотеки React и др.",
        imgUrl: images.about03,
    },
];

const About = () => {
    return (
        <>
            <h2 className={styles.title}>
                <span>Хороший сайт - </span>
                Залог успеха <br />
                <span> для вашего Бизнеса</span>
            </h2>

            <div className={styles.profile}>
                {abouts.map((about, index) => {
                    return (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: "tween" }}
                            className={styles.item}
                            key={about.title + index}
                        >
                            <img src={about.imgUrl} alt={about.title} />
                            <h2
                                className={styles.aboutTitle}
                                style={{ marginTop: 20 }}
                            >
                                {about.title}
                            </h2>
                            <p
                                className={styles.aboutText}
                                style={{ marginTop: 10 }}
                            >
                                {about.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default About;
