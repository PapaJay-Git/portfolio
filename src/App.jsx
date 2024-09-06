
import {useEffect, useState, useRef} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MainButton from "./components/MainButton";
import {Element} from 'react-scroll';


const App = () => {
    return <>
          <Header />
          <Home />
          <Element name="about_me">
            <section className="min-h-[80vh] bg-grey-800" />
          </Element>
          <Element name="projects">
            <section className="min-h-[80vh] bg-blue-500" />
          </Element>
          <footer className="min-h-[80vh] bg-gray-500">

          </footer>
    </>;
};

export default App;
