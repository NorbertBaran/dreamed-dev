import styles from './OptionList.module.css'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useTransition} from "react-route-transition";

const OptionList = ({options}) => {

    const [optionListState, setOptionListState] = useState(styles.BeforeShowOptionList)

    const history = useHistory();
    const handleOnClick = (path) => history.push(path)

    useEffect(() => {
        setTimeout(() => {
            setOptionListState(styles.ActiveShowOptionList)
        }, 5);
        return () => {

        }
    }, []);

    useTransition({
        handlers: [
            {
                from: '/',
                to: '/projects',
                onLeave: async () => {
                    console.log("transition")
                }
            }
        ]
    })

    const hideOptions = () =>{
        document.body.style.overflow = "hidden"
        setOptionListState(styles.BeforeHideOptionList)
        setTimeout(() => {
            document.getElementById("OptionListId")
                .style.display = "none"
            document.body.style.overflow = "auto"
        }, 500);
    }

    const openOutside = (link) => {
        window.open(link, '_blank')
        handleOnClick("/")
        // window.location.href = link
    }

    const directTo = (link, linkType) => {
        hideOptions()
        setTimeout(() => {
            linkType === "inside" ?
                handleOnClick(link) :
                openOutside(link)
        }, 500);
    }

    return(
        <div className={optionListState}
             style={{height: "82vh", minHeight: "calc(0.82*var(--minHeight));"}}
        >
            <div className={styles.OptionList} id="OptionListId">
                {options.map((option) => (
                    <div
                        key={option.id}
                        className={option.id===1 ? styles.AwardedOption : styles.Option}
                        onClick={()=>directTo(option.link, option.linkType)}
                    >
                        <img src={option.image} alt="Profile"/>
                        <p>{option.title}</p>
                        <p className={styles.subtitle}>{option.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionList