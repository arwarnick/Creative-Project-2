document.getElementById("nameSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	let firstName = document.getElementById("firstNameInput").value;
	let lastName = document.getElementById("lastNameInput").value;
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
					results += "<br/>FYI some players don't have the following data:<br/>"; 
					results += "position: " + data.position + "<br/>";
					results += "height: " + data.height_feet + "' " + data.height_inches + "\"<br/>";
					results += "weight: " + data.weight_pounds + " pounds<br/>";
					results += "<br/>";
				}
			}
			if (results === "") {
				results += "Please insert valid first and last names.<br/>";
			}
			document.getElementById("playerProfile").innerHTML = results;
		});
});
