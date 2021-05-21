$(document).ready(() => {
    $("#sign-in-button").on('click', () => {
        var username = $("#user").val()
        var password = $("#password").val()

        const errorbox = $("#error-message")
        if (!username) {
            errorbox.removeClass("d-none")
            errorbox.addClass("d-block")
            errorbox.html("Preencha corretamete o usuário")
        } else if (!password) {
            errorbox.removeClass("d-none")
            errorbox.addClass("d-block")
            errorbox.html("Preencha corretamete a senha")
        } else {
            login(username, password)
        }
    })

    $("#register-button").on('click', () => {
        var username = $("#user").val()
        var password = $("#password").val()
        var userType = $("input:radio[name=user-type]:checked").val();

        const errorbox = $("#error-message")
        if (!username) {
            errorbox.removeClass("d-none")
            errorbox.addClass("d-block")
            errorbox.html("Preencha corretamete o usuário")
        } else if (!password) {
            errorbox.removeClass("d-none")
            errorbox.addClass("d-block")
            errorbox.html("Preencha corretamete a senha")
        } else {
            create(username, password, userType)
        }
    })

    $("#create-account").on('click', () => {
        $("#sign-in-button").addClass("d-none")
        $("#register-button").removeClass("d-none")
        $("#type-box").removeClass("d-none")
    })
});

function login(username, password) {
    $.ajax({
        type: "POST",
        url: '/api/user/login',
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
}

function create(username, password, type) {
    $.ajax({
        type: "POST",
        url: '/api/user',
        dataType: "json",
        data: JSON.stringify({
            username,
            password,
            type
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
}