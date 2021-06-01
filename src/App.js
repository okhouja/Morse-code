import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Morse from "./components/Morse";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Morse />
      <Footer />
    </React.Fragment>
  );
}

export default App;
