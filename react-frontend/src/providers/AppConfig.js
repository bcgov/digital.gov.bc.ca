import React, { useState, useEffect, Component } from 'react';
import _ from 'lodash';

export const AppConfigContext = React.createContext();

export class AppConfig extends Component {
  // TODO: It may be best to move the config set state into
  // constructor to make sure the config is assigned
  constructor() {
    super();
    this.state = { strapiApiUrl: null };
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
        // show the xhrsult
        this.setState(JSON.parse(xhr.response));
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
