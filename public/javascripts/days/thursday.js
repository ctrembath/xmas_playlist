$(document).ready(function() {

  soundManager.setup({

    url: './swf',
    flashVersion: 9,

    onready: function() {

      $('#t-th').click(function() {
        var trackID = '244093167';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Katy B x KAYTRANADA - Honey', 'h-th');
      });

      $('#h-th').click(function() {
        var trackID = '9485876';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Florence + The Machine - You’ve Got The Love (Jamie XX Remix)', 'u-th');
      });

      $('#u-th').click(function() {
        var trackID = '237629538';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Ricky Blaze - Apart Ft. Alexus Rose', 'r-th');
      });

      $('#r-th').click(function() {
        var trackID = '176237086';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Oh Wonder - Body Gold (Louis The Child Remix)', 's-th');
      });

      $('#s-th').click(function() {
        var trackID = '87257862';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Jah9 - Avocado', 'd-th');
      });

      $('#d-th').click(function() {
        var trackID = '188189839';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'The Other Side - Public Service Broadcasting', 'a-th');
      });

			$('#a-th').click(function() {
				var trackID = '237101589';
				var tune = event.target;
				soundmanagerCreate(trackID);
				play(tune, trackID, 'flybear - The Hook', 'y-th');
			});

      $('#y-th').click(function() {
        var trackID = '242970980';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Alex Shulz - Never Forget You (Remix)', 'v-th');
      });

      // VIBES LINE

      $('#v-th').click(function() {
        var trackID = '142431336';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'MØ - Don’t Wanna Dance (Goldroom Remix)', 'i-th');
      });

      $('#i-th').click(function() {
        var trackID = '216542711';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Hayden James - Something About You (ODESZA Remix)', 'b-th');
      });

      $('#b-th').click(function() {
        var trackID = '234966710';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Astronomyy - Ocean Eyes (Astronomyy Edit)', 'e-th');
      });

      $('#e-th').click(function() {
        var trackID = '227142468';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Fickle Friends - Say No More', 'ss-th');
      });

      $('#ss-th').click(function() {
        var trackID = '243221766';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Tom Misch & Carmody - Easy Love', 't-th');
      });
    }
  })
});