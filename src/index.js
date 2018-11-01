import 'jquery';
import 'bootstrap';

import './index.scss';
import initializeProjectView from './javascripts/components/projects';

const initializeApp = () => {
  initializeProjectView();
};
initializeApp();
