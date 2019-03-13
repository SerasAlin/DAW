import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Hospitals extends Component {
  state = {
    isLoading: true,
    hospitals: [],
    error: null
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch("http://127.0.0.1:8080/src/dummyInfo/HospitalData.json")
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          hospitals: data,
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
    const { isLoading, hospitals, error } = this.state;
    return (
      <div>
        <h2>
          <FormattedMessage id="Hospitals.Title" defaultMessage="Hospitals" />
        </h2>

        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          hospitals.map(hospital => {
            const { id, name, field, description, location } = hospital;
            return (
              <div key={id}>
                <p>Name: {name}</p>
                <p>Field: {field}</p>
                <p>Description: {description}</p>
                <p>Location: {location}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}

        <a href="https://www.reginamaria.ro/cluj">WebSite</a>
      </div>
    );
  }
}

export default Hospitals;