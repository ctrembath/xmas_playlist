$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54'
  })
  

  var stream;

  $('#m1').click(function() {
    if (!stream) {
      SC.stream('/tracks/236619719').then(function(player) {
        stream = player;
        stream.play();
      });
    } else {
      stream.pause();
      stream = "";
    };
  });


  $('#e').click(function() {
    if (!stream) {
      SC.stream('/tracks/158769517').then(function(player) {
        stream = player;
        stream.play();
      });
    } else {
      stream.pause();
      stream = "";
    };
  });
});