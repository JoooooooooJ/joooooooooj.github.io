function user() {
    var input, filtro, menuUser, menuItens, links;
    input = document.getElementById("searchUser");
    filtro = input.value.toUpperCase();
    menuUser = document.getElementById("menuUser");
    menuItens = menuUser.getElementsByTagName("li");
    for (var i = 0; i < menuItens.length; i++) {
        links = menuItens[i].getElementsByTagName("u")[0];
        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            menuItens[i].style.display = "";
        } else {
            menuItens[i].style.display = "none";
        }
    }
}