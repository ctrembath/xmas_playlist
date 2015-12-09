$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54'
  })

  var stream;
  
  $('#m1').click(function() {
    SC.stream('/tracks/236619719').then(function(player) {
      stream = player
      stream.play();
      console.log(stream);
    });
  });

  $('#e').click(function() {
    SC.stream('/tracks/158769517').then(function(player) {
      stream = player
      stream.play();
      console.log(stream);
    });
  });

  $('#pause').click(function() {
    if (stream) {
      stream.pause();
    };
  });
});