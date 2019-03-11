
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Components/Home";
import Doctors from "./Components/Doctors";
import Hospitals from "./Components/Hospitals";
import Contact from "./Components/Contact";

import logo1 from "./img/logo1.jpg"
import logo2 from "./img/logo2.png"
import home from "./img/home.png"
import contact from "./img/contact.png"
import {IntlProvider,FormattedMessage} from "react-intl"

class Main extends Component {
    render() {
        return (
            <IntlProvider>

            <HashRouter>
            <div>
                <h1>
                    <FormattedMessage
                        id="Main.Title"
                        defaultMessage="Rate your doctors and hospitals"
                    />
                </h1>
                <ul className="header">
                    <li><NavLink exact to="/">
                        <img className = "images" src={home} alt="doctor" />

                    </NavLink></li>
                    <li><NavLink to="/doctors">
                        <img className = "images" src={logo2} alt="hospital" />
                    </NavLink></li>
                    <li><NavLink to="/hospitals">

                        <img className = "images" src={logo1} alt="hospital" />
                    </NavLink></li>
                    <li><NavLink to="/contact">

                        <img className = "images" src={contact} alt="contact" />
                    </NavLink></li>
                    <text className="select">
                        Select language:
                    <select className="flag-text" data-width="fit">
                        <option >English</option>
                        <option >Romanian</option>
                    </select>
                    </text>

                </ul>



                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/doctors" component={Doctors}/>
                    <Route path="/hospitals" component={Hospitals}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
            </IntlProvider>
    );
    }
}

export default Main;