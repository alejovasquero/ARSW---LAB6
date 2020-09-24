var app = (function (){
    var REPOSITORY = apiclient;

    var name = "";
    var fecha = "";
    var funciones = [];
    var cinema = [];

    var movieName = "";

    var seekerButton ="<td><button type='button' class='seeker'>"
                      					+ "Get Functions</button></td>"
    var widht = 100;
    var height = 100;
    var space = 3;
    var callback = function (param){

        if(param==undefined){
            alert("Cinema no existe o datos invalidos");
            return;
        }
        cinema = param;
        searchByNameAndDate();
        checkTable();
        funciones.map(function(data){
            var str = "<tr class='omg'>"+
              "<td name='movie'>"+data.movie+"</td>"+
              "<td name='genre'>"+data.genero+"</td>"+
              "<td name='fecha'>"+data.fecha+"</td>"+
              seekerButton +
            "</tr>";
            $('#mainTable').append(str)
        })
        //console.log(funciones);
    };

    var searchByName = function(){
        funciones = cinema.functions.map(function(data){
            return {fecha: data.date,
                    movie: data.movie.name,
                    genero: data.movie.genre};
        })
    }

    var searchByNameAndDate = function(){
        funciones = cinema.map(function(data){
            return {fecha: data.date,
                    movie: data.movie.name,
                    genero: data.movie.genre};
        })
    }

    var checkTable = function(){
        $('#mainTable').find('td[name="movie"]').each(function(){
            $(this).parents("tr").remove();
        });
    }

    var drawFunction = function(seats){
        var i =space, j=0;
        console.log(widht);
        console.log(height);
        var totalH = seats.length*height;
        var totalW = seats[0].length*widht;
        var interlineado = (seats.length - 1)*space + space *2;
        var intercolumnas = (seats[0].length - 1)*space + space *2;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        console.log(totalW);
        console.log(totalH + interlineado);
        ctx.canvas.height = totalH + interlineado;
        ctx.canvas.width = totalW + intercolumnas;
        seats.forEach(function(row){
            console.log(row);
            j=space;
            row.forEach(function(coll){
                console.log(coll);
                // Create gradient
                var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
                grd.addColorStop(0, coll===true ? "green": "red");
                // Fill with gradient
                ctx.fillStyle = grd;
                ctx.fillRect(j, i, widht, height);
                j+=widht + space;
            });
            i+=height +space;
        });


        $("#divCheckbox").show();
        console.log("ok");
    }

    var setFunction= function(functionsSource){
        var movieSelected = functionsSource.filter(
            (p) => p.movie.name == movieName);
        if(movieSelected.length != 0 ){
            console.log(movieSelected[0]['seats']);
            drawFunction(movieSelected[0]['seats']);
        }

    }


    return {
        setNameCinema : function (newName){
            name=newName;
        },
        setDateCinema : function (newFecha){
            fecha=newFecha;
        },
        setFuntionsByNameAndDate : function(nombre, date){
            app.setDateCinema(date);
            app.setNameCinema(nombre);
            REPOSITORY.getFunctionsByCinemaAndDate(nombre,date,callback);
        },
        setFuntionsByName : function(name){
            REPOSITORY.getFunctionsByCinema(name,callback);
        },
        setFunctionByNameDateMovie: function(cinema, date, movie){
            movieName = movie;
            $('#function').text(movie);
            REPOSITORY.getFunctionsByCinemaAndDate(cinema, date, setFunction);
        },
    };

})();