var xhr = new XMLHttpRequest();
var doc;

xhr.responseType = "json"
xhr.onreadystatechange = function() {

    if (xhr.readyState == 4 && xhr.status == 200) {
        doc = xhr.response;
        console.log(doc);
    } else {

    }
}
xhr.open("GET", "https://joooooooooj.github.io/home.html");

xhr.send();