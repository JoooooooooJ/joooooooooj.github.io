$(document).ready(() => {
    var timer = null
    var queryElement = $("#searchQuery")
    queryElement.on("keyup", () => {
        var search = queryElement.val()
        var request = () => {
            $.ajax({
                type: "GET",
                url: `https://api.github.com/search/repositories?q=${search}`,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: (data) => {
                    data.items.foreach(item => {
                        var ul = document.getElementById("search");
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
    })
})


function pesquisar() {
    var input, filtro, menu, menuItens, links;
    input = document.getElementById("search");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for (var i = 0; i < menuItens.length; i++) {
        links = menuItens[i].getElementsByTagName("a")[0];
        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            menuItens[i].style.display = "";
        } else {
            menuItens[i].style.display = "none";
        }
    }
}