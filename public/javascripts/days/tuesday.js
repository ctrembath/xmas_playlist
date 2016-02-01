$(document).ready(function() {

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {

      // TOP LINE - TUESDAY

      $('#t-tues').click(function() {
        var trackID = '243051362'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Tourist - To Have You Back', 'u-tues');
      });

      $('#u-tues').click(function() {
        var trackID = '118894880'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Odesza - My Friends Never Die Little', 'e-tues');
      });

      $('#e-tues').click(function() {
        var trackID = '1688282'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Little People - Start Shootin\'', 's-tues');
      });

      $('#s-tues').click(function() {
        var trackID = '73799584'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Nuages - Dreams', 'd-tues');
      });

      $('#d-tues').click(function() {
        var trackID = '154829271'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Nao Vs. A. K. Paul - So Good', 'a-tues');
      });

      $('#a-tues').click(function() {
        var trackID = '70430214'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Nujabes - Reflection Eternal', 'y-tues');
      });

      $('#y-tues').click(function() {
        var trackID = '210606695'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Tom Misch - Sunshine', 'v-tues');
      });

      // VIBES LINE

      $('#v-tues').click(function() {
        var trackID = '237386464'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Pop Caan - Feisty Chat', 'i-tues');
      });

      $('#i-tues').click(function() {
        var trackID = '241511581'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Woods - Sun City Creeps', 'b-tues');
      });

      $('#b-tues').click(function() {
        var trackID = '237101589'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Flybear - The Hook', 'ee-tues');
      });

      $('#ee-tues').click(function() {
        var trackID = '116385682'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Darkside - Paper Trails (RA Sessions)', 'ss-tues');
      });

      $('#ss-tues').click(function() {
        var trackID = '201557891'
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Glxy - Searching You', 't-tues');
      });
    }
  })
});