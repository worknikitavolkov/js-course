const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

document.getElementById("get-users").addEventListener("click", getUsers);
document.getElementById("get-data").addEventListener("click", getData);

async function getUsers() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/");
    const users = await data.json();
    console.log(users);
}

async function getData() {
    const [users, posts, albums] = await Promise.all(
        urls.map(async function(url) {
            const data = await fetch(url);
            return await data.json(); 
        })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
}