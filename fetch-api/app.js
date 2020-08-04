document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

function getText(e) {
    fetch("text.txt")
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("output").innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}


function getJson(e) {
    fetch("posts.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (posts) {
        let output = '';
        posts.forEach(function(post) {
            output += `
                <div>
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                </div>
            `
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });
}

function getExternal(e) {
    fetch("https://api.github.com/users")
    .then(function (res) {
        return res.json();
    })
    .then(function (users) {
        let output = '';
        users.forEach(function(user) {
            output += `
                <div>
                    <h4>${user.login}</h4>
                    <img src = "${user.avatar_url}">
                    <a href = "${user.html_url}">Link to the github</a>
                </div>
            `
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
    });
}