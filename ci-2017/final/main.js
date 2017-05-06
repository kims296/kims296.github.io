var container = document.queryselector(".wrapper");

if (container.id = "eating") {
	_(days).filter( function(thisday) {
		if _(thisday.feels).contains("eating")  {
			return true;
		}
		else return false;
	}  )
}