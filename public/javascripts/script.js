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
    console.log(event.target.className.indexOf('playing'));
    SC.stream('/tracks/' + trackID).then(function(player) {
      stream = player
      stream.play();
    });
  };

  var clickToPlayMerry = function() {
    var tune = event.target
    if (tune.className.indexOf('playing') === 6) {
      var track = tune.getAttribute("name");
      playTrack(track);
    } else {
      stream.pause();
    };
  };

  var clickToPlayChristmas = function() {
    var tune = event.target
    if (tune.className.indexOf('playing') === 11) {
      var track = tune.getAttribute("name");
      playTrack(track);
    } else {
      stream.pause();
    };
  };

  // TRACK PLAYLIST

  $('#m1').click(function() {
    clickToPlayMerry();
  });

  $('#e').click(function() {
    clickToPlayMerry();  
  }); 

  $('#r1').click(function() {
    clickToPlayMerry();
  }); 

  $('#r2').click(function() {
    clickToPlayMerry();
  }); 

  $('#y').click(function() {
    clickToPlayMerry();    
  }); 

  $('#c').click(function() {
    clickToPlayChristmas();
  }); 

  $('#h').click(function() {
    clickToPlayChristmas();
  }); 

  $('#r3').click(function() {
    clickToPlayChristmas();
  }); 

  $('#i').click(function() {
    clickToPlayChristmas();
  }); 

  $('#s1').click(function() {
    clickToPlayChristmas();
  }); 

  $('#t').click(function() {
    clickToPlayChristmas();
  }); 

  $('#m2').click(function() {
    clickToPlayChristmas();
  }); 

  $('#a').click(function() {
    clickToPlayChristmas();
  }); 

  $('#s2').click(function() {
    clickToPlayChristmas();
  });
});