import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Hospitals from "./components/Hospitals";
import Contact from "./components/Contact";
import PropTypes from "prop-types";
import home from "./img/home.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import connect from "react-redux/es/connect/connect";
import { setLocale } from "./actions/locale";
import messages from "./messages";
import Button from "react-bootstrap/Button";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logoProj.jpg";

function scrollHome() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

function scrollToDoctors() {
  scroller.scrollTo("DoctorsElement", { smooth: true, offset: -80 });
}

function scrollToHospitals() {
  scroller.scrollTo("HospitalsElement", { smooth: true, offset: -80 });
}

function scrollToContact() {
  scroller.scrollTo("ContactElement", { smooth: true, offset: -80 });
}

var Scroll = require("react-scroll");
var Element = Scroll.Element;
var scroller = Scroll.scroller;

class Main extends Component {
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="overlay">
          <Navbar className="sticky-top" bg="dark" variant="dark">
            <NavLink exact to="/">
              <img className="images" src={logo} alt="logo" />
              <Button
                className="searchButton"
                variant="light"
                onClick={scrollHome}
              >
                <img className="homeImg" src={home} alt="home" />
              </Button>
            </NavLink>

            <Nav className="mr-auto">
              <NavLink className="indent" to="/doctors">
                <Button
                  className="searchButton"
                  variant="outline-light"
                  onClick={scrollToDoctors}
                >
                  Doctors
                </Button>
              </NavLink>

              <NavLink className="indent" to="/hospitals">
                <Button
                  className="searchButton"
                  variant="outline-light"
                  onClick={scrollToHospitals}
                >
                  Hospitals
                </Button>
              </NavLink>
              <NavLink className="indent" to="/contact">
                <Button
                  className="searchButton"
                  variant="outline-light"
                  onClick={scrollToContact}
                >
                  Contact
                </Button>
              </NavLink>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="m-md-2"
              />
              <Button className="searchButton" variant="outline-light">
                Search
              </Button>
            </Form>
            <Button
              className="button"
              variant="outline-light"
              onClick={() => this.props.setLocale("en")}
            >
              En
            </Button>
            <Button
              className="button"
              variant="outline-light"
              onClick={() => this.props.setLocale("ro")}
            >
              Ro
            </Button>
          </Navbar>

          <h1 className="myTitle">
            <FormattedMessage
              id="Main.Title"
              defaultMessage="Rate your doctors and hospitals"
            />
          </h1>
          <Home />

          <Element name="DoctorsElement">
            <Doctors />
          </Element>
          <Element name="HospitalsElement">
            <Hospitals />
          </Element>
          <Element name="ContactElement">
            <Contact />
          </Element>
          <span className="watermark">Design by SerasAlin</span>
        </div>
      </IntlProvider>
    );
  }
}

Main.propTypes = {
  lang: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(
  mapStateToProps,
  { setLocale },
  null,
  { pure: false }
)(Main);
