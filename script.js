function moreinfo() {
  a = document.getElementById("aside2");
  a.classList.add("aside2-show");
  b = document.getElementById("more-info");
  b.classList.add("more-info-hide");
}

function close_aside() {
  c = document.getElementById("aside2");
  c.classList.remove("aside2-show");
  d = document.getElementById("more-info");
  d.classList.remove("more-info-hide");
}
