
//TOP TRACKS OF ALL TIME
function getTopArtistsLong(access_token, template, newTemplate ) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		success: function(response) {
			topArtistsLongResponse(response, template, newTemplate);
			console.log("Printing session storage inside ajax()");
			console.log(sessionStorage.getItem("topArtistsLong"));
		}
	});
}

function topArtistsLongResponse(response, template, newTemplate) {
	console.log("PRINTING response top artists");
	console.log(response);
	$(newTemplate).html(template(response));
	sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
//	console.log("Printing session storage inside callback");
//	console.log(sessionStorage.getItem("topArtistsLong"));
}
