var marginY = 0;
var destination = 0;
var speed = 7;
var scroller = null;

function initScroll(elementID){
	destination = document.getElementById(elementID).offsetTop;
         

    scroller = setTimeout(function(){
    	initScroll(elementID);

    }, 1);

    marginY = marginY + speed;

    if(marginY >= destination){
    	clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}

function toTop(){
	scroller = setTimeout(function(){
		toTop();

    }, 1);

    marginY = marginY - speed;

    if(marginY <= 0){
    	clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}