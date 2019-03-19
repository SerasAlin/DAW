import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.css";
import logo2 from "../img/logo2.png";
import Table from "react-bootstrap/es/Table";

const jsonData = require("../dummyInfo/DoctorData");

const docList = jsonData.doctors.map((item, index) => (
  <tr key={"key" + index}>
    <td align="center">{item.ID}</td>
    <td align="center">{item.NAME}</td>
    <td align="center">{item.ACTIVITY}</td>
    <td align="center">{item.HOSPITAL}</td>
  </tr>
));

class Doctors extends Component {
  // componentDidMount() {
  //   axios.get("http://localhost:4001/doctors").then(response => {
  //     this.setState({
  //       products: response.data
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <h2 className="h2">
          <img className="images" src={logo2} alt={""} />
          <FormattedMessage id="Doctors.Title" defaultMessage="Doctors" />
        </h2>

        <div className="content">
          <Table className="myTable " striped bordered hover variant="light">
            <thead>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>ACTIVITY</td>
                <td>HOSPITAL</td>
              </tr>
            </thead>
            <tbody>{docList}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Doctors;
