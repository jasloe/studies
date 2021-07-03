console.log("loaded");

var el = document.getElementById("myAudio");

el.addEventListener("ended", () => {
  console.log("playing");
});

el.addEventListener("ended", function () {
  console.log("playing");
});
