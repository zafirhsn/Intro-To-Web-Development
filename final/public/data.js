
//TOP ARTISTS OF ALL TIME
function getTopArtistsLong(access_token, template, newTemplate ) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists");
			console.log(response);
			$(newTemplate).html(template(response));
			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
}


//TOP TRACKS OF ALL TIME
function getTopTracksLong(access_token, template, newTemplate) {
   $.ajax({
	   url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0',
	   headers: {
		   'Authorization': 'Bearer ' + access_token
	   },
	   async: false,
	   success: function(response) {
			console.log("PRINTING response from top tracks long");
			console.log(response);
			$(newTemplate).html(template(response));
		    sessionStorage.setItem("topTracksLong", JSON.stringify(response));
	   }
   });
}

//TOP TRACKS FROM THE LAST 6 MONTHS
function getTopTracksMed(access_token, template, newTemplate) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
		  	console.log("PRINTING response from top tracks med");
		  	console.log(response);
			$(newTemplate).html(template(response));
		    sessionStorage.setItem("topTracksMed", JSON.stringify(response));
		}
	});
}

//TOP TRACKS FROM THE LAST 4 WEEKS
function getTopTracksShort(access_token, template, newTemplate) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false, 
		success: function(response) {
		 	console.log("PRINTING response from top tracks");
		  	console.log(response);
			$(newTemplate).html(template(response));
		    sessionStorage.setItem("topTracksShort", JSON.stringify(response));
		}
	});
}


