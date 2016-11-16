$("body").css("background-color" ,"blue");

for (var i=0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
    
}

var opacity = 0;
var myCounter = 1;

$(".dot").each(function() {
    $(this).css("opacity", opacity/100); 
    $(this).html(myCounter); myCounter++;
    $(this).css("height", myCounter+100);
    $(this).css("width", myCounter+100);
    $(this).css("top",Math.floor(Math.random()*$
    (window).height()));
    
    myCounter++;
    opacity++;
});