import React from 'react';
import SimpsonQuote from './components/SimpsonQuote';
import axios from 'axios';

const simpleSimpson = {
  quote: 'By chilling my loins I increase the chances of impregnating my wife.',
  character: 'Apu Nahasapeemapetilon',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: simpleSimpson,
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          simpson: data.results[0],
        });
      });
  }
  render() {
    return (
      <div className='App'>
        <SimpsonQuote simpson={this.state.simpson} />
        <button type='button' onClick={this.getSimpson}>
          Get quote
        </button>
      </div>
    );
  }
}

export default App;
