$(document).ready(() => {
    $("#sign-in-button").on('click', () => {
        var user = $("#user").val()
        var pass = $("#password").val()

        $.ajax({
            type: "POST",
            url: 'https://reqres.in/api/login',
            dataType: "json",
            data: JSON.stringify({
                "email": user,
                "password": pass
            }),
            contentType: "application/json; charset=utf-8",
            success: (data) => {
                localStorage.setItem("token", data.token)
                window.open("../joooooooooj.github.io/index.html", "_self")
            },
            error: (data) => {
                const errorbox = $("#error-message")
                const error = data.responseJSON.error
                errorbox.removeClass("d-none")
                errorbox.addClass("d-block")
                errorbox.html(error)
            }
        });
    })
});