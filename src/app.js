/* eslint-disable no-unused-vars */
import React from 'react';
import './app.scss';
import Results from './components/results.js';
import Message from './components/message.js';
import Form from './components/form.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={};
  }
  handleResults = state =>{
    this.setState(state);

  }

  render() {
    return (
      <>
      <Form sendResults={this.handleResults}/>
      <Results Results={this.state}/>
      </>
    );
  }
}

export default App;