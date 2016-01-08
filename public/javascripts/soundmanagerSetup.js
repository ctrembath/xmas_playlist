$(document).ready(function() {

  soundManager.setup({
    url: './swf',
    flashVersion: 9,
    onready: function() {
      console.log('soundmanager is ready to create a sound');
      
      SC.initialize({
        client_id: 'aa7a4eb3979426038d8aa53a458baa54'
      });

      var consumer_key = "aa7a4eb3979426038d8aa53a458baa54";

      var streamURL = 'https://api.soundcloud.com/tracks/226404391/stream?client_id=aa7a4eb3979426038d8aa53a458baa54';

      var test = soundManager.createSound({
        id: 'track1',
        url: streamURL
      });

      $('#m1').click(function() {
        soundManager.play('track1');
      });

    }
  });

  var createToPlay = function() {
    var mySound = soundManager.createSound({
      id: 'testingSoundID',
      autoLoad: true,
      url: '../assets/Gramatik.mp3'
    });
    $('#m1').click(function() {
      soundManager.play('testingSoundID', '../assets/Gramatik.mp3');
    });
  };

});