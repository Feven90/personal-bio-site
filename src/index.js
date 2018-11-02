import 'jquery';
import 'bootstrap';

import './index.scss';
import initializeView from './javascripts/components/projects';

const initializeApp = () => {
  initializeView.initializeProjectView();
};
initializeApp();
