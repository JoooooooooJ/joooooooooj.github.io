$(document).ready(() => {
    $("#sign-in-button").on('click', () => {
        var username = $("#user").val()
        var password = $("#password").val()

        $.ajax({
            type: "POST",
            url: '/api/login',
            dataType: "json",
            data: JSON.stringify({
                username,
                password
            }),
            contentType: "application/json; charset=utf-8",
            success: (data) => {
                localStorage.setItem("token", data.token)
                window.open("../index.html", "_self")
            },
            error: (data) => {
                const errorbox = $("#error-message")
                const error = data.responseJSON.message
                errorbox.removeClass("d-none")
                errorbox.addClass("d-block")
                errorbox.html(error)
            }
        });
    })
});