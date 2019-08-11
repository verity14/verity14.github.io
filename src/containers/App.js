import React, { Component } from 'react';
import './App.css';
import Register from '../components/Register';
import Particles from 'react-particles-js';


const particleParams= {
  particles: {
    number: {
      value: 80,
      density:{
        enable: true,
        value_area: 552

      }
    }

  }
}
class App extends Component{
  render(){
    return (<div>
      <div className=" bkgrnd ">
       <Particles 
          params={ particleParams }
       />
      </div>

      <Register />
    </div>);
  }
}

export default App;