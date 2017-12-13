		var access_token = sessionStorage.getItem('access_token');
			var playlistTemplate = $("#todays-playlists").html();
			
			var template = Handlebars.compile(playlistTemplate);
			
			var date = new Date();
			ISOdate = date.toISOString();
			function getFeaturedPlaylists(access_token) {
				$.ajax({
					url: 'https://api.spotify.com/v1/browse/featured-playlists?country=US&locale=eng_US&timestamp=' + ISOdate + '&limit=10&offset=0',
					headers: {
					  'Authorization': 'Bearer ' + access_token
					},
					success: function(response) {
					  console.log("PRINTING response from today's featured playlists");
					  console.log(response);
					  var playlists = "";
					  for(var i = 0; i < 10; i++) {
						  console.log(response.playlists.items[i].name);		  
					  }
					  $("#featured-playlists").html(template(response));
					}
				});
			}


			
			
			
			getFeaturedPlaylists(access_token);