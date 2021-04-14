import styles from './BuildingInfo.module.css'
import infoImg from '../../img/buildingInfo/buildingInfo.svg'
import {useEffect} from "react";

const BuildingInfo = () => {

    useEffect(() => {
        document.getElementById("BuildingInfoId").style.opacity = "1"
    }, []);

    return(
        <div id="BuildingInfoId" className={styles.BuildingInfo}>
            <img src={infoImg} alt="Building info"/>
            <p>Not done yet. Please come back in the future.</p>
        </div>
    )
}

export default BuildingInfo