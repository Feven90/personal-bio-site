import axios from 'axios';

const loadProjects = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3005/projects')
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});
export default loadProjects;
