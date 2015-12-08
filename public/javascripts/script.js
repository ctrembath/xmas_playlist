$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54'
  })
  
  var stream;

  $('#m1').click(function() {
    if (!stream) {
      playTrack('236619719');
    } else {
      pauseTrack(stream);
    };
  });

  $('#e').click(function() {
    if (!stream) {
      playTrack('158769517');
    } else {
      pauseTrack(stream);
    };
  });

  var playTrack = function(trackID) {
    SC.stream('/tracks/' + trackID).then(function(player) {
      stream = player;
      stream.play();
    });
  };

  var pauseTrack = function(stream) {
    stream.pause();
    stream = "";
  };

});