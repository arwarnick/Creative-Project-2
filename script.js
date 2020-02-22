document.getElementById("nameSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	let firstName = document.getElementById("firstNameInput").value;
	let lastName = document.getElementById("lastNameInput").value;
	//if (firstName === "" || lastName === "")
	//	return;
	const url = "https://www.balldontlie.io/api/v1/players?per_page=100&search=" + lastName;
	fetch(url)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			let results = "";
			let data = "";
			for (let i = 0; i < json.data.length; ++i) {
				data = json.data[i];
				if (data.first_name.toLowerCase() == firstName.toLowerCase() && data.last_name.toLowerCase() == lastName.toLowerCase()) {
					results += data.first_name + " " + data.last_name + "<br/>";
					results += "team: " + data.team.name + "<br/>";
					results += "city: " + data.team.city + "<br/>";
					results += "conference: " + data.team.conference + "<br/>";
					results += "division: " + data.team.division + "<br/>";
					results += "<br/>FYI some players won't have the following data:<br/>"; 
					results += "position: " + data.position + "<br/>";
					results += "height: " + data.height_feet + "' " + data.height_inches + "\"<br/>";
					results += "weight: " + data.weight_pounds + " pounds<br/>";
					results += "<br/>";
				}
			}
			document.getElementById("playerProfile").innerHTML = results;
		});
});



/*

			let results = "";
			results += '<h1>Current Weather Conditions in ' + json.name + ":</h1>";
			results += "<div class='wrapper'>";
			results += "<div class='first'>";
			for (let i=0; i < json.weather.length; i++) {
				results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
			}
			results += '<h2>' + json.main.temp + " &deg;F</h2>"
			results += "<p>"
			for (let i=0; i < json.weather.length; i++) {
				results += json.weather[i].description
				if (i !== json.weather.length - 1)
					results += ", "
			}
			results += "</p>";
			results += "</div>";
			results += "<div class='second'>";
			results += "<p>Exact coordinates of " + json.name + ":<br/>longitude: " + json.coord.lon + "<br/>latitude: " + json.coord.lat + " </p>";
			results += "<p>Visibility: " + json.visibility + "</p>";
			results += "<p>Wind speed: " + json.wind.speed + "</p>";
			results += "</div>";
			results += "</div>";
			document.getElementById("weatherResults").innerHTML = results;
			console.log(json);
		});
	const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=b626b271112f1c0edd751511f227a679";
	fetch(url2)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			let forecast = "";
			forecast += "<h1>Future Weather Forecast:</h1>";
				for (let i=0; i < json.list.length; i++) {
					forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
					forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
					forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
				}
				document.getElementById("forecastResults").innerHTML = forecast;
			console.log(json);
		});
});*/
