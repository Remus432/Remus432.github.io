$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
	console.log(data);
	var object = JSON.stringify(data);
	var location = JSON.parse(object);
	console.log(location);
});

