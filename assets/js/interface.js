$(document).ready(function () {
    $("#arrowInterface").click(function () {
        interface1 = $("#interfaceOne");
        interface2 = $("#interfaceTwo");

        interface1.addClass("opacity_anm");
        interface1.delay(1000).queue(function (next) {
            $(this).css('display', 'none');
            next();
        });
        interface2.delay(400).queue(function (next) {
            $(this).css('display', 'block');
            $(this).addClass("bounceInRight");
            next();
        });
    });

    $("#woman").click(function () {
        interface2 = $("#interfaceTwo");
        interface2.css("display", "none");
        $("#interfaceThree").css("display", "block");

        $("#imggame").delay(50).queue(function (next) {
            $(this).css('display', 'block');
            $(this).addClass("opacity_on");
            $(".gamme").css("display", "block");
            $(".gamme").addClass("opacity_on");

            $("#sport").css("display", "block");
            $("#sport").addClass("opacity_on");

            $("#lifestyle").css("display", "block");
            $("#lifestyle").addClass("opacity_on");
            next();
        });
    });

    interface3 = $("#interfaceThree");

    $('#sport').click(function () {
        $(this).addClass('activesport');
        setTimeout(function () {
            $('.activesport').removeClass('activesport');
        }, 1000);
        interface3 = $("#interfaceThree");
        interface3.delay(1050).queue(function (next) {
            $(this).css("display", "none");
        });
        interface4 = $("#interfaceFour");
        interface4.css("display", "block");

        $("#imgcarou").delay(50).queue(function (next) {
            $(this).css('display', 'block');
            next();
        });
    });

    $("#option").click(function () {
        $("#interfaceFour").css("display", "none");
        $("#interfaceFive").css("display", "block");

        $("#imgdeco").delay(50).queue(function (next) {
            $(this).css('display', 'block');
            $(this).addClass("opacity_on");

            $("#color").css("display", "block");
            $("#color").addClass("opacity_on");

            $("#decor").css("display", "block");
            $("#decor").addClass("opacity_on");
            next();
        });
    });

    $("#imgdeco").click(function () {
        $("#imgdeco").attr("src", "assets/img/imgdecoclick.png");
        $("#imgdeco").click(function () {
            $("#interfaceFive").css("display", "none");
            $("#interfaceFour").css("display", "block");
            $("#imgcarou").attr("src", "assets/img/imgresult.png");
            $('#photo').attr('id', 'photofinal');
            $('#option').attr('id', 'optionfinal');


            $("#photofinal").click(function () {
                $("#interfaceFour").css("display", "none");
                $("#interfaceSix").css("display", 'block');
            });
        });
    });


});