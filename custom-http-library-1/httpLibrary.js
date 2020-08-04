function httpLibrary() {
    this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request
httpLibrary.prototype.get = function(url, callback) {
    this.http.open("GET", url, true);
    const self = this;
    this.http.onload = function() {
        if (self.http.status == 200)
            callback(null, self.http.responseText);
        else
            callback("Error: " + self.http.status, null);
    }
    this.http.send();
}

//Make an HTTP DELETE Request
httpLibrary.prototype.delete = function(url, callback) {
    this.http.open("DELETE", url, true);
    const self = this;
    this.http.onload = function() {
        if (self.http.status == 200)
            callback(null, "Post Deleted");
        else
            callback("Error: " + self.http.status, null);
    }
    this.http.send();
}

//Make an HTTP POST Request
httpLibrary.prototype.post = function(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT Request
httpLibrary.prototype.put = function(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}