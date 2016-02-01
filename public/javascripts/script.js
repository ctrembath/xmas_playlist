$(document).ready(function() {

  // MAKES LETTER GLOW IF TRACK IS PLAYING

  $(".words").click(function(){
    $('.words').not(this).removeClass('playing');
    $(this).toggleClass('playing'); 
  });

  // PLAY INSTRUCTIONS

  $('.infoButton').click(function(){
    $('#cover').show();
  });

  $('#cover').click(function(){
     $('#cover').hide();
  });
});

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
  });
};

// Track Info

var trackInfo = function(trackName) {
  var infoBanner = document.getElementById('artist-info');
  infoBanner.innerHTML = trackName;
};

// Play and pause tracks in top line letters

var playTopline = function(tune, soundmanagerTrackID, info, nextLetter) {
  
  var classArray = tune.className.split(" ");
  
  if (classArray.includes('playing')) {
    soundmanagerPlay(soundmanagerTrackID, nextLetter);
    trackInfo(info);
  } else {
    soundManager.pause(soundmanagerTrackID);
    trackInfo('');
  };
};

// Play and pause tracks in second line letters

var playSecondline = function(tune, soundmanagerTrackID, TrackInfo, nextLetter) {
  if (tune.className.indexOf('playing') === 19) {
    soundmanagerPlay(soundmanagerTrackID, nextLetter);
    trackInfo(TrackInfo);
  } else {
    soundManager.pause(soundmanagerTrackID);
    trackInfo('');
  };
};
