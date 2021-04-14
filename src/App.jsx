import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OptionList from "./components/OptionList/OptionList";

import {BrowserRouter as Router, Route} from 'react-router-dom'

import aboutMe from './img/main/AboutMe.svg'
import projects from './img/main/Projects.svg'
import contact from './img/main/Contact.svg'

import whiteDashboard from './img/projects/whiteDashboard.svg'
import bookApi from './img/projects/bookApi.svg'
import fitnessDashboard from './img/projects/fitnessDashboard.svg'

import BuildingInfo from "./components/BuildingInfo/BuildingInfo";
import BuildingInfoComponent from "./components/BuildingInfoComponent/BuildingInfoComponent";

const App = () => {
    const mainOptions = [
        {
            id: 0,
            image: aboutMe,
            title: "About Me",
            subtitle: "",
            link: "/about",
            linkType: "inside"
        },{
            id: 1,
            image: projects,
            title: "Projects",
            subtitle: "",
            link: "/projects",
            linkType: "inside"
        },{
            id: 2,
            image: contact,
            title: "Contact",
            subtitle: "",
            link: "/contact",
            linkType: "inside"
        },
    ]

    const projectsOptions = [
        {
            id: 0,
            image: whiteDashboard,
            title: "Request for Quotations",
            subtitle: "Frontend Template",
            link: "http://quotations-dashboard.herokuapp.com",
            linkType: "outside"
        },{
            id: 1,
            image: bookApi,
            title: "Git Hub",
            subtitle: "Repozytorium",
            link: "https://github.com/DreamedDev?tab=repositories",
            linkType: "outside"
        },{
            id: 2,
            image: fitnessDashboard,
            title: "Fitness Dashboard",
            subtitle: "Frontend Template",
            link: "http://sport-dashboard.herokuapp.com",
            linkType: "outside"
        },
    ]

    return(
        <Router>
            <div className="BodyFade"></div>
            <Header/>
            <Route path='/'
                   exact
                   children={<OptionList options={mainOptions}/>}
            />
            <Route path='/about'
                   exact
                   children={<BuildingInfoComponent/>}
            />
            <Route path='/projects'
                   exact
                   children={<OptionList options={projectsOptions}/>}
            />
            <Route path='/contact'
                   exact
                   children={<BuildingInfo/>}
            />
            <Footer/>
        </Router>
    )
}

export default App