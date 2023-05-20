import { motion } from "framer-motion";
import { images } from "../../constants";

import AppWrap from "../../wrapper/AppWrap";

import styles from "./Header.module.scss";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 2,
            ease: "easeInOut",
        },
    },
};

const Header = () => {
    return (
        <div className={styles.header}>
            <motion.div
                whileInView={{ x: [-150, 0], opacity: [0, 1] }} // прозрачность от 0 до 1
                transition={{ duration: 1.75 }}
                className={styles.info}
            >
                <div className={styles.badge}>
                    <div className={styles.name}>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className={styles.hello}> Привет, меня зовут</p>
                            <h1 className={styles.title}>Сергей</h1>
                        </div>
                    </div>

                    <div className={styles.profession}>
                        <p className={styles.hello}> React</p>
                        <p className={styles.hello}>Frontend-developer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }} // прозрачность от 0 до 1
                transition={{ duration: 1.75, delayChildren: 2 }}
                className={styles.myFoto}
            >
                <img src={images.profile} alt="profile" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    src={images.circle}
                    alt="profile_buble"
                    className={styles.myFotoOverlay}
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className={styles.circles}
            >
                {[images.react, images.javascript, images.redux].map(
                    (circle, index) => {
                        return (
                            <div
                                className={styles.circle}
                                key={`bubles-${index}`}
                            >
                                <img src={circle} alt="circle" />
                            </div>
                        );
                    }
                )}
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home");
