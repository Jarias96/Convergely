function scrollMove() {
  var hd = $('#header');
  var ejeY = hd.offset();
  if (ejeY.top > 0) {
    hd.addClass('hd-move');
  } else {
    hd.removeClass('hd-move');
  }
}

$(document).ready(function() {
  $(window).scroll(function() {
    scrollMove();
  });
});
