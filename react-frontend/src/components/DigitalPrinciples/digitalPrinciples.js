import React, { Component } from 'react';

class DigitalPrinciples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://github.com/bcgov/digital-principles/blob/master/README.md')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log('THE DATA IS');
    console.log(this.state.data);
    return <p>Hello World</p>;
  }
}

export default DigitalPrinciples;
