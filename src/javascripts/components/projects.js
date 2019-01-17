import $ from 'jquery';
import 'bootstrap';
import './projects.scss';
import projectsFile from '../data/projectsData';
import profileImage from '../../../image/profile.jpg';
// import siteImg from '../../../image/butterfly.jpg';
// import siteImg from '../../../image/abstract.jpg';

$('#profile-picture').attr('src', profileImage);


const createProjectCards = (projects) => {
  let newString = '';
  newString = '<h1 class="project-text">Projects</h1>';
  projects.forEach((project) => {
    newString += `<div class="projects d-flex flex-row">
      <div class="m-4">
      <img id = "image" src = ${project.screenshot} ${','}>
      </div>
      <div class="m-4">
      <div><h4>${project.title}</h4></div>
      <div>${project.description}</div>
      <div>Technologies Used: ${project.technologiesUsed}</div>
      <a href="${project.url}" target="_blank">URL</a>
      <a href="${project.githubUrl}" target="_blank">Git Hub</a>
      </div>
      </div>`;
    // }
    if (project.available === true) {
      $('#projectsPage').html(newString);
    }
  });
};

const initializeProjectView = () => {
  projectsFile().then((data) => {
    createProjectCards(data);
  })
    .catch((error) => {
      console.error(error, 'page can not load');
    });
};

export default initializeProjectView;
