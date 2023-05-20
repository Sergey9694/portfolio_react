import styles from "./NavigationDots.module.scss";

const NavigationDots = ({ active }) => {
    return (
        <div className={styles.navigation}>
            {["home", "about", "work", "skills", "contact"].map(
                (item, index) => (
                    <a
                        href={`#${item}`}
                        key={item + index}
                        className={styles.dot}
                        style={
                            active === item
                                ? { backgroundColor: "#313BAC" }
                                : {}
                        }
                    />
                )
            )}
        </div>
    );
};

export default NavigationDots;
