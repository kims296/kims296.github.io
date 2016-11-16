$("body").css("background-color" ,"gray");

for (var i=0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
    $("body").append("<img src= 'img/cotton.jpg'></img>");
}

var opacity = 0;
var myCounter = 1;


 

$(".dot").each(function() {
    $(this).css("opacity", opacity/150); 
    $(this).html(myCounter); 
    myCounter++;
    $(this).css("height", myCounter+50);
    $(this).css("width", myCounter+50);
    console.log(myCounter+50);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    
    myCounter++;
    opacity++;
});

$(".dot").click(function() {
    $(this).css("background-color", "baby-blue");
    
    $(this).toggleClass("whatever");
});

