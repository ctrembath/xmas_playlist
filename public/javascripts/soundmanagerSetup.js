$(document).ready(function() {

  soundManager.setup({
    url: './swf',
    flashVersion: 9,
    onready: function() {
      
      SC.initialize({
        client_id: 'aa7a4eb3979426038d8aa53a458baa54'
      });

      var streamURL = 'https://api.soundcloud.com/tracks/226404391/stream?client_id=aa7a4eb3979426038d8aa53a458baa54';

      soundManager.createSound({
        id: 'track1',
        url: streamURL
      });

      $('#m1').click(function() {
        soundManager.play('track1');
      });
    }
  });
});