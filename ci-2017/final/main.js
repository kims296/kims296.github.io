
var container = document.createElement("div");
container.classList.add("container");
var body = document.querySelector("body");



function day1() {
	console.log("change");
	//var vid = document.getElementById('video');
	//vid.src = "";
	//$("#myVideoTag").attr("src", "../videos/day1.mp4"​​​​)​;
	var video = document.getElementById('myVideoTag');
video.src = "../videos/day1.mp4";
}
function day5() {
	console.log("change");
	//var vid = document.getElementById('video');
	//vid.src = "";
	//$("#myVideoTag").attr("src", "../videos/day1.mp4"​​​​)​;
	var video = document.getElementById('myVideoTag');
	video.src = "../videos/day5.0.mp4";
}

function day8() {
	console.log("change");
	//var vid = document.getElementById('video');
	//vid.src = "";
	//$("#myVideoTag").attr("src", "../videos/day1.mp4"​​​​)​;
	var video = document.getElementById('myVideoTag');
	video.src = "../videos/day1.mp4";
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
   





