import React from 'react';
import Header from '../shared/Header';


const Home = () => {

  const Style = {
    color: "white",
    backgroundColor: "#8B3AEA",
    padding: "10px",
    fontFamily: "cursive",
    "text-align" : "center",
  };
  return (
    <>
    <Header />
    <legend>
    <h1 style={Style}>I can't say to an error to stay in my project.</h1>
    </legend>
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
    </>
  );
}
 
export default Home;