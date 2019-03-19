import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import book from "../img/book.svg";

class Home extends Component {
  state = {
    isLoading: true,
    home: [],
    error: null
  };

  fetchUsers() {
    // Where we're fetching data from
    fetch("http://127.0.0.1:8080/src/dummyInfo/HomeData.json")
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          home: data,
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
    const { isLoading, home, error } = this.state;
    return (
      <div>
        <h2 className="h2">
          <img className="images" src={book} alt={""} />
          <FormattedMessage id="Home.Title" defaultMessage="Homework 1 DAW" />
        </h2>
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          home.map(home => {
            const { id, name, field, description } = home;
            return (
              <div className="content2" key={id}>
                <p>Name: {name}</p>
                <p>Field: {field}</p>
                <p>Description: {description}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default Home;
