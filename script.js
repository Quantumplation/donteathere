window.onload = function() {
  var header = document.getElementById("vote-header");
  var sticky = header.offsetTop;

  window.onscroll = function() {
    checkSticky();
  };

  function checkSticky() {
    if(window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  checkSticky();
}
