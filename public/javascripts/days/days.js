$(document).ready(function() {

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {

      // MONDAY - CURRENT - NO MAYO & JUICEBOX
      // FRIDAY - CURRENT - ELLA
      
      $('#c, #h, #r3, #i, #s1, #t, #m1, #e, #r1, #r2, #y').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });

      // TUESDAY - CURRENT - NO MAYO

      $('#t-tues, #u-tues, #e-tues, #s-tues, #d-tues, #a-tues, #y-tues, #v-tues, #i-tues, #b-tues, #ee-tues, #ss-tues').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });
    }
  });
});

