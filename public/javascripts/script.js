$(document).ready(function() {

  $("#cover").show(0).delay(3200).fadeOut("slow");

  // Letter glows if playing

  $(".words").click(function(){
    $('.words').not(this).removeClass('playing');
    $(this).toggleClass('playing'); 
  });

  // Play instructions

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

var soundmanagerCreate = function(trackID) {
  trackURL = getURL(trackID)
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

var resetMarquee = function(marquee) {
  marquee.stop();
};

// Play and pause tracks in top line letters

var play = function(tune, soundmanagerTrackID, info, nextLetter) {
  
  var classArray = tune.className.split(" ");
  
  if (classArray.includes('playing')) {
    soundmanagerPlay(soundmanagerTrackID, nextLetter);
    trackInfo(info);
  } else {
    soundManager.pause(soundmanagerTrackID);
    trackInfo('');
  };
};

