let projects = [
    {
        title: "Cool Project", 
        screenshot: "https://i.ytimg.com/vi/nnTyf__NK6s/maxresdefault.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project", 
        screenshot: "https://i.ytimg.com/vi/nnTyf__NK6s/maxresdefault.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];
const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += `<h6>${stringToPrint}</h6>`;
};

const createProjectCards = () => {
      let newString = '';
    for (let i = 0; i<projects.length; i++){
        if (projects[i].available === true){
            newString += `<div class="projects">`;
            newString += `<h4>Title: ${projects[i].title} ${','}` ;
            newString += `Image: <img id = "image" src = ${projects[i].screenshot} ${','}>`;
            newString += `Description: ${projects[i].description} ${','}` ;
            newString += `TechnologiesUsed: ${projects[i].technologiesUsed} ${','}` ;
            newString += `Available: ${projects[i].available} ${','}` ;
            newString += `<a href="${projects[i].url} ${','}">URL</a>` ;
            newString += `GithubUrl: ${ projects[i].githubUrl}</h4>` ;
            newString += `</div>`;
        };
    };
     writeToDom(newString, 'projectsPage');
};
     
const bioLink = document.getElementById("navToBio");
const bioPage = document.getElementById("bioPage");
// const projectsPage = document.getElementById("projectsPage");
    bioLink.addEventListener = ('click',(e) => {
        e.preventDefault();
    if (bioPage.style.display === 'none')
    bioPage.style.display = 'block';
    technologyPage.style.display = 'none';
    projectsPage.style.display = 'none';
    });
   

const technologyLink = document.getElementById("navToTechnologies");
const technologyPage = document.getElementById("technologiesPage");

technologyLink.addEventListener = ('click',(e) => {
    // e.preventDefault();
    if(technologyPage.style.display === 'none')
    technologyPage.style.display = 'block';
    bioPage.style.display = 'none';
    projectsPage.style.display = 'none';
})

const projectsPage = document.getElementById("projectsPage");
const projectsLink = document.getElementById("navToProjects");
// projectsLink.addEventListener = ('click', (e) => {
//     e.preventDefault();
//     if(projectsPage.style.display === 'block'){
//         projectsPage.style.display = 'none';
//     }
//     else {
//         projectsPage.style.display = 'block';
//     }
// })

// const bioLInk = () => {
//     // const navToBioLink = document.getElementById('bio');
//     const link = `<li><a id="navToBio" href="index.html#bioPage">Bio</a></li>`;
//     writeToDom(link,'navLinks');
// }
createProjectCards();
// bioLInk();
