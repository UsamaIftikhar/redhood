import React, { useState, useEffect } from 'react';
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Portfolios from "./Pages/portfolios";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import BlogDetails from "./Pages/blog_details";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/common.scss";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <div className={`loader ${loading ? "" : "hidden"}`}></div>
          {!loading && (
            <div>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/portfolios">
                <Portfolios />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </div>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
