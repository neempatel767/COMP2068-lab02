import React from 'react';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// You need to import your shared header...

const Home = () => {

  const but = {
    "font-size" : "1.5em",
    margin : "1em",
    padding : "50dp 50dp 50dp 50dp",
    position: "absolute",
    top: "50%",
    left: "45%",
  }
  return (
    <>
    <Header />
    <button style={but}>
      <Link to="/About">About</Link>
    </button>
    
      {/* You need to use your shared header component... */}
      {/* You need a link to your about page as a call to action */}
    </>
  );
}
 
export default Home;