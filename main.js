  <script>
    jQuery(document).ready(function() {
      $(window).on('load', function () {
        var maxHeight = 0;
        $(".product-details-info").each(function(){
          if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        $(".product-details-info").height(maxHeight);
      });


      $(window).on('resize', function(){
        var maxHeight = 0;
        $(".product-details-info").each(function(){
          if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        $(".product-details-info").height(maxHeight);
      });

    });


  </script>
