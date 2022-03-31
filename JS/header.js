$(document).ready(function () {
  var broj = 2;
  $("#navigacija-lista").hide();

  $("#navigacija").click(function (e) {
    if (broj % 2 == 0) {
      $("#navigacija-lista").show();
      
    } else {
      $("#navigacija-lista").hide();
    }
    broj++;
  });
});
