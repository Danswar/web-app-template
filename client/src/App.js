import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';
import store from "./store";

import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
