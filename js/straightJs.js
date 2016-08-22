


var addEvent = function(object, type, callback) {
    if (object === null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

// Swap out logo image for responsive header
function headerResize() {
  var logoImg  = document.querySelector('.logo img'),
      wndwWdth = window.innerWidth,
      mqL      = 1170;

  if (wndwWdth <= mqL ) {
    logoImg.src = 'assets/icons/logo.svg';
  } else {
    logoImg.src = 'assets/icons/logo-1.svg';
  }
}

addEvent(window, 'resize', headerResize);
