(function($){ 
  $(document).ready(function() {
    var elems = $('*[showhide]'),
      $elem, id, text, settings;

    for (var i = 0; i < elems.length; i++) {
      $elem = elems.eq(i);
      id = "#" + $elem.attr("showhide");
      text = $elem.text();

      if (text){
        settings = JSON.parse($elem.text());
        $elem.data("wpsh_show", settings[0]);
        $elem.data("wpsh_hide", settings[1]);

        if (settings.length > 2 && settings[2]) {
          $elem.text(settings[1]);
          $(id).hide();
        }
        else {
          $elem.text(settings[0]);
          $(id).show();
        }
      }

      $elem.data("wpsh_id", id);

      $elem.click(function(e) {
        console.log(e);
        var $elem = $(e.currentTarget);
        var id = $elem.data("wpsh_id");
        if ($(id).is(":visible")) {
          if ($elem.data("wpsh_hide")){
            $elem.text($elem.data("wpsh_hide"));
          }
          $(id).hide();
        }
        else {
          if ($elem.data("wpsh_show")){
            $elem.text($elem.data("wpsh_show"));
          }
          $(id).show();
        }
        return false;
      });
    }
  });
})(jQuery);
