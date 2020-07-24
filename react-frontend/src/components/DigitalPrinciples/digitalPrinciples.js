import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown'




let input = '# This is a header\n\nAnd this is a paragraph';
// let inputFile = require("./digitalPrinciples.md");
// let rawFile = new XMLHttpRequest();



// const fetchFile = async (path, token, boundProperties) => {
//   try {
//     const result = await fetch(path, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'X-GitHub-Media-Type': 'Accept: application/vnd.github.v3.raw+json',
//       },
//     });
//     const data = await result.json();
//     if (result.ok) return { ...data, ___metadata: { ...boundProperties } };
//     return undefined;
//   } catch (e) {
//     throw e;
//   }
// };

const fetchFile = async (path) => {
  try {
    const result = await fetch(path, {
      method: 'GET'
    });
    const data = await result.json();
    if (result.ok) return { ...data };
    return undefined;
  } catch (e) {
    throw e;
  }
};




class DigitalPrinciples extends Component {
  // const input = '# This is a header\n\nAnd this is a paragraph'

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

  }

  // // const input
  componentDidMount() {
    // fetch("digitalPrinciples.md").then(response => response.text())
    //   .then(text => {
    //     this.setState({
    //       input: text
    //     })
    //     console.log(this.state.input)
    //   })


    let inputFile = require("./digitalPrinciples.md");
    let rawFile = new XMLHttpRequest();

    // rawFile.open("GET", inputFile, false);
    // // rawFile.open("GET", 'https://github.com/bcgov/digital-principles/blob/master/README.md', false);
    // rawFile.onreadystatechange = () => {
    //   if (rawFile.readyState === 4) {
    //     if (rawFile.status === 200 || rawFile.status == 0) {
    //       var allText = rawFile.responseText;
    //       console.log("The text file is")
    //       console.log(allText)
    //       this.setState({
    //         input: allText
    //       });
    //     }
    //   }
    // };
    // // input = rawFile.responseText;
    // // console.log("The raw file is")

    // // console.log(rawFile.responseText)

    // const data = fetchFile('https://github.com/bcgov/digital-principles/blob/master/README.md')
    // console.log("The data is:", data)
  }







  render() {
    return (
      <a id="devex-badge" rel="Exploration" href="https://github.com/BCDevExchange/assets/blob/master/README.md"><img alt="Being designed and built, but in the lab. May change, disappear, or be buggy." style="border-width:0" src="https://assets.bcdevexchange.org/images/badges/exploration.svg" title="Being designed and built, but in the lab. May change, disappear, or be buggy." /></a>
      <ReactMarkdown source={this.state.input} />
    )
  }
}

export default DigitalPrinciples;
