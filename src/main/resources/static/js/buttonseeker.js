$(document).ready(function(){
    $(document).on('click', '.seeker', function() {
        var $movie = $(this).closest(".omg").find("td[name='movie']").text();
        var $fecha = $(this).closest(".omg").find("td[name='fecha']").text();
        var $cinema = $('#cinema').val();
        app.setFunctionByNameDateMovie($cinema, $fecha, $movie);
    });
});