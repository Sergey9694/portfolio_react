import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
    return (
        <div className={styles.social}>
            <div>
                <BsTelegram />
            </div>
            <div>
                <BsWhatsapp />
            </div>
            <div>
                <AiOutlineMail />
            </div>
        </div>
    );
};

export default SocialMedia;
