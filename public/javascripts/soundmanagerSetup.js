$(document).ready(function() {

  var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {
      
      initializeSoundcloud();

      // MERRY

      $('#m1').click(function() {
        var streamURL = getURL('233605980');
        var letter = event.target;
        soundmanagerCreate('track1', streamURL);
        playMerry(letter, 'track1', 'Couros - Turning', 'e')
      });

      $('#e').click(function() {
        var streamURL = getURL('225425321');
        var tune = event.target;
        soundmanagerCreate('track2', streamURL);
        playMerry(tune, 'track2', 'DREWXHILL - Struggle', 'r1')
      });

      $('#r1').click(function() {
        var streamURL = getURL('226404391');
        var tune = event.target;
        soundmanagerCreate('track3', streamURL);
        playMerry(tune, 'track3', 'Camel Power Club - Ourson', 'r2');
      });

      $('#r2').click(function() {
        var streamURL = getURL('229055409');
        var tune = event.target;
        soundmanagerCreate('track4', streamURL);
        playMerry(tune, 'track4', 'Club Kuru - Layla', 'y');
      });

      $('#y').click(function() {
        var streamURL = getURL('230917974');
        var tune = event.target;
        soundmanagerCreate('track5', streamURL);
        playMerry(tune, 'track5', 'Luke Mahony Hammond - DRIFT');
      });

      // XMAS

      $('#x').click(function() {
        var streamURL = getURL('208738257');
        var tune = event.target;
        soundmanagerCreate('track15', streamURL);
        playXMAS(tune, 'track15', 'Joe Hertz - Ashes Ft LIV', 'm3');
      });

      $('#m3').click(function() {
        var streamURL = getURL('235758881');
        var tune = event.target;
        soundmanagerCreate('track16', streamURL);
        playXMAS(tune, 'track16', 'Ray BLK - 50/50', 'a2');
      });

      $('#a2').click(function() {
        var streamURL = getURL('187929420');
        var tune = event.target;
        soundmanagerCreate('track17', streamURL);
        playXMAS(tune, 'track17', 'Menage a Trois - Ocean Boy', 's3');
      });

      $('#s3').click(function() {
        var streamURL = getURL('234865253');
        var tune = event.target;
        soundmanagerCreate('track18', streamURL);
        playXMAS(tune, 'track18', 'Marcus Marr & Chet Faker - Birthday Card', 'm1');
      });

      // CHRISTMAS

      $('#c').click(function() {
        var streamURL = getURL('235758881');
        var tune = event.target;
        soundmanagerCreate('track6', streamURL);
        playChristmas(tune, 'track6', 'Ray BLK - 50/50', 'h');
      });

      $('#h').click(function() {
        var streamURL = getURL('187929420');
        var tune = event.target;
        soundmanagerCreate('track7', streamURL);
        playChristmas(tune, 'track7', 'Ménage à Trois - Ocean Boy', 'r3');
      });

      $('#r3').click(function() {
        var streamURL = getURL('24895618');
        var tune = event.target;
        soundmanagerCreate('track8', streamURL);
        playChristmas(tune, 'track8', 'Lovebirds ft. Stee Downes - Want You In My Soul', 'i');
      });

      $('#i').click(function() {
        var streamURL = getURL('235593121');
        var tune = event.target;
        soundmanagerCreate('track9', streamURL);
        playChristmas(tune, 'track9', 'Majid Jordan - Something About You', 's1');
      });

      $('#s1').click(function() {
        var streamURL = getURL('235427283');
        var tune = event.target;
        soundmanagerCreate('track10', streamURL);
        playChristmas(tune, 'track10', 'LOYAL - Blue and the Green', 't');
      });

      $('#t').click(function() {
        var streamURL = getURL('208738257');
        var tune = event.target;
        soundmanagerCreate('track11', streamURL);
        playChristmas(tune, 'track11', 'Joe Hertz - Ashes Ft LIV', 'm2');
      });

      $('#m2').click(function() {
        var streamURL = getURL('214497089');
        var tune = event.target;
        soundmanagerCreate('track12', streamURL);
        playChristmas(tune, 'track12', 'MagnetronMusic - Love Invaders', 'a');
      });

      $('#a').click(function() {
        var streamURL = getURL('228045522');
        var tune = event.target;
        soundmanagerCreate('track13', streamURL);
        playChristmas(tune, 'track13', 'Chrome Sparks - Moonraker', 's2');
      });

      $('#s2').click(function() {
        var streamURL = getURL('234865253');
        var tune = event.target;
        soundmanagerCreate('track14', streamURL);
        playChristmas(tune, 'track14', 'Marcus Marr & Chet Faker - Birthday Card', 'm1');
      });
    },

  });

  // Initialize Soundcloud and get stream url

  var initializeSoundcloud = function() {
    SC.initialize({
      client_id: soundcloudClientID
    });
  };

  var getURL = function(soundcloudTrackID) {
    return 'https://api.soundcloud.com/tracks/' + soundcloudTrackID + '/stream?client_id=' + soundcloudClientID;
  };

  // SoundManager create and play methods

  var soundmanagerCreate = function(trackID, trackURL) {
    soundManager.createSound({
      id: trackID,
      url: trackURL
    });
  };

  var soundmanagerPlay = function(trackID, nextLetter) {
    var nextTrack = document.getElementById(nextLetter);
    soundManager.pauseAll();
    soundManager.play(trackID, {
      onfinish: function() {
        console.log('&& TRACK FINISHED &&');
        nextTrack.click();
      }
    });
  };

  // Track Info

  var trackInfo = function(trackName) {
    var infoBanner = document.getElementById('artist-info');
    infoBanner.innerHTML = trackName;
  };

  // Play and pause tracks in MERRY

  var playMerry = function(tune, soundmanagerTrackID, TrackInfo, nextLetter) {
    if (tune.className.indexOf('playing') === 6) {
      soundmanagerPlay(soundmanagerTrackID, nextLetter);
      trackInfo(TrackInfo);
    } else {
      soundManager.pause(soundmanagerTrackID);
      trackInfo('');
    };
  };

  // Play and pause tracks in Christmas

  var playChristmas = function(tune, soundmanagerTrackID, TrackInfo, nextLetter) {
    if (tune.className.indexOf('playing') === 11) {
      soundmanagerPlay(soundmanagerTrackID, nextLetter);
      trackInfo(TrackInfo);
    } else {
      soundManager.pause(soundmanagerTrackID);
      trackInfo('');
    };
  };

  // Play and pause tracks in XMAS

  var playXMAS = function(tune, soundmanagerTrackID, TrackInfo) {
    if (tune.className.indexOf('playing') === 18) {
      soundmanagerPlay(soundmanagerTrackID);
      trackInfo(TrackInfo);
    } else {
      soundManager.pause(soundmanagerTrackID);
      trackInfo('');
    };
  };

});







