import styles from './BuildingInfoComponent.module.css'
import infoImg from '../../img/buildingInfo/buildingInfo.svg'
import React from 'react'

class BuildingInfoComponent extends React.Component{

    componentDidMount() {
        setTimeout(() => {
            document.getElementById("BuildingInfoId").style.opacity = "1"
        }, 5);
    }

    render() {
        return(
            <div id="BuildingInfoId" className={styles.BuildingInfo}>
                <img src={infoImg} alt="Building info"/>
                <p>Not done yet. Please come back in the future.</p>
            </div>
        )
    }
}

export default BuildingInfoComponent