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
     
createProjectCards();