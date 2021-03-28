function loadCommits() {
    const [username, repo] = document.querySelectorAll('#username, #repo');
    const commits = document.querySelector('#commits');
    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits0`;

    fetch(url)
        .then(handleError)
        .then(response => response.json())
        .then(data => {
            commits.innerHTML = data.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`).join('');
        })
        .catch (error => {
            commits.innerHTML += error;
        })
}

function handleError(response) {
    if (response.ok === false) {
        throw new Error(`${response.status} (${response.statusText})`);
    }
    return response;
}