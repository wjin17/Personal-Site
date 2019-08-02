/* $(".nav-item").on("click", function(event) {
  event.preventDefault();

  const href = $(this).attr("href");

  window.history.pushState(null, null, href);

  $(".nav-item").removeClass("active");
  $(this).addClass("active");

  $.ajax({
    url: href,
    success: function(data) {
      $("section").fadeOut(250, function() {
        console.log(data);
        const newPage = $(data)
          .filter("section")
          .html();

        $("section").html(newPage);

        $("section").fadeIn(250);
      });
    }
  });
}); */
