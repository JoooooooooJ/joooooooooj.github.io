
var timer = null

function pesquisar() {
    var search = $("#search").val()
    var request = () => {
        $.ajax({
            type: "GET",
            url: `https://api.github.com/search/repositories?q=${search}`,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: (data) => {
                console.log(data)
                data.items.forEach(item => {
                    console.log(item)
                    var ul = document.getElementById("menu");
                    var li = document.createElement("li");
                    li.innerHTML = `<a href="${item.html_url}">${item.full_name}</a>`
                    ul.appendChild(li);
                })
            },
            error: (data) => {
                console.log(data.responseJSON)
            }
        });
    }
    clearTimeout(timer);
    timer = setTimeout(request, 500);
}