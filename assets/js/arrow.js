$(document).ready(function(){
    setInterval(function(){
        var $hover = $("#goToSlideTwo");
        var $svg = $("svg");
        if($hover.is(":hover")) {
        $svg.css("display", "block");
        }
        else {
        $svg.css("display", "none");
        }
    }, 200);
});