$(document).ready(function () {
  var typewriter = new Typewriter("#typewriter", {
      loop:true,
  });

  typewriter
    .pauseFor(500)
    .typeString("Budi izvrstan u onome što vidiš")
    .pauseFor(300)
    .deleteChars(5)
    .pauseFor(300)
    .typeString("voliš!")
    .pauseFor(700)
    .typeString("<h3>ZAISKRI.</h3>")
    .pauseFor(3000)
    .start();
});
