$(document).ready(function() {

  soundManager.setup({
    url: '/javascripts/swf/',
    onready: function() {
      console.log('hi from in the soundmanager onready method');
      var mySound = soundManager.createSound({
        url: 'https://api.soundcloud.com/tracks/233605980?client_id=aa7a4eb3979426038d8aa53a458baa54',
        onload: function() { console.log('sound has loaded'); }
      });
      console.log(mySound);
      // mySound.play();
    }
  });
});