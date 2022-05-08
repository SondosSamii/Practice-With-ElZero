function readMore() {
  document.getElementById("ellipsis").classList.add("show");
  document.getElementById("more").style.display = "none";
  document.getElementById("less").style.display = "inline";
}

function readLess() {
  document.getElementById("ellipsis").classList.remove("show");
  document.getElementById("less").style.display = "none";
  document.getElementById("more").style.display = "inline";
}
