import styles from './Header.module.css'
import profile from '../../img/profile.png'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

const Header = () => {

    const [headerState, setHeaderState] = useState(styles.BeforeShowHeader)

    useEffect(() => {
        setTimeout(() => {
            setHeaderState(styles.ActiveHeader)
        }, 5);
    }, []);

    const history = useHistory()
    const handleOnClick = (path) => history.push(path)

    const backToHome = () => {
        handleOnClick('/')
    }

    const languageAlert = (language) =>{
        alert(language+" version not prepared yet")
    }

    return(
        <div className={headerState}>
            <div className={styles.Header}>
                <img className={styles.Profile} src={profile} alt="Profile" onClick={()=>backToHome()}/>
                <div className={styles.ProfileLabel} onClick={()=>backToHome()}>
                    <p className={styles.ProfileName}>Norbert Baran</p>
                    <p className={styles.ProfileEmail}>norbertbaran1@gmail.com</p>
                </div>
                <p onClick={()=>backToHome()} className={styles.HomeRoute}>Home</p>
                <div className={styles.Languages}>
                    <div className={styles.LangOnContainer}>
                        <p className={styles.LangOn}>EN</p>
                    </div>
                    <p className={styles.Lang} onClick={()=>languageAlert("PL")}>PL</p>
                </div>

            </div>
        </div>
    )
}

export default Header