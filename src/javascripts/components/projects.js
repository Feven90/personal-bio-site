import $ from 'jquery';
import 'bootstrap';

import projectsFile from '../data/projectsData';
// import siteImg from '../../../image/bioImg.jpg';
// import siteImg from '../../../image/butterfly.jpg';
// import siteImg from '../../../image/abstract.jpg';

// $('#img1').attr('src', siteImg);


const createProjectCards = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `<div class="projects">
      <h4>Title: ${project.title} ${','}
      Image: <img id = "image" src = ${project.screenshot} ${','}>
      Description: ${project.description} ${','}
      TechnologiesUsed: ${project.technologiesUsed} ${','}
      Available: ${project.available} ${','}
      <a href="${project.url} ${','}">URL</a>
      GithubUrl: ${project.githubUrl}</h4>
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
