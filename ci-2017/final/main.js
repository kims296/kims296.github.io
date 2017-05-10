
var container = document.createElement("div");
container.classList.add("container");
var body = document.querySelector("body");


var videos = document.createElement("source");
videos.classList.add("videos");
container.appendChild(videos);


function myFunction(thisone) {

	// var x = 4;
	// var x = "hello";
	// var x = [0, 3, 2];
    var x = document.createElement("video");

//     for (var i = 0; i < thisone.length; i++ ) {
//          var videos = thisone[i];
//     console.log(videos);
// }

//     x.setAttribute("width", "320");
//     x.setAttribute("height", "240");
//     x.setAttribute("controls", "controls");
    document.body.appendChild(x);
}



var filtered;
console.log(videos);

if (container.id == "eating") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("eating"))  {
			return true;
		}
		else return false;
	}  );
} else if (container.id = "happy") {
	filtered = _("days").filter( function(thisday) {
		if (_(thisday.feels).contains("happy"))  {
			return true;
		}
		else return false;
	}  );

} else if (container.id = "normal") {
	filtered = _("days").filter( function(thisday) {
		if (_(thisday.feels).contains("normal"))  {
			return true;
		}
		else return false;
	}  );

	} else if (container.id = "partying") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("partying"))  {
			return true;
		}
		else return false;
	}  );

} else if (container.id = "tired") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("tired"))  {
			return true;
		}
		else return false;
	}  );

} else if (container.id = "weird") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("weird"))  {
			return true;
		}
		else return false;
	});

} else if (container.id = "morning") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("morning"))  {
			return true;
		}
		else return false;
	});

} else if (container.id = "afternoon") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("afternoon"))  {
			return true;
		}
		else return false;
	});

} else if (container.id = "evening") {
	filtered = _(days).filter( function(thisday) {
		if (_(thisday.feels).contains("evening"))  {
			return true;
		}
		else return false;
	});
}



_(filtered).each(function(this_individual_day,index) {
	// create element
	// set attributes (like classlist or id)
	// append child
});
   





