import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import morseCode from "./components/morseCode";
function App() {
  // const [converter, setConverter] = Component([]);

  // React Fragments allow you to wrap multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.
  return (
    <React.Fragment>
      <Header />
      {/* <morseCode setConverter={setConverter} /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
