
// Run the function only after the whole page has loaded, and user has clicked submit button



// Grab the value that was entered by the user with $.val()

// 	var a = ($("nyc").val())
// 	var b = ($("san francisco").val())
// 	var c = ($)("los angeles").val())
// 	var d = ($)("austin").val())
// 	var e = ($)("sydney").val())


$(document).ready(function(){
	$("#submit-btn").click(switchPhotos);

function switchPhotos(){
event.preventDefault();
var city = $("#city-type").val();
console.log(city);

if (city == "nyc"){
	$("body").attr("class", "nyc");
}

else if (city == "san francisco"){
	$("body").attr("class", "sf");

}


else if (city == "los angeles") {
	$("body").attr("class", "la");
}



else if (city == "austin") {
	$("body").attr("class", "austin");
}


else {
	$("body").attr("class", "sydney");
}
}
})



// If var a = $("nyc")
	// console.log ($)(".nyc").val());
	// console.log ($)(".san_francisco").val());
	// console.log ($)(".los_angeles").val());
	// console.log ($)(".austin").val());
	// console.log ($)(".sydney").val());
	
// }
// document.background-image.nyc;

// If var a {

// }

// document.attr.background-image

// Prvent a page refresh by using evt.preventDefault()



// Comapre the user's input to a set of variables using "var city"



// Set up conditionals so that the proper image shows



// End of document.ready()
