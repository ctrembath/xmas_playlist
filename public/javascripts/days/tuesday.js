$(document).ready(function() {

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {

      // TOP LINE - TUESDAY

      $('#t-tues').click(function() {
        var trackID = '243051362'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Tourist - To Have You Back', 'u-tues');
      });

      $('#u-tues').click(function() {
        var trackID = '118894880'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Odesza - My Friends Never Die Little', 'e-tues');
      });

      $('#e-tues').click(function() {
        var trackID = '1688282'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Little People - Start Shootin\'', 's-tues');
      });

      $('#s-tues').click(function() {
        var trackID = '73799584'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Nuages - Dreams', 'd-tues');
      });

      $('#d-tues').click(function() {
        var trackID = '1116385682'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Darkside - Paper Trails (RA Sessions)', 'a-tues');
      });

      $('#a-tues').click(function() {
        var trackID = '70430214'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Nujabes - Reflection Eternal', 'y-tues');
      });

      $('#y-tues').click(function() {
        var trackID = '123022564'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Ben Khan - Savage', 'v-tues');
      });

      // SECOND LIND - VIBES

      $('#v-tues').click(function() {
        var trackID = '237386464'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Pop Caan - Feisty Chat', 'i-tues');
      });

      $('#i-tues').click(function() {
        var trackID = '241511581'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Woods - Sun City Creeps', 'b-tues');
      });

      $('#b-tues').click(function() {
        var trackID = '237101589'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Flybear - The Hook', 'ee-tues');
      });

      $('#ee-tues').click(function() {
        var trackID = '116385682'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Darkside - Paper Trails (RA Sessions)', 'ss-tues');
      });

      $('#ss-tues').click(function() {
        var trackID = '201557891'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopLine(tune, trackID, 'Glxy - Searching You', 't-tues');
      });
    }
  })
});