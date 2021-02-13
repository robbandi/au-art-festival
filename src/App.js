import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import React, { useState } from "react";
// import styled from "styled-components";
// import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import { ReactComponent as ToTheMoon } from './tothemoon-double-rings.svg';
import LandingImage from './landing-page.png';
// import LandingImageEdition from './landing-page-edition-m.png';
var NumberFormat = require('react-number-format');

const rocketEmoji = "&#x1F680";

  function sayHello() {
    alert('You clicked me!');
  

  return (
    <div>
      <div>
      <button onClick={sayHello}>Default</button>;
      </div>
      </div>
  );
  }

function App() {
      return (
        <div className="App">
          {/* <h1>Luna</h1> */}
          {/* <header className="front"> */}
          {/* <h1><a id="red" href="#resume">Analytics</a></h1> */}
          {/* <span id="dot"></span> */}
          {/* <h1><a id="blue" href="#home">About</a></h1> */}
          {/* </header> */}

          <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>


          {/* <h4>To the moon!</h4> */}
          {/* <div><ToTheMoon/></div> */}
          <section>
          {/* <div className="inaudible">
            <p>Crypto Analytics at your Fingertips.</p>
            </div> */}
            </section>
          <div className="launchpad">
          <div className="moon">
          {/* <img src={LandingImageEdition}/> */}
          {/* <button className="mb-2" onClick={sayHello}>TO THE MOON</button> */}
                    </div>
                    </div>
                    {/* <ToTheMoon/> */}
          {/* </div> */}
          {/* <section>
            <p>Hello</p>
          </section> */}
          </div>
      );
  }

export default App;
