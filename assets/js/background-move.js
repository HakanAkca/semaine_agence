$(document).ready(function() {
    var movementStrength = 20;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#chaussetteenroulees").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 0;
        var newvalueY = height * pageY * -3 - 50;
        $('#chaussetteenroulees').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
})