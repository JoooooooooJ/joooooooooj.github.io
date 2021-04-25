var timer = null

function pesquisar() {
    var search = $("#search").val()
    if(search.toString().lenght > 3){
    var request = () => {
        $.ajax({
            type: "GET",
            url: `https://api.github.com/search/repositories?q=${search}`,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: (data) => {
                console.log(data)
                var ul = document.getElementById("menu");
                ul.innerHTML = ''
                data.items.forEach(item => {
                    console.log(item)
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
