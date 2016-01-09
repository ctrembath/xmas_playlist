$(document).ready(function() {

  // Track info in top banner

  var displayTrackInfo = function(trackName) {
    var infoBanner = document.getElementById('artist-info');
    infoBanner.innerHTML = trackName
  };

  // MAKES LETTER GLOW IF TRACK IS PLAYING

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
   

});