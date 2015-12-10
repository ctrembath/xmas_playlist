$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54'
  })

  var stream;
  
  $('#m1').click(function() {
    playTrack('229055409');
  });

  $('#e').click(function() {
    playTrack('166026429');
  }); 

  $('#r1').click(function() {
    playTrack('226404391');
  }); 

  $('#pause').click(function() {
    if (stream) {
      stream.pause();
    };
  });

  var playTrack = function(trackID) {
    SC.stream('/tracks/' + trackID).then(function(player) {
      stream = player
      stream.play();
    });
  };
});