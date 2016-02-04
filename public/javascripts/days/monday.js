$(document).ready(function() {

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {

      // MONDAY - CURRENT - NO MAYO & JUICEBOX
      
      $('#c, #h, #r3, #i, #s1, #t, #m1, #e, #r1, #r2, #y').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });

      // FRIDAY - CURRENT - ELLA

    }
  });
});

