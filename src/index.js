import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyCyA2eYBGHMTWxOiBIP23Izr66Szr2tCUM',
  authDomain: 'todolist1-82ee0.firebaseapp.com',
  databaseURL: 'https://todolist1-82ee0.firebaseio.com',
  projectId: 'todolist1-82ee0',
  storageBucket: 'todolist1-82ee0.appspot.com',
  messagingSenderId: '711342994667',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
