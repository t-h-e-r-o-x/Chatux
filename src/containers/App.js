import React, { Component } from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import './App.css';
import store from "../store/index.js";
import _ from "lodash";

const App = () => {
  const {contacts} = store.getState();

  return(
    <div className="App">
      <Sidebar contacts = {_.values(contacts)} />
      <Main />
      </div>
  );
};

export default App;
