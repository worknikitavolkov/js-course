const UIgetJokes = document.querySelector("form");
const UIJokes = document.getElementById("jokes");

UIgetJokes.addEventListener("submit", getJokes);

function getJokes(e) {
    const numberOfJokes = document.getElementById("numberOfJokes").value;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    xhr.onprogress = function() {
        UIJokes.innerHTML = "<h3>Loading...</h3>"
    }

    xhr.onload = function() {
        if (this.status == 200) {
            const jokes = JSON.parse(this.responseText);
            let output = '';
            console.log(jokes);
            if (jokes.type == "success") {
                jokes.value.forEach(function(joke) {
                    output += `
                        <div>
                            <h3>Joke #${joke.id}</h3>
                            <p>${joke.joke}</p>
                        </div>
                    `
                });
            } else {
                output += "<p>Something went wrong!</p>";
            }
            UIJokes.innerHTML = output;
        }
    }
    
    xhr.send();

    e.preventDefault();
}