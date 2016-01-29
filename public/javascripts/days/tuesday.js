$(document).ready(function() {

  var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {

      initializeSoundcloud();

      // TOPLINE - MONDAY

      $('#t-tues').click(function() {
        var trackID = '243051362'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Tourist - To Have You Back', 'u-tues');
      });

      $('#u-tues').click(function() {
        var trackID = '118894880'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Odesza - My Friends Never Die Little', 'e-tues');
      });

      $('#e-tues').click(function() {
        var trackID = '1688282'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Little People - Start Shootin\'', 's-tues');
      });

      $('#s-tues').click(function() {
        var trackID = '73799584'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Nuages - Dreams', 'd-tues');
      });

      $('#d-tues').click(function() {
        var trackID = '1116385682'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Darkside - Paper Trails (RA Sessions)', 'a-tues');
      });

      $('#a-tues').click(function() {
        var trackID = '70430214'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Nujabes - Reflection Eternal', 'y-tues');
      });

      $('#y-tues').click(function() {
        var trackID = '123022564'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Ben Khan - Savage', 'v-tues');
      });
    }
  })

  // Initialize Soundcloud and get stream url

  var initializeSoundcloud = function() {
    SC.initialize({
      client_id: soundcloudClientID
    });
  };

  var getURL = function(soundcloudTrackID) {
    return 'https://api.soundcloud.com/tracks/' + soundcloudTrackID + '/stream?client_id=' + soundcloudClientID;
  };

  // SoundManager create and play method

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
        nextTrack.click();
      }
    })
  };

  // Track Info

  var trackInfo = function(trackName) {
    var infoBanner = document.getElementById('artist-info');
    infoBanner.innerHTML = trackName;
  };

  var playTopLine = function(tune, soundmanagerID, info, nextLetter) {
    if (tune.className.indexOf('playing') === 32 ) {
      soundmanagerPlay(soundmanagerID, nextLetter);
      trackInfo(info)
    } else {
      soundManager.pause(soundmanagerID);
      trackInfo('');
    };
  };
});