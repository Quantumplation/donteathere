window.onload = function() {
  var header = document.getElementById("vote-header");
  var intro = document.getElementById("intro");
  var dismissBtn = document.getElementById("dismiss-btn");
  var infoBtn = document.getElementById("info-btn");
  var content = document.getElementById('intro-content');


  function hideIntro() {
    intro.classList.remove("shown", "in-anim");
    intro.classList.add("hidden", "out-anim");

    content.classList.remove("shown", "in-anim");
    content.classList.add("hidden", "out-anim");

    header.classList.remove("intro");
  }
  function showIntro() {
    intro.classList.remove("hidden", "out-anim");
    intro.classList.add("shown", "in-anim");

    content.classList.remove("hidden", "out-anim");
    content.classList.add("shown", "in-anim");

    header.classList.add("intro");
  }

  if(window.localStorage && window.localStorage.getItem('dismissed')) {
    hideIntro();
  } else {
    showIntro();
  }
  dismissBtn.onclick = function() {
    if(window.localStorage) {
      window.localStorage.setItem('dismissed', true);
    }
    hideIntro();
  }
  infoBtn.onclick = showIntro;
}
