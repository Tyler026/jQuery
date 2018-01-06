// Hands On 

/*$(document).ready(function() {
    $("h1").dblclick(function() {
        $(this).css("color", "blue");
    });
});

$(document).ready(function() {
    $("h1").hover(function() {
        $(this).css("font-size", "80px")
    });
});*/

//Stretch Goal #1

$(document).ready(function() {
    $(square).mouseenter(function() {
        $(this).css("background", "green");
    });
    $(square).mouseleave(function() {
        $(this).css("background", "blue");
    });
});

$(document).ready(function() {
    $(squares).mouseenter(function() {
        $(this).css("background", "green");
    });
    $(squares).mouseleave(function() {
        $(this).css("background", "blue");
    });
});