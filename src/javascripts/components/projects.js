import $ from 'jquery';
import loadProjects from '../data/projectsData';


const createProjectCards = (projects) => {
  let newString = '';
  for (let i = 0; i < projects.length; i + 1) {
    if (projects[i].available === true) {
      newString += '<div class="projects">';
      newString += `<h4>Title: ${projects[i].title} ${','}`;
      newString += `Image: <img id = "image" src = ${projects[i].screenshot} ${','}>`;
      newString += `Description: ${projects[i].description} ${','}`;
      newString += `TechnologiesUsed: ${projects[i].technologiesUsed} ${','}`;
      newString += `Available: ${projects[i].available} ${','}`;
      newString += `<a href="${projects[i].url} ${','}">URL</a>`;
      newString += `GithubUrl: ${projects[i].githubUrl}</h4>`;
      newString += '</div>';
    }
  }
  $('#projectsPage').append(newString);
  //  writeToDom(newString, 'projectsPage');
};

const initializeProjectView = () => {
  loadProjects().then((projects) => {
    createProjectCards(projects);
  })
    .catch((error) => {
      console.error(error);
    });
};

const bioLink = document.getElementById('navToBio');
const technologyLink = document.getElementById('navToTechnologies');
const projectsLink = document.getElementById('navToProjects');
const projectsPage = document.getElementById('projectsPage');
const bioPage = document.getElementById('bioPage');
const technologyPage = document.getElementById('technologiesPage');

// Bio navbar link
bioLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (bioPage.style.display === 'none') { bioPage.style.display = 'block'; }
  technologyPage.style.display = 'none';
  projectsPage.style.display = 'none';
});

// Technology navbar link
technologyLink.addEventListener('click', () => {
  if (technologyPage.style.display === 'none') { technologyPage.style.display = 'block'; }
  bioPage.style.display = 'none';
  projectsPage.style.display = 'none';
});
// Project navbar link
projectsLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (projectsPage.style.display === 'none') {
    projectsPage.style.display = 'block';
    technologyPage.style.display = 'none';
    bioPage.style.display = 'none';
  }
});
createProjectCards();

export default initializeProjectView;
