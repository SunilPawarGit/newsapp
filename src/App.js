import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          {" "}
          <Route
            exact
            path="/"
            element={
              <News
                pageSize={this.pageSize}
                key="general"
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                pageSize={this.pageSize}
                key="business"
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                pageSize={this.pageSize}
                key="entertainment"
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                pageSize={this.pageSize}
                key="health"
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={this.pageSize}
                key="science"
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                pageSize={this.pageSize}
                key="sports"
                country="in"
                category="sports"
              />
            }
          />{" "}
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={this.pageSize}
                key="technology"
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
