$(document).ready(function() {

  SC.initialize({
    client_id: 'aa7a4eb3979426038d8aa53a458baa54',
    redirect_uri: 'http://localhost:9292/auth/soundcloud/callback'
  });

  var stream;

  // MAKES LETTER GLOW IF TRACK IS PLAYING

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

  var clickToPlayMerry = function(trackName) {
    var tune = event.target
    var infoBanner = document.getElementById('artist-info');
    if (tune.className.indexOf('playing') === 6) {
      var track = tune.getAttribute("name");
      playTrack(track);
      infoBanner.innerHTML = trackName;
    } else {
      stream.pause();
      infoBanner.innerHTML = "";
    };
  };

  var clickToPlayChristmas = function(trackName) {
    var tune = event.target
    var infoBanner = document.getElementById('artist-info');
    if (tune.className.indexOf('playing') === 11) {
      var track = tune.getAttribute("name");
      playTrack(track);
      infoBanner.innerHTML = trackName;
    } else {
      stream.pause();
      infoBanner.innerHTML = "";
    };
  };

  // TRACK PLAYLIST

  $('#m1').click(function() {
    clickToPlayMerry('Couros - Turning');
  });

  $('#e').click(function() {
    clickToPlayMerry('DREWXHILL - Struggle');
  });

  $('#r1').click(function() {
    clickToPlayMerry('Camel Power Club - Ourson');
  }); 

  $('#r2').click(function() {
    clickToPlayMerry('Club Kuru - Layla');
  }); 

  $('#y').click(function() {
    clickToPlayMerry('Luke Mahony Hammond - DRIFT');    
  }); 

  $('#c').click(function() {
    clickToPlayChristmas('Ray BLK - 50/50');
  }); 

  $('#h').click(function() {
    clickToPlayChristmas('Menage a Trois - Ocean Boy');
  }); 

  $('#r3').click(function() {
    clickToPlayChristmas('Lovebirds ft. Stee Downes - Want You In My Soul');
  }); 

  $('#i').click(function() {
    clickToPlayChristmas('Majid Jordan - Something About You');
  }); 

  $('#s1').click(function() {
    clickToPlayChristmas('LOYAL - Blue and the Green');
  }); 

  $('#t').click(function() {
    clickToPlayChristmas('Joe Hertz - Ashes Ft LIV');
  }); 

  $('#m2').click(function() {
    clickToPlayChristmas('MagnetronMusic - Love Invaders');
  }); 

  $('#a').click(function() {
    clickToPlayChristmas('Chrome Sparks - Moonraker');
  }); 

  $('#s2').click(function() {
    clickToPlayChristmas('Marcus Marr & Chet Faker - Birthday Card');
  });
});