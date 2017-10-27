$(document).ready(function(){
//this line above always goes at the top//

//MY NOTES...
//use this to test each section--> alert("wrong");
//remember to check on browser console for errors
//event.preventDefault(); --> use this only for forms and links (eg show, hide, toggle)-- when the HTML takes you elsewhere by default; this stops it

	//define function called changeImage
	$("#submit-btn").click(changeImage);
	$("#city-type").focus(highlightText);

//when click in field remove exisiting text
	function highlightText(){
		event.preventDefault();
		$('#city-type').val("");
	}

	//input city name
	function changeImage(){
		event.preventDefault();
		var input = $('#city-type').val(); //fetch me whatever is put into the input field -- a new place/box to keep things
		input = input.trim(); //called an assignment (DEFINITELY GOT SOME HELP WITH THIS ONE)
		input = input.toUpperCase();//accept lower case -- make all inputs caps to work (DEFINITELY GOT SOME HELP WITH THIS ONE)

		if (input == "NEW YORK" || input == "NEW YORK CITY" || input =="NYC"){
			//if(testSomething){then show '#nyc' image
			$("body").addClass("nyc");
			//if not "New York", "New York City", or "NYC" show citipix skyline image
		} else {
			 $ ("body").removeClass("nyc");
		}

		if (input == "SAN FRANCISCO" || input == "SF" ||input == "BAY AREA"){
			//then show '#sf' image
			$("body").addClass("sf");
			//if not "San Francisco", "SF", or "Bay Area" show citipix skyline image
		 } else {
		 $ ("body").removeClass("sf");
		}

		if (input == "LOS ANGELES" || input =="LA" || input =="LAX"){
			//then show '#la' image
			$("body").addClass("la");
			//if not "Los Angeles", "LA", or "LAX" show citipix skyline image
		} else {
		 $ ("body").removeClass("la");
		}

		if (input == "AUSTIN" || input == "ATX"){
			//then show '#austin' image
			$("body").addClass("austin");
			//if not "Austin", or "ATX" show citipix skyline image
		} else {
		 $ ("body").removeClass("austin");
		}

		if (input == "SYDNEY" || input =="SYD"){
			//then show '#sydney' image
			$("body").addClass("sydney");
			//if not "Sydney" or "SYD" show citipix skyline image
		} else {
		 $ ("body").removeClass("sydney");
		}
		//how to clear out input field once text is sumbitted
		$("#city-type").val("Enter a city name...");
	}
})
