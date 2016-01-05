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

  var playTrack = function(trackID, x) {
    var next = x;
    SC.stream('/tracks/' + trackID, {useHTML4Audio : true, preferFlash : false}).then(function(player) {
      stream = player
      stream.play();
      endTrack(stream, x);
    });
  };

  var endTrack = function(stream, letterID) {
    console.log(letterID);
    stream.on("finish", function() {
      var nextTrack = document.getElementById(letterID);
      nextTrack.click();
    });
  };

  var clickToPlayMerry = function(trackName, letterID) {
    var tune = event.target;
    var infoBanner = document.getElementById('artist-info');
    var nextLetter = letterID;
    if (tune.className.indexOf('playing') === 6) {
      var track = tune.getAttribute("name");
      playTrack(track, nextLetter);
      infoBanner.innerHTML = trackName;
    } else {
      stream.pause();
      infoBanner.innerHTML = "";
    };
  };

  var clickToPlayChristmas = function(trackName) {
    var tune = event.target;
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

  var clickToPlayXmas = function(trackName) {
    var tune = event.target;
    var infoBanner = document.getElementById('artist-info');
    if (tune.className.indexOf('playing') === 18) {
      var track = tune.getAttribute("name");
      playTrack(track);
      infoBanner.innerHTML = trackName;
    } else {
      stream.pause();
      infoBanner.innerHTML = "";
    };
  };

  // TRACK PLAYLIST

  // $('#m1').click(function() {
  //   clickToPlayMerry('Couros - Turning', 'e');
  // });

  $('#e').click(function() {
    clickToPlayMerry('DREWXHILL - Struggle', 'r1');
  });

  $('#r1').click(function() {
    clickToPlayMerry('Camel Power Club - Ourson', 'r2');
  }); 

  $('#r2').click(function() {
    clickToPlayMerry('Club Kuru - Layla', 'y');
  }); 

  $('#y').click(function() {
    clickToPlayMerry('Luke Mahony Hammond - DRIFT', 'c');    
  }); 

  $('#c').click(function() {
    clickToPlayChristmas('Ray BLK - 50/50', 'h');
  }); 

  $('#h').click(function() {
    clickToPlayChristmas('Ménage à Trois - Ocean Boy', 'r3');
  }); 

  $('#r3').click(function() {
    clickToPlayChristmas('Lovebirds ft. Stee Downes - Want You In My Soul', 'i');
  }); 

  $('#i').click(function() {
    clickToPlayChristmas('Majid Jordan - Something About You', 's1');
  }); 

  $('#s1').click(function() {
    clickToPlayChristmas('LOYAL - Blue and the Green', 't');
  }); 

  $('#t').click(function() {
    clickToPlayChristmas('Joe Hertz - Ashes Ft LIV', 'm2');
  }); 

  $('#m2').click(function() {
    clickToPlayChristmas('MagnetronMusic - Love Invaders', 'a');
  }); 

  $('#a').click(function() {
    clickToPlayChristmas('Chrome Sparks - Moonraker', 's2');
  }); 

  $('#s2').click(function() {
    clickToPlayChristmas('Marcus Marr & Chet Faker - Birthday Card', 'm1');
  });

  $('#x').click(function() {
    clickToPlayXmas('Joe Hertz - Ashes Ft LIV', 'm3');
  });

  $('#m3').click(function() {
    clickToPlayXmas('Ray BLK - 50/50', 'a2');
  });  

  $('#a2').click(function() {
    clickToPlayXmas('Menage a Trois - Ocean Boy', 's3');
  });

  $('#s3').click(function() {
    clickToPlayXmas('Marcus Marr & Chet Faker - Birthday Card', 'm1');
  });

  // PLAY INSTRUCTIONS

  $('.infoButton').click(function(){
    $('#cover').show();
  });

  $('#cover').click(function(){
     $('#cover').hide();
  });
   

});