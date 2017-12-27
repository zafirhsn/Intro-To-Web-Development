
//TOP ARTISTS OF ALL TIME
function getTopArtistsLong(access_token, template, newTemplate ) {
	var data  = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists long term");
			console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
	return data;
}

//TOP ARTISTS FROM THE LAST 6 MONTHS
function getTopArtistsMed(access_token, template, newTemplate ) {
	var data  = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists med term");
			console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
	return data;
}

function getTopArtistsShort(access_token, template, newTemplate ) {
	var data  = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false,
		success: function(response) {
			console.log("PRINTING response top artists short term");
			console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//			sessionStorage.setItem("topArtistsLong", JSON.stringify(response));
		}
	});
	return data;
}





//TOP TRACKS OF ALL TIME
function getTopTracksLong(access_token, template, newTemplate) {
	var data = {};
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
		    data = response;
//		    sessionStorage.setItem("topTracksLong", JSON.stringify(response));
	   }
   });
	return data; 
}

//TOP TRACKS FROM THE LAST 6 MONTHS
function getTopTracksMed(access_token, template, newTemplate) {
	var data = {};
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
			data = response;
//		    sessionStorage.setItem("topTracksMed", JSON.stringify(response));
		}
	});
	return data;
}

//TOP TRACKS FROM THE LAST 4 WEEKS
function getTopTracksShort(access_token, template, newTemplate) {
	var data = {};
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		async: false, 
		success: function(response) {
		 	console.log("PRINTING response from top tracks short");
		  	console.log(response);
			$(newTemplate).html(template(response));
			data = response;
//		    sessionStorage.setItem("topTracksShort", JSON.stringify(response));
		}
	});
	return data;
}


//GET USERS LAST 50 SAVED SONGS
function getSavedSongs(access_token) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		success: function(response) {
		  console.log("PRINTING response from 50 saved songs");
		  console.log(response);
		  for(var i = 0; i < 10; i++) {
			  console.log(response.items[i].name);	  
		  }
		}
	});
}


// function getTopArtistsLong(access_token) {
// 	var avgPop = 0;
// 	$.ajax({
// 		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
// 		headers: {
// 		  'Authorization': 'Bearer ' + access_token
// 		},
// 		success: function(response) {
// 		  console.log("PRINTING response top artists");
// 		  console.log(response);
// 		  var top_tracks = "";
// 		  for(var i = 0; i < 10; i++) {
// 			  console.log(response.items[i].popularity);
// 			  avgPop += response.items[i].popularity;
// 		  }
// 		  avgPop = avgPop / response.limit;
// 		  var popResponse = {avgpop: avgPop};
// 		  $("#top-artists-long").html(artistTemplate(response));
// 		  $("#average-pop").html(popTemplate(popResponse));
// 		}
// 	});
// }

			




// var access_token = sessionStorage.getItem("access_token");
// var playlist = "";
// $("#playlist").on('submit', function() {
// 	playlist = $("#playlist".val());
// 				  });
// console.log(playlist);


// var userPlaylists = {};
// function getPlaylists(access_token) {
// 	$.ajax({
// 		url: 'https://api.spotify.com/v1/me/playlists?limit=50&offset=0',
// 		headers: {
// 		  'Authorization': 'Bearer ' + access_token
// 		},
// 		success: responseFunction 
// 	});
// }		

// function responseFunction(response) {
// 		console.log("PRINTING response from Current User's Playlists")
// 		console.log(response);
// 		for(var i = 0; i < response.items.length; i++) {
// 			console.log(response.items[i].name);
// 			userPlaylists[response.items[i].name] = response.items[i].id;
// 		}
// 		console.log(userPlaylists);
// }


// getPlaylists(access_token);


