$(document).ready(function() {

  var soundcloudConnect = function() {
    SC.initialize({
      client_id: 'aa7a4eb3979426038d8aa53a458baa54',
      redirect_uri: 'http://localhost:9292/auth/soundcloud/callback'
    });
  };

  soundManager.setup({
    url: './swf',
    flashVersion: 9,
    onready: function() {
      console.log('soundmanager ready to create a sound');
      createToPlay();
    }
  });

  var createToPlay = function() {
    soundcloudConnect();
    var mySound = soundManager.createSound({
      id: 'testingSoundID',
      autoLoad: true,
      url: '../assets/Gramatik.mp3'
      // url: 'https://api.soundcloud.com/tracks/233605980'
    });
    console.log(mySound);
    console.log(mySound.duration); // shows null until loading has started
    $('#m1').click(function() {
      soundManager.play('testingSoundID', '../assets/Gramatik.mp3');
      // soundManager.play('testingSoundID', 'https://api.soundcloud.com/tracks/233605980');
    });
  };

});