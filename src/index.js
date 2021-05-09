import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './App';
import { GlobalStyles } from './global-style';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
  rootElement
);
