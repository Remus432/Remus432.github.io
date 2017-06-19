$(document).ready(function () {


$("button").on("click", function() {

// Convert fahrenehit to celcius

$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
	/*var zip = data.zip;
	var code = data.countryCode;*/
	var lat = data.lat;
	var lon = data.lon;
	/*var api = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + code + "&appid=d27525a5c89546287b4b541007f4042b";*/
	var api = "http://api.apixu.com/v1/current.json?key=eac7ca1087144cc6b1c130638171606&q=" + lat + "," + lon;

	console.log(data);
	var location = JSON.stringify(data);
	var div = document.getElementById("location");
	/*var city = data.city;*/
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