window.onload = function() {
  var header = document.getElementById("vote-header");
  var intro = document.getElementById("intro");
  var dismissBtn = document.getElementById("dismiss-btn");
  var infoBtn = document.getElementById("info-btn");
  var locationCentered = false;
  //var content = document.getElementById('intro-content');

  function hideIntro() {
    intro.classList.remove("shown", "in-anim");
    intro.classList.add("hidden", "out-anim");

    //content.classList.remove("shown", "in-anim");
    //content.classList.add("hidden", "out-anim");

    header.classList.add("out-anim");
    header.classList.remove("intro");
    setTimeout(function () { header.classList.remove("out-anim"); }, 500);
  }
  function showIntro() {
    intro.classList.remove("hidden", "out-anim");
    intro.classList.add("shown", "in-anim");

    //content.classList.remove("hidden", "out-anim");
    //content.classList.add("shown", "in-anim");

    header.classList.add("intro");
  }
  function centerUser() {
    locationCentered = true;
    //If we can get location information from the browser, update the map's center point & zoom level
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        window.__deh_map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        window.__deh_map.setZoom(12);
      });
    }
  }

  if(window.localStorage && window.localStorage.getItem('dismissed')) {
    hideIntro();
    centerUser();
  } else {
    showIntro();
  }
  dismissBtn.onclick = function() {
    if(window.localStorage) {
      window.localStorage.setItem('dismissed', true);
    }

    hideIntro();
    if(!locationCentered) {
      centerUser();
    }
  }
  infoBtn.onclick = showIntro;
}
