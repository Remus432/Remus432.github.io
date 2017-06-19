$("button").on("click", function() {



$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
	var api = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d27525a5c89546287b4b541007f4042b";

	console.log(data);
	var location = JSON.stringify(data);
	var div = document.getElementById("location");
	/*var city = data.city;*/
	div.innerHTML = data.city + data.country;
	/*console.log(location);
	console.log(data.country);*/
	$.getJSON(api, function(weather) {
	console.log(weather.coord.lat);
});
	
});

/*$.getJSON(api, function(weather) {
	console.log(weather.coord.lat);
});*/
	

});