import styles from './Footer.module.css'
import {useEffect, useState} from "react";

const Footer = () => {

    const [footerState, setFooterState] = useState(styles.BeforeShowFooter)

    useEffect(() => {
        setTimeout(() => {
            setFooterState(styles.ActiveFooter)
        }, 5);
    }, []);

    return(
        <div className={footerState}>
            <p className={styles.Footer}>Norbert Baran &copy; 2021</p>
        </div>
    )
}

export default Footer