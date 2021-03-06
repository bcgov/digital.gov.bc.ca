import React, { Component } from 'react';

export const AppConfigContext = React.createContext();

export class AppConfig extends Component {
  // TODO: It may be best to move the config set state into
  // constructor to make sure the config is assigned
  constructor() {
    super();
    this.state = {
      strapiApiUrl: null,
      strapiMediaUrl: null,
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/config.json');

    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        // analyze HTTP status of the xhrs response
        // do something
      } else {
        const strapiURLs = JSON.parse(xhr.response);
        strapiURLs.strapiMediaUrl = strapiURLs?.strapiApiUrl?.replace(
          '/graphql',
          ''
        );
        this.setState(strapiURLs);
      }
    };
  }

  render() {
    return (
      <AppConfigContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppConfigContext.Provider>
    );
  }
}
