
var container = document.createElement("div");
container.classList.add("container");

var body = document.querySelector("body");

var videoAddress = "videos/day"
body.appendChild(container);

function myFunction() {
    var x = document.createElement("video");

    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src","movie.mp4");
    } else {
        x.setAttribute("src","movie.ogg");
    }

    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);
}



var filtered;

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

var anything = document.createElement("eating");
anything.classList.add("anything");

var videos = document.querySelector("videos");


