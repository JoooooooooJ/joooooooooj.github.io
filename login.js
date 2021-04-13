$(document).ready(function() {
    var user = $("#user").val()
    var pass = $("#password").val()

    $("#login").on('submit', function() {
        $.post("https://reqres.in/api/login", {
                "email": user,
                "password": pass
            },
            function(data, status) {
                localStorage.setItem("token", data.token)
            })
    })
})