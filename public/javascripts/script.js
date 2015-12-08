$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54'
  })
  
  var track1 = SC.stream('/tracks/236619719');

  $('#m1').click(function() {
    
    if (track1.isPaused(player)) {
      console.log('I know its paused');
      track1.then(function(player) {
        player.play();
      });

    } else {

      console.log('HIHIHIHIHI');
      track1.then(function(player) {
        player.pause();
      });

    };

  });

  $('#e').click(function() {
    track1.then(function(player) {
      player.pause();
    });
  });
});