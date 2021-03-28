async function loadRepos() {
	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	const response = await fetch(url);
	const data = await response.json();

	const ul = document.getElementById('repos');
	ul.innerHTML = '';

	data.forEach(r => {
		const li = document.createElement('li');
		li.textContent = r.full_name;
		ul.appendChild(li);
	})
}