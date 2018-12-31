import $ from 'jquery';
import 'bootstrap';

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
      <div>TechnologiesUsed: ${project.technologiesUsed}</div>
      <a href="${project.url}" target="_blank">URL</a>
      <a href="${project.githubUrl}" target="_blank">Git Hub</a>
      </div>
      </div>`;
    // }
    if (project.available === true) {
      $('#projectsPage').html(newString);
    }
  });
  //  writeToDom(newString, 'projectsPage');
};

const initializeProjectView = () => {
  projectsFile().then((data) => {
    console.log(data);
    createProjectCards(data);
  })
    .catch((error) => {
      console.error(error);
    });
};

// const bioLink = document.getElementById('navToBio');
// const technologyLink = document.getElementById('navToTechnologies');
// const projectsLink = document.getElementById('navToProjects');
// const projectsPage = document.getElementById('projectsPage');
// const bioPage = document.getElementById('bioPage');
// const technologyPage = document.getElementById('technologiesPage');

// Bio navbar link
// bioLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (bioPage.style.display === 'none') { bioPage.style.display = 'block'; }
//   technologyPage.style.display = 'none';
//   projectsPage.style.display = 'none';
// });

// // Technology navbar link
// technologyLink.addEventListener('click', () => {
//   if (technologyPage.style.display === 'none') { technologyPage.style.display = 'block'; }
//   bioPage.style.display = 'none';
//   projectsPage.style.display = 'none';
// });
// // Project navbar link
// projectsLink.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (projectsPage.style.display === 'none') {
//     projectsPage.style.display = 'block';
//     technologyPage.style.display = 'none';
//     bioPage.style.display = 'none';
//   }
// });

export default initializeProjectView;
