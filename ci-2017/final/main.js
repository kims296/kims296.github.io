var container = document.querySelector(".wrapper");

if (container.id == "eating") {
	_(days).filter( function(thisday) {
		if (_(thisday.feels).contains("eating"))  {
			return true;
		}
		else return false;
	}  )
} if else (container.id = "happy") {
	_(days).filter( function(thisday) {
		if (_(thisday.feels).contains("happy"))  {
			return true;
		}
		else return false;
	}  )

} if else (container.id = "normal") {
	_(days).filter( function(thisday) {
		if (_(thisday.feels).contains("normal"))  {
			return true;
		}
		else return false;
	}  )

	} if else (container.id = "partying") {
	_(days).filter( function(thisday) {
		if (_(thisday.feels).contains("partying"))  {
			return true;
		}
		else return false;
	}  )

} if else (container.id = "tired") {
	_(days).filter( function(thisday) {
		if (_(thisday.feels).contains("tired"))  {
			return true;
		}
		else return false;
	}  )

} if else (container.id = "weird") {
	_(days).filter( function(thisday) {
		if (_(thisday.feels).contains("weird"))  {
			return true;
		}
		else return false;
	}  )