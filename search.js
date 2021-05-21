var timer = null


$(document).ready(() => {
    $("#adicionar-repo").on('click', () => {
        var reponame = $("#repo-name").val()
        var response = $("#response")
        response.addClass("d-none")
        if (!reponame) {
            response.removeClass("d-none")
            response.html("INFORME UM NOME VALIDO PARA O REPOSITORIO")
        } else {
            var token = localStorage.getItem("token")
            console.log(reponame)
            $.ajax({
                type: "POST",
                url: `/api/repositorios`,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    "name": reponame
                }),
                beforeSend: (request) => {
                    request.setRequestHeader("token", token);
                },
                success: (data) => {
                    if (data.message) {
                        var response = $("#response")
                        response.removeClass("d-none")
                        response.html(data.message)
                    }
                },
                error: (data) => {
                    console.log(data.responseJSON)
                }
            });
        }
    })
})

function pesquisar() {
    var search = $("#search").val()
    if (search.toString().length > 3) {
        var request = () => {
            $.ajax({
                type: "GET",
                url: `/api/repositorios/search?q=${search}`,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: (data) => {
                    var ul = document.getElementById("menu");
                    ul.innerHTML = ''
                    data.items.forEach(item => {
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
}