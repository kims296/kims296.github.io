

for (var i=0; i < 500; i++) {
    $("body").append("<div class='dot'></div>");
    $("body").append("<img src='img/snowflake.jpg'></img>");
}

var opacity = 0;
var myCounter = 1;


 

$(".dot").each(function() {
    $(this).css("opacity", opacity/0); 
    $(this).html(myCounter); 
    $(this).css("height", myCounter+50);
    $(this).css("width", myCounter+50);
    console.log(myCounter+50);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    

    opacity++;
});

$(".dot").click(function() {
    $(this).css("background-color", "gray");
    $(this).toggleClass("whatever");
});

$(".dot").click(function() {
    $(this).css("background-color" , "white");
    $(this).toggleClass("point");
});

