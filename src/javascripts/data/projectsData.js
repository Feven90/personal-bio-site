import $ from 'jquery';

const loadProjects = () => new Promise((resolve, reject) => {
  $.get('db/projects.json')
    .done((data) => {
      resolve(data.projects);
    })
    .fail((error) => {
      reject(error);
    });
});
export default { loadProjects };
