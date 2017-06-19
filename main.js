$(document).ready(function () {


$("button").on("click", function() {

// Convert fahrenehit to celcius

$.getJSON("http://crossorigin.me/http://ip-api.com/json/?callback=?", function(data) {
	var zip = data.zip;
	var code = data.countryCode;
	var api = "http://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + code + "&appid=d27525a5c89546287b4b541007f4042b";

	console.log(data);
	var location = JSON.stringify(data);
	var div = document.getElementById("location");
	/*var city = data.city;*/
	var zip = data.zip;
	var code = data.countryCode;
	div.innerHTML = data.city + data.country;
	/*console.log(location);
	console.log(data.country);*/
	$.getJSON(api, function(weather) {
	console.log(weather);
});
	
});

/*$.getJSON(api, function(weather) {
	console.log(weather.coord.lat);
});*/
	

});

});