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
    $(square).hide(function() {
        $(this).css("background", "green");
    });
    $(square).mouseleave(function() {
        $(this).css("background", "blue");
    });
});

$(document).ready(function() {
    $(squares).hide(function() {
        $(this).css("background", "green");
    });
    $(squares).mouseleave(function() {
        $(this).css("background", "blue");
    });
}); 

$(document).ready(function() {
    $(".testPage").hide(function() {
        
    });
});

// Stretch Goal #2

$(document).ready(function() {
    $(element1).click(function() {
        $(this).css("color", "red");
    });
});

$(document).ready(function() {
    $(element2).dblclick(function() {
        $(this).css("font-size", "30px");
    });
});

$(document).ready(function() {
    $(element3).hover(function() {
        $(this).css("background", "blue");
    });
});

$(document).ready(function() {
    $(element4).mouseenter(function() {
        $(this).css("color", "yellow");
    });
});

$(document).ready(function() {
    $(element5).mouseleave(function() {
        $(this).css("color", "orange");
    });
});

$(document).ready(function() {
    $(element6).click(function() {
        $(this).css("font-family", "Futura");
    });
});