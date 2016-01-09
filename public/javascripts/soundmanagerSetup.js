$(document).ready(function() {

  var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {
      
      initializeSoundcloud();

      $('#m1').click(function() {
        var streamURL = getURL('233605980');
        var letter = event.target;
        soundmanagerCreate('track1', streamURL);
        playMerry(letter, 'track1', 'Couros - Turning')
      });

      $('#e').click(function() {
        var streamURL = getURL('225425321');
        var tune = event.target;
        soundmanagerCreate('track2', streamURL);
        playMerry(tune, 'track2', 'DREWXHILL - Struggle')
      });

      $('#r1').click(function() {
        var streamURL = getURL('226404391');
        var tune = event.target;
        soundmanagerCreate('track3', streamURL);
        playMerry(tune, 'track3', 'Camel Power Club - Ourson');
      });

      $('#r2').click(function() {
        var streamURL = getURL('229055409');
        var tune = event.target;
        soundmanagerCreate('track4', streamURL);
        playMerry(tune, 'track4', 'Club Kuru - Layla');
      });

      $('#y').click(function() {
        var streamURL = getURL('230917974');
        var tune = event.target;
        soundmanagerCreate('track5', streamURL);
        playMerry(tune, 'track5', 'Luke Mahony Hammond - DRIFT');
      });

    },

  });

  var initializeSoundcloud = function() {
    SC.initialize({
      client_id: soundcloudClientID
    });
  };

  var getURL = function(soundcloudTrackID) {
    return 'https://api.soundcloud.com/tracks/' + soundcloudTrackID + '/stream?client_id=' + soundcloudClientID;
  };

  var soundmanagerCreate = function(trackID, trackURL) {
    soundManager.createSound({
      id: trackID,
      url: trackURL
    });
  };

  var soundmanagerPlay = function(trackID) {
    soundManager.pauseAll();
    soundManager.play(trackID, {
      onfinish: function() {
        console.log('&& TRACK FINISHED &&');
      }
    });
  };

  var displayTrackInfo = function(trackName) {
    var infoBanner = document.getElementById('artist-info');
    infoBanner.innerHTML = trackName
  };

  var playMerry = function(tune, soundmanagerTrackID, TrackInfo) {
    if (tune.className.indexOf('playing') === 6) {
      soundmanagerPlay(soundmanagerTrackID);
      displayTrackInfo(TrackInfo);
    } else {
      soundManager.pause(soundmanagerTrackID);
      displayTrackInfo('');
    };
  };

});







