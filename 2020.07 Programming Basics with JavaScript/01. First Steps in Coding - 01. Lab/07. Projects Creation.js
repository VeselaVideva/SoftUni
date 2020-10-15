function projectsCreation(arg1, arg2) {
    let name = arg1;
    let projectsCount = Number(arg2);
    let timeForOneProject = 3;

    let totalTime = projectsCount * timeForOneProject;

    console.log(`The architect ${name} will need ${totalTime} hours to complete ${projectsCount} project/s.`);
}

projectsCreation("Sanya", "9");