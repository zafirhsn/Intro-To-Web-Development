

if (access_token && (state == null || state !== storedState)) {
          alert('There was an error during the authentication');
        } 
        else {
          localStorage.removeItem(stateKey);
          if (access_token) {
			  
			  
			  
			  

function getTopTrack(access_token) {
	$.ajax({
		url: 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5',
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
			  
            
          } else {
              $('#login').show();
              $('#loggedin').hide();
          }
        }
      });