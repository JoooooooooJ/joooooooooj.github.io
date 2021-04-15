$(doc).ready(function() {
    $("#repositorio").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#repositorioApi tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});