$(document).ready(function() {

  // CURRENT PLAYLIST - DARBY

  soundManager.setup({

    url: './swf',
    flashVersion: 9,

    onready: function() {

      // TOP LINE - WEDNESDAY

      $('#w-w').click(function() {
        var trackID = '242672575';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Ben Philipps - Don’t Look Back (feat. Ashe)', 'e-w');
      });

      $('#e-w').click(function() {
        var trackID = '241253852';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Caius - Without You', 'd-w');
      });

      $('#d-w').click(function() {
        var trackID = '237388216';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Dezaulait & Courtney Beavers - Just Ask', 'n-w');
      });

      $('#n-w').click(function() {
        var trackID = '218180798';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Billie Black - 3. Floating (prod.salute)', 'ee-w');
      });

      $('#ee-w').click(function() {
        var trackID = '230316167';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Fine Print - Can’t Lie (Ivy Lab Remix)', 's-w');
      });

      $('#s-w').click(function() {
        var trackID = '235150744';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'esta - Feathers (ft. JBird)', 'dd-w');
      });

      $('#dd-w').click(function() {
        var trackID = '243088218';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Novo Amor - Anchor (Boehm Remix)', 'a-w');
      });

      $('#a-w').click(function() {
        var trackID = '243384377';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'FloFilz - Getdismoney', 'y-w');
      });

      $('#y-w').click(function() {
        var trackID = '241018700';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Kanye West - Real Friends', 'v-w');
      });

      // VIBES LINE

      $('#v-w').click(function() {
        var trackID = '244233941';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'RYAN Playground - Are You Mad', 'i-w');
      });

      $('#i-w').click(function() {
        var trackID = '240654811';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'HONNE - Gone Are The Days (SOHN Remix)', 'b-w');
      });

      $('#b-w').click(function() {
        var trackID = '243255972';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Dillistone - Sad & High', 'eee-w');
      });

      $('#eee-w').click(function() {
        var trackID = '243255972';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Kali Uchis - Ridin Round Ft. Tory Lanez (Oshi Redo)', 'ss-w');
      });

      $('#ss-w').click(function() {
        var trackID = '222754027';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Kenton Slash Demon - Syko', 'w-w');
      });

    }

  })

});