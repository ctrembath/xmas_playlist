$(document).ready(function() {

  var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';

  soundManager.setup({
    url: './swf',
    flashVersion: 9,

    onready: function() {
      
      initializeSoundcloud();

      var streamURL = getURL('233605980');

      soundmanagerCreate('track1', streamURL);

      $('#m1').click(function() {
        soundManager.play('track1');
      });
    }
  });

  var initializeSoundcloud = function() {
    SC.initialize({
      client_id: 'aa7a4eb3979426038d8aa53a458baa54'
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
});