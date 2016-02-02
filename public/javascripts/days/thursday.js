$(document).ready(function() {

  // CURRENT PLAYLIST - DARBY

  soundManager.setup({

    url: './swf',
    flashVersion: 9,

    onready: function() {

      // TOP LINE THURSDAY

      $('#t-th').click(function() {
        console.log('CLICKED ON THURSDAY T')
        var trackID = '242672575';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Ben Philipps - Don’t Look Back (feat. Ashe)', 'h-th');
      });


    }

  })

});