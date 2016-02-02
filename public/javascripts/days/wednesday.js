$(document).ready(function() {

  soundManager.setup({

    url: './swf',
    flashVersion: 9,

    onready: function() {

      // TOP LINE - WEDNESDAY

      $('#w-w').click(function() {
        var trackID = '210633688';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Kiiara - Gold', 'e-w')
      });

      // VIBES LINE
    }

  })

});