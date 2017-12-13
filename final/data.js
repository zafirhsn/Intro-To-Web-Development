//GET USER'S TOP 10 TRACKS
function getTopTracksLong(access_token, template_id) {
			   $.ajax({
			       url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0',
			       headers: {
			           'Authorization': 'Bearer ' + access_token
			       },
			       success: responseFunction
			   });
			}

			function responseFunction(response) {
			   console.log("PRINTING response from top tracks");
			   console.log(response);
			   var top_tracks = "";
			   for (var i = 0; i < 10; i++) {
			       console.log(response.items[i].name);

			   }
			   TopTracksLong = response;
			   console.log("PRINTING saved JSON");
			   console.log(TopTracksLong);
			   $("#top-tracks-long").html(template(response));
			}
 