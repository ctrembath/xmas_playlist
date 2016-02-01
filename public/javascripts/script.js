$(document).ready(function() {

  var font1 = "https://fonts.googleapis.com/css?family=Creepster|Roboto:400,300|Monofett|Amatic+SC|Geo|Averia+Serif+Libre:700italic' rel='stylesheet"
  var font2 = "https://fonts.googleapis.com/css?family=Averia+Serif+Libre:700italic"
  
  loadStyleSheets('/stylesheets/foundation.min.css', '/stylesheets/script.css');
  loadFonts(font1, font2);

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

// Load css & fonts

function loadStyleSheets(src1, src2) {
  if (document.createStyleSheet){
    document.createStyleSheet(src);
  } else {
    $("head").append($("<link rel='stylesheet' href='" + src1 + "' type='text/css' media='screen' />"));
    $("head").append($("<link rel='stylesheet' href='" + src2 + "' type='text/css' media='screen' />"));
  }
};

function loadFonts(font1, font2) {
  if (document.createStyleSheet){
    document.createStyleSheet(src);
  } else {
    $("head").append($("<link rel='stylesheet' href='" + font1 + "' type='text/css' media='screen' />"));
    $("head").append($("<link rel='stylesheet' href='" + font2 + "' type='text/css' media='screen' />"));
  }
};

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

