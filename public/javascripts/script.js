$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54',
    redirect_uri: 'http://localhost:9292/auth/soundcloud/callback'
  });

  var stream;

  $(".words").click(function(){
    $('.words').not(this).removeClass('playing');
    $(this).toggleClass('playing'); 
  });

  // PLAY AND PAUSE 

  var playTrack = function(trackID) {
    SC.stream('/tracks/' + trackID).then(function(player) {
      stream = player
      stream.play();
    });
  };

  var clickToPlay = function() {
    var tune = event.target
    if (tune.className.indexOf('playing') === 6) {
      track = tune.getAttribute("name");
      playTrack(track);
    } else {
      stream.pause();
    };
  };

  // TRACK PLAYLIST

  $('#m1').click(function() {
    clickToPlay();
  });

  $('#e').click(function() {
    clickToPlay();  
  }); 

  $('#r1').click(function() {
    clickToPlay();
  }); 

  $('#r2').click(function() {
    clickToPlay();
  }); 

  $('#y').click(function() {
    clickToPlay();    
  }); 

  $('#c').click(function() {
    playTrack('235758881');
  }); 

  $('#h').click(function() {
    playTrack('225425321');
  }); 

  $('#r3').click(function() {
    playTrack('235746920');
  }); 

  $('#i').click(function() {
    playTrack('235593121');
  }); 

  $('#s1').click(function() {
    playTrack('233317840');
  }); 

  $('#t').click(function() {
    playTrack('233605980');
  }); 

  $('#m2').click(function() {
    playTrack('214497089');
  }); 

  $('#a').click(function() {
    playTrack('234865253');
  }); 

  $('#s2').click(function() {
    playTrack('234322380');
  });
});