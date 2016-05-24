// Initialize Soundcloud and get stream url

var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';
var allDetails = [];

var initializeSoundcloud = function() {
  SC.initialize({
    client_id: soundcloudClientID
  });
};

var getURL = function(soundcloudTrackID) {
  var url = 'https://api.soundcloud.com/tracks/' + soundcloudTrackID + '/stream?client_id=' + soundcloudClientID;
  return url;
};

// Soundcloud tracks in playlist
// NOTE - if the track doesn't play - it is streamable false and needs to be caught

var listTracks = function(playlistID) {
  initializeSoundcloud();
  SC.get('/playlists/' + playlistID).then(function(playlist) {
    playlist.tracks.forEach(function(track) {
      allDetails.push(track.user.username + ' : ' + track.title + ' : ' + 'Id = ' + track.id);
    });
    document.getElementById('masterList').appendChild(makeList(allDetails));
  });
};

var makeList = function(array) {
  var list = document.createElement('ul');
  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(array[i]));
    list.appendChild(item);
  };
  return list
};

// Get wednesday track IDs

var letters = document.getElementsByClassName('wednesday-words');
var wednesdayIDs = [];

var wednesday = function(playlistID) {
  initializeSoundcloud();
  SC.get('/playlists/' + playlistID).then(function(playlist) {
    playlist.tracks.forEach(function(track) {
      wednesdayIDs.push(track.id);
    });
  });
};

var updateWednesday = function() {
  console.log(letters);
  for (var i = 0; i < letters.length; i++) {
    // console.log(letters[i]);
  };
}; 

// Assign the HTML name attributes to be track id's - NOT BEING USED

var updateTrackIds = function() {

  for (var i = 0; i < letters.length; i++) {
    var name = letters[i].getAttribute('name');
    letters[i].setAttribute("name", name);
  };
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


