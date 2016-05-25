$(document).ready(function() {

  $("#cover").show(0).delay(3000).fadeOut("slow");

  // LETTERS GLOW & 'PLAYING' CLASS ADDED

  $(".words").click(function(){
    $('.words').not(this).removeClass('playing');
    $(this).toggleClass('playing');
  });

  // PLAY INSTRUCTIONS

  $('.infoButton').click(function(){
    $('#cover').show();
  });

  $('#cover').click(function(){
     $('#cover').hide();
  });

  listTracks('228016299');

  wednesday();
  updateWednesday();

  // PLAYLISTS

  soundManager.setup({
    
    url: './swf',
    flashVersion: 9,

    onready: function() {

      // MONDAY 
      // & FRIDAY 
      
      $('#c, #h, #r3, #i, #s1, #t, #m1, #e, #r1, #r2, #y').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });

      // TUESDAY
      // & WEEKEND 

      $('#t-tues, #u-tues, #e-tues, #s-tues, #d-tues, #a-tues, #y-tues, #v-tues, #i-tues, #b-tues, #ee-tues, #ss-tues').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });

      // WEDNESDAY

      $('#w-w, #e-w, #d-w, #n-w, #ee-w, #s-w, #dd-w, #a-w, #y-w, #v-w, #i-w, #b-w, #eee-w, #ss-w').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });

      // THURSDAY

      $('#t-th, #h-th, #u-th, #r-th, #s-th, #d-th, #a-th, #y-th, #v-th, #i-th, #b-th, #e-th, #ss-th').click(function() {
        var id = document.getElementById(this.id).attributes.name.value;
        var info = document.getElementById(this.id).attributes.title.value;
        var next = document.getElementById(this.id).attributes.value.value;

        soundmanagerCreate(id);
        play(this, id, info, next);
      });
    }
  });
});

