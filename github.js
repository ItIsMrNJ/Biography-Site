const username = "ItIsMrNJ";
const profileDiv = document.getElementById("profile");

fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("پروفایل پیدا نشد!");
        }
        return response.json();
    })
    .then(data => {
        profileDiv.innerHTML = `
            <img src="${data.avatar_url}" alt="Avatar" width="150">
            <p>Bio: ${data.bio || "ندارد"}</p>
            <p>Public Repos: ${data.public_repos}</p>
            <p>Followers: ${data.followers} | Following: ${data.following}</p>
            <a href="${data.html_url}" target="_blank">show all in GitHub</a>
        `;
    })
    .catch(error => {
        profileDiv.innerHTML = `<p>خطا: ${error.message}</p>`;
    });