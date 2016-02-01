$(document).ready(function() {

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {
      
      // TOP LINE - MONDAY

      $('#c').click(function() {
        var trackID = '235758881'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopline(tune, trackID, 'Ray BLK - 50/50', 'h');
      });

      $('#h').click(function() {
        var trackID = '187929420'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopline(tune, trackID, 'Ménage à Trois - Ocean Boy', 'r3');
      });

      $('#r3').click(function() {
        var trackID = '24895618'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopline(tune, trackID, 'Lovebirds ft. Stee Downes - Want You In My Soul', 'i');
      });

      $('#i').click(function() {
        var trackID = '235593121'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopline(tune, trackID, 'Majid Jordan - Something About You', 's1');
      });

      $('#s1').click(function() {
        var trackID = '235427283'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopline(tune, trackID, 'LOYAL - Blue and the Green', 't');
      });

      $('#t').click(function() {
        var trackID = '208738257'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playTopline(tune, trackID, 'Joe Hertz - Ashes Ft LIV', 'm1');
      });

      // SECOND LINE - VIBES

      $('#m1').click(function() {
        var trackID = '233605980'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playSecondline(tune, trackID, 'Couros - Turning', 'e')
      });

      $('#e').click(function() {
        var trackID = '225425321'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playSecondline(tune, trackID, 'DREWXHILL - Struggle', 'r1')
      });

      $('#r1').click(function() {
        var trackID = '226404391'        
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playSecondline(tune, trackID, 'Camel Power Club - Ourson', 'r2');
      });

      $('#r2').click(function() {
        var trackID = '229055409'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playSecondline(tune, trackID, 'Club Kuru - Layla', 'y');
      });

      $('#y').click(function() {
        var trackID = '230917974'
        var streamURL = getURL(trackID);
        var tune = event.target;

        soundmanagerCreate(trackID, streamURL);
        playSecondline(tune, trackID, 'Luke Mahony Hammond - DRIFT');
      });
    },
  });
});

