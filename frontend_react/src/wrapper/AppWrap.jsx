import { NavigationDots, SocialMedia } from "../components";

import styles from "./AppWrap.module.scss";

const AppWrap = (Component, idName, classNames) =>
    function HOC() {
        return (
            <div id={idName} className={styles.container}>
                <SocialMedia />

                <div className={styles.wrapper}>
                    <Component />
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

export default AppWrap;
