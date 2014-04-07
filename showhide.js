(function($){ 
  $(document).ready(function() {
    var elems = $('*[showhide]');
    for (var i = 0; i < elems.length; i++) {
      var $elem = elems.eq(i);
      var settings = JSON.parse($elem.text());
      var id = "#" + $elem.attr("showhide");
      $elem.data("wpsh_show", settings[0]);
      $elem.data("wpsh_hide", settings[1]);
      $elem.data("wpsh_id", id);
      if (settings.length > 2 && settings[2]) {
        $elem.text(settings[1]);
        $(id).hide();
      }
      else {
        $elem.text(settings[0]);
        $(id).show();
      }

      $elem.click(function(e) {
        var $elem = $(e.currentTarget);
        var id = $elem.data("wpsh_id");
        if ($(id).is(":visible")) {
          $elem.text($elem.data("wpsh_hide"));
          $(id).hide();
        }
        else {
          $elem.text($elem.data("wpsh_show"));
          $(id).show();
        }
        return false;
      });
    }
  });
})(jQuery);
