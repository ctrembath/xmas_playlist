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
        var trackID = '118894880';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Florence + The Machine - You’ve Got The Love (Jamie XX Remix)', 'u-th');
      });

      $('#u-th').click(function() {
        var trackID = '1688282';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Ricky Blaze - Apart Ft. Alexus Rose', 'r-th');
      });

      $('#r-th').click(function() {
        var trackID = '73799584';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Oh Wonder - Body Gold (Louis The Child Remix)', 's-th');
      });

      $('#s-th').click(function() {
        var trackID = '154829271';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Jah9 - Avocado', 'd-th');
      });

      $('#d-th').click(function() {
        var trackID = '70430214';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'The Other Side - Public Service Broadcasting', 'a-th');
      });

			$('#a-th').click(function() {
				var trackID = '210606695';
				var tune = event.target;
				soundmanagerCreate(trackID);
				play(tune, trackID, 'flybear - The Hook', 'y-th');
			});

      $('#y-th').click(function() {
        var trackID = '210606695';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Alex Shulz - Never Forget You (Remix)', 'v-th');
      });

      // VIBES LINE

      $('#v-th').click(function() {
        var trackID = '201557891';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'MØ - Don’t Wanna Dance (Goldroom Remix)', 'i-th');
      });

      $('#i-th').click(function() {
        var trackID = '210633688';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Hayden James - Something About You (ODESZA Remix)', 'b-th');
      });

      $('#b-th').click(function() {
        var trackID = '237101589';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Astronomyy - Ocean Eyes (Astronomyy Edit)', 'e-th');
      });

      $('#e-th').click(function() {
        var trackID = '116385682';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Fickle Friends - Say No More', 'ss-th');
      });

      $('#ss-th').click(function() {
        var trackID = '237386464';
        var tune = event.target;
        soundmanagerCreate(trackID);
        play(tune, trackID, 'Tom Misch & Carmody - Easy Love', 't-th');
      });
    }
  })// TOP LINE THURSDAY

    }

  })

});