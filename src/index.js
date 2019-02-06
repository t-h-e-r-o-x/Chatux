import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/index.js";

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render); //subscribe to updates from the store
serviceWorker.register();

function fancyLog(){
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
