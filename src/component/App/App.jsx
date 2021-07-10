import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Category from "../Category/Category"
import Home from "../Home/Home"
import Products from "../Products/Products"

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/category"><Category /></Route>
        <Route path="/product"><Products /></Route>
        <Route path="/:id">
          <p>404: Page not found</p>
        </Route>
</Switch>
    </div>
  );
}

export default App;
