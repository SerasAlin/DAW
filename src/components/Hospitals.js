import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import logo1 from "../img/logo1.jpg";
import Table from "react-bootstrap/es/Table";
import Button from "react-bootstrap/Button";
import poza from "../img/10.jpg";
const jsonData = require("../dummyInfo/HospitalData");
const doctorData = require("../dummyInfo/DoctorData");
console.log(doctorData);
console.log(jsonData);
let doctorList = [];
let display = [];

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            {display.map((person, index) => (
              <tr key={"key" + index}>
                <td align="center">{person.ID}</td>
                <td align="center">{person.NAME}</td>
                <td align="center">{person.ACTIVITY}</td>
                <td align="center">{person.HOSPITAL}</td>
                <td alligh="center">
                  <img className="littleImages" alt={""} src={poza} />
                </td>
              </tr>
            ))}
          </div>
          <Button
            className="popButton"
            variant="dark"
            size="sm"
            onClick={this.props.closePopup}
          >
            Close
          </Button>
        </div>
      </div>
    );
  }
}

class Hospitals extends Component {
  // componentDidMount() {
  //   axios.get("http://localhost:4000/hospitals").then(response => {
  //     this.setState({
  //       products: response.data
  //     });
  //   });
  //

  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup(hospital) {
    display = [];
    console.log(hospital);
    doctorList = doctorData.doctors.map(function(doctor, index) {
      if (doctor.HOSPITAL === hospital) {
        display.push(doctor);
      }
    });
    console.log(display);

    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <h2 className="h2">
          <img className="images" src={logo1} alt={""} />
          <FormattedMessage id="Hospitals.Title" defaultMessage="Hospitals" />
        </h2>
        <div className="content">
          <Table className="myTable" striped bordered hover variant="light">
            <thead>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>FIELD</td>
                <td>PRICING</td>
                <td>LOCATION</td>
                <td>DETAILS</td>
              </tr>
            </thead>
            <tbody>
              {jsonData.hospitals.map((item, index) => (
                <tr key={"key" + index}>
                  <td align="center">{item.ID}</td>
                  <td align="center">{item.NAME}</td>
                  <td align="center">{item.FIELD}</td>
                  <td align="center">{item.PRICING}</td>
                  <td align="center">{item.LOCATION}</td>
                  <td align="center">
                    <Button
                      variant="light"
                      size="sm"
                      onClick={this.togglePopup.bind(this, item.NAME)}
                    >
                      Details
                    </Button>

                    {this.state.showPopup ? (
                      <Popup closePopup={this.togglePopup.bind(this)} />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Hospitals;
