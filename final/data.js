//GET USER'S TOP 10 TRACKS
function getTopTracks(access_token) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		success: function(response) {
		  console.log("PRINTING response from top tracks");
		  console.log(response);
		  for(var i = 0; i < 10; i++) {
			  console.log(response.items[i].name);
		  }  
		}
	});
}


//GET USER'S TOP 10 ARTISTS
function getTopArtists(access_token) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0',
		headers: {
		  'Authorization': 'Bearer ' + access_token
		},
		success: function(response) {
		  console.log("PRINTING response from top tracks");
		  console.log(response);
		  console.log(response.items[0].name);
		}
	});
}
 