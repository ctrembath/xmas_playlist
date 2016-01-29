$(document).ready(function() {

  var soundcloudClientID = 'aa7a4eb3979426038d8aa53a458baa54';

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {
      
      initializeSoundcloud();

      // TOPLINE - MONDAY

      $('#w-w').click(function() {
        var streamURL = getURL('235758881');
        var tune = event.target;
        soundmanagerCreate('track6', streamURL);
        playTopline(tune, 'track6', 'Ray BLK - 50/50', 'e-w');
      });

      $('#e-w').click(function() {
        var streamURL = getURL('187929420');
        var tune = event.target;
        soundmanagerCreate('track7', streamURL);
        playTopline(tune, 'track7', 'Ménage à Trois - Ocean Boy', 'd-w');
      });

      $('#d-w').click(function() {
        var streamURL = getURL('24895618');
        var tune = event.target;
        soundmanagerCreate('track8', streamURL);
        playTopline(tune, 'track8', 'Lovebirds ft. Stee Downes - Want You In My Soul', 'n-w');
      });

      $('#n-w').click(function() {
        var streamURL = getURL('235593121');
        var tune = event.target;
        soundmanagerCreate('track9', streamURL);
        playTopline(tune, 'track9', 'Majid Jordan - Something About You', 's-w');
      });

      $('#s-w').click(function() {
        var streamURL = getURL('235427283');
        var tune = event.target;
        soundmanagerCreate('track10', streamURL);
        playTopline(tune, 'track10', 'LOYAL - Blue and the Green', 'dd-w');
      });

      $('#dd-w').click(function() {
        var streamURL = getURL('208738257');
        var tune = event.target;
        soundmanagerCreate('track11', streamURL);
        playTopline(tune, 'track11', 'Joe Hertz - Ashes Ft LIV', 'a-w');
      });


     $('#a-w').click(function() {
      var streamURL = getURL('208738257');
      var tune = event.target;
      soundmanagerCreate('track11', streamURL);
      playTopline(tune, 'track11', 'Joe Hertz - Ashes Ft LIV', 'y-w');
    });

     $('#y-w').click(function() {
      var streamURL = getURL('208738257');
      var tune = event.target;
      soundmanagerCreate('track11', streamURL);
      playTopline(tune, 'track11', 'Joe Hertz - Ashes Ft LIV', 'v-w');
    });

      // SECONDLINE - VIBES

      $('#v-w').click(function() {
        var streamURL = getURL('233605980');
        var letter = event.target;
        soundmanagerCreate('track1', streamURL);
        playSecondline(letter, 'track1', 'Couros - Turning', 'i-w')
      });

      $('#i-w').click(function() {
        var streamURL = getURL('225425321');
        var tune = event.target;
        soundmanagerCreate('track2', streamURL);
        playSecondline(tune, 'track2', 'DREWXHILL - Struggle', 'b-w')
      });

      $('#b-w').click(function() {
        var streamURL = getURL('226404391');
        var tune = event.target;
        soundmanagerCreate('track3', streamURL);
        playSecondline(tune, 'track3', 'Camel Power Club - Ourson', 'eee-w');
      });

      $('#eee-w').click(function() {
        var streamURL = getURL('229055409');
        var tune = event.target;
        soundmanagerCreate('track4', streamURL);
        playSecondline(tune, 'track4', 'Club Kuru - Layla', 's-w');
      });

      $('#s-w').click(function() {
        var streamURL = getURL('230917974');
        var tune = event.target;
        soundmanagerCreate('track5', streamURL);
        playSecondline(tune, 'track5', 'Luke Mahony Hammond - DRIFT');
      });
    },
  });





