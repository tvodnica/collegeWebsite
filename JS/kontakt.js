$(document).ready(function () {
  $("#kontakt-forma")
    .dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        POŠALJI: function () {
          $("#posalji").click();
          this.css("background", "green");
        },
        ODUSTANI: function () {
          $(this).dialog("close");
        },
      },
      show: { effect: "fadeIn", duration: 300 },
      hide: { effect: "fadeOut", duration: 300 },
      minWidth: "fit-content",
      maxWidth: "70vw",
      width: "100%",
    })
    .prev(".ui-dialog-titlebar")
    .css("background", "black");

  $(".kontakt").click(function (e) {
    e.preventDefault();
    $("#kontakt-forma").dialog("open");
  });
});
