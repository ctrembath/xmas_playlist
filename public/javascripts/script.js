$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54',
    redirect_uri: 'http://localhost:9292/auth/soundcloud/callback'
  });

  // TRACK PLAYLIST

  var stream;
  
  $('#m1').click(function() {
    playTrack('229055409');
  });

  $('#e').click(function() {
    playTrack('225425321');
  }); 

  $('#r1').click(function() {
    playTrack('226404391');
  });

  $('#r2').click(function() {
    playTrack('235758881');
  });

  $('#y').click(function() {
    playTrack('126479703'); // problem
  });

  $('#c').click(function() {
    playTrack('230917974');
  });

  $('#h').click(function() {
    playTrack('234865253');
  });

  $('#r3').click(function() {
    playTrack('233605980');
  });

  $('#i').click(function() {
    playTrack('210438530');
  });

  // PLAY AND PAUSE CONTROLS

  $('#pause').click(function() {
    if (stream) {
      stream.pause();
      showPlayButton();
    };
  });

  $('#play').click(function() {
    if (stream) {
      stream.play();
      showPauseButton();
    }; 
  });

  var showPlayButton = function() {
    $('#pause').css('display', 'none');
    $('#play').css('display', 'block');
  };

  var showPauseButton = function() {
    $('#play').css('display', 'none');
    $('#pause').css('display', 'block');
  };

  var playTrack = function(trackID) {
    SC.stream('/tracks/' + trackID).then(function(player) {
      stream = player
      stream.play();
    });
  };
});