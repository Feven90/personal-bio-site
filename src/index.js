import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from '../db/apiKeys.json';

import './index.scss';
import initializeProjectView from './javascripts/components/projects';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  initializeProjectView();
};
initializeApp();
