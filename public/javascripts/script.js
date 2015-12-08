$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54'
  })
  
  var stream;

  $('#m1').click(function() {
    if (!stream) {
      playTrack('236619719');
      console.log('PLAYING THE TRACK ON M');
    } else {
      pauseTrack(stream);
      console.log('TRYING TO PAUSE THE TRACK ON M');
    };
  });

  $('#e').click(function() {
    if (!stream) {
      playTrack('158769517');
      console.log('PLAYING THE TRACK ON E');
    } else {
      pauseTrack(stream);
      console.log('TRYING TO PAUSE THE TRACK ON E');
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
    // delete stream;
  };

});