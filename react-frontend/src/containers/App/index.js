import React from 'react';
import Nav from '../../components/Nav';

function App() {
  console.log('The env is:')
  console.log(process.env)

  return (
    <div className="App">
      <p>THIS IS A TEST APP</p>
      <Nav />
    </div>
  );
}

export default App;
