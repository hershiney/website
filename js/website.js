$(document).ready(function() {

// all jquery and some javascript commands go here

  var rellax = new Rellax('.rellax');

});

$(document).ready(function() {

  $(function() {
    $("#slides").slidesjs({
      width: 580,
      height: 386,
      play: {
        active: true,
        auto: true,
        interval: 1200
      }
    });
  });

});
