
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Doctors from "./Components/Doctors";
import Hospitals from "./Components/Hospitals";
import Contact from "./Components/Contact";
import PropTypes from "prop-types"
import logo1 from "./img/logo1.jpg"
import logo2 from "./img/logo2.png"
import home from "./img/home.svg"
import contact from "./img/contact.png"
import {IntlProvider,FormattedMessage} from "react-intl"
import connect from "react-redux/es/connect/connect";
import {setLocale} from "./actions/locale"
import messages from "./messages"

class Main extends Component {
    render() {
        const {lang} = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>

            <HashRouter>
            <div>
                <h1 className = "myTitle">

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
                    <span className="select">
                        Select language :
                        {" "}
                            <a role="button" onClick={() => this.props.setLocale("en")}>
                            English {" "}
                            </a>
                            |
                            <a role="button" onClick={() => this.props.setLocale("ro")}>
                            {" "} Romanian
                        </a>
                    </span>

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

Main.propTypes={
    lang:PropTypes.string.isRequired,
    setLocale : PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return{
        lang: state.locale.lang
    };
}

export default connect(mapStateToProps, {setLocale} , null ,{pure : false})(Main);