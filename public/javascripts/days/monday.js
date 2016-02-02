$(document).ready(function() {

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {
      
      // TOP LINE - MONDAY

      $('#c').click(function() {
        var trackID = '235758881';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Ray BLK - 50/50', 'h');
      });

      $('#h').click(function() {
        var trackID = '187929420';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Ménage à Trois - Ocean Boy', 'r3');
      });

      $('#r3').click(function() {
        var trackID = '24895618';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Lovebirds ft. Stee Downes - Want You In My Soul', 'i');
      });

      $('#i').click(function() {
        var trackID = '235593121';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Majid Jordan - Something About You', 's1');
      });

      $('#s1').click(function() {
        var trackID = '200083292';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Mura Masa - Lovesick Fuck', 't');
      });

      $('#t').click(function() {
        var trackID = '208738257';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Joe Hertz - Ashes Ft LIV', 'm1');
      });

      // VIBES LINE

      $('#m1').click(function() {
        var trackID = '233605980';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Couros - Turning', 'e')
      });

      $('#e').click(function() {
        var trackID = '225425321';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'DREWXHILL - Struggle', 'r1')
      });

      $('#r1').click(function() {
        var trackID = '218904197';       
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Kenton Slash Demon - Harpe', 'r2');
      });

      $('#r2').click(function() {
        var trackID = '229055409';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Club Kuru - Layla', 'y');
      });

      $('#y').click(function() {
        var trackID = '230917974';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Luke Mahony Hammond - DRIFT');
      });
    },
  });
});

