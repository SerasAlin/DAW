import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Doctors extends Component {
  state = {
    isLoading: true,
    doctors: [],
    error: null
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch("http://127.0.0.1:8080/src/dummyInfo/DoctorData.json")
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          doctors: data,
          isLoading: false
        })
      )

      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, doctors, error } = this.state;

    return (
      <div>
        <h2>
          <FormattedMessage id="Doctors.Title" defaultMessage="Doctors" />
        </h2>

        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          doctors.map(doctors => {
            const {
              id,
              name,
              field,
              description,
              hospital,
              location
            } = doctors;
            return (
              <div key={id}>
                <p>Name: {name}</p>
                <p>Field: {field}</p>
                <p>Description: {description}</p>
                <p>Hospital: {hospital}</p>
                <p>Location: {location}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
        <a href="https://www.reginamaria.ro/medici/prof-dr-copaescu-catalin">
          WebSite
        </a>
      </div>
    );
  }
}

export default Doctors;
