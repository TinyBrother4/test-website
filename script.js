const username = "octocat"; // CHANGE THIS to your GitHub username
const container = document.getElementById("repos");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    data.forEach(repo => {
      const div = document.createElement("div");
      div.className = "repo";

      div.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "No description"}</p>
        <div class="stats">
          ⭐ ${repo.stargazers_count} |
          🍴 ${repo.forks_count}
        </div>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    container.innerHTML = "Failed to load repos 😢";
    console.error(err);
  });
