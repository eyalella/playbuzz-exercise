var OAUTH2_CLIENT_ID = '385472354201-7s2rimu8bh1pt37vkvetftnkln4ke1ae.apps.googleusercontent.com';
var OAUTH2_SCOPES = ['https://www.googleapis.com/auth/youtube'];

// Upon loading, the Google APIs JS client automatically invokes this callback.
console.log('a');
googleApiClientReady = function() {
  console.log('b');
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

function checkAuth() {
  console.log('b');
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

function handleAuthResult(authResult) {
  console.log('c');
  if (authResult && !authResult.error) {
    $('.pre-auth').hide();
    $('.post-auth').show();
    console.log('d');
    loadAPIClientInterfaces();
  } else {
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}
