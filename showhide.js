(function($){ 
  $(document).ready(function() {
    var elems = $('*[showhide]'),
      $elem, id, text, settings, visible;

    for (var i = 0; i < elems.length; i++) {
      $elem = elems.eq(i);
      id = "#" + $elem.attr("showhide");
      visible = !!$elem.attr("showhide_visible");
      text = $elem.text();

      // check if the element has text inside it and attempt to parse it
      if (text){
        try {
          settings = JSON.parse($elem.text());
          $elem.data("wpsh_show", settings[0]);
          $elem.data("wpsh_hide", settings[1]);
        }catch(e){
          console.error("Error parsing text inside showhide element", $elem);
          console.error(e);
          continue;
        }
      }

      $elem.data("wpsh_id", id);

      if (visible) {
        if ($elem.data("wpsh_show")){
          $elem.text($elem.data("wpsh_show"));
        }
        $(id).show();
      }
      else {
        if ($elem.data("wpsh_hide")){
          $elem.text($elem.data("wpsh_hide"));
        }
        $(id).hide();
      }

      $elem.click(function(e) {
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
