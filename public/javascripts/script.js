// Initialize Soundcloud and get stream url

var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';

var initializeSoundcloud = function() {
  SC.initialize({
    client_id: soundcloudClientID
  });
};

var getURL = function(soundcloudTrackID) {
  return 'https://api.soundcloud.com/tracks/' + soundcloudTrackID + '/stream?client_id=' + soundcloudClientID;
};

// SoundManager create and play methods

var soundmanagerCreate = function(trackID) {
  var trackURL = getURL(trackID)
  var trackID = 't' + trackID; // soundmanager trackID should start with non-numerical
  soundManager.createSound({
    id: trackID,
    url: trackURL
  });
};

var soundmanagerPlay = function(trackID, nextLetter) {
  var nextTrack = document.getElementById(nextLetter);
  var trackID = 't' + trackID;
  soundManager.pauseAll();
  soundManager.play(trackID, {
    onfinish: function() {
      $(nextTrack).click();
    }
  });
  keyDown(nextTrack);
};

// Track Info

var trackInfo = function(trackName) {
  var infoBanner = document.getElementById('artist-info');
  infoBanner.innerHTML = trackName;
};

// Play and pause tracks in top line letters

var play = function(tune, soundmanagerTrackID, info, nextLetter) {
  
  var classArray = tune.className.split(" ");
  
  if (classArray.includes('playing')) {
    soundmanagerPlay(soundmanagerTrackID, nextLetter);
    trackInfo(info);
  } else {
    var trackID = 't' + soundmanagerTrackID;
    soundManager.pause(trackID);
    trackInfo('');
  };
};

// Key Press method for skipping tracks

var keyDown = function(next) {
  $(document).keydown(function(e) {
    if (e.keyCode == 39) {
      soundManager.pauseAll();
      $(next).click();
      return false;
    };
  });
};

