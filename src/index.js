import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyBXc3tUGlmsFA5ub_rLc_wF-sw6QGM_HYw',
  authDomain: 'fds-cra-bbs-790f1.firebaseapp.com',
  databaseURL: 'https://fds-cra-bbs-790f1.firebaseio.com',
  projectId: 'fds-cra-bbs-790f1',
  storageBucket: 'fds-cra-bbs-790f1.appspot.com',
  messagingSenderId: '125390268893',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
