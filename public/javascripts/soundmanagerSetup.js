$(document).ready(function() {

  soundManager.setup({
    url: './swf',
    flashVersion: 9,
    onready: function() {
      console.log('soundmanager ready to create a sound');
      createToPlay();
    }
  });

  var createToPlay = function() {
    var mySound = soundManager.createSound({
      id: 'testingSoundID',
      // url: 'https://api.soundcloud.com/tracks/233605980?client_id=aa7a4eb3979426038d8aa53a458baa54'
      url: '../assets/Gramatik.mp3'
    });
    console.log(mySound);
    console.log(mySound.url);
    console.log(mySound.duration);
    soundManager.play('testingSoundID', '../assets/Gramatik.mp3');
    // mySound.play();
  };

});