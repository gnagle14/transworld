// http://stackoverflow.com/questions/641857/javascript-window-resize-event

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

var logoImg = document.querySelector('.logo img'),
    bigWidth    = 1000;

function mainHeadResize() {
  var wndWidth = window.innerWidth;

  if ( wndWidth <= bigWidth ) {
    logoImg.src = 'assets/icons/tws_logo.svg';
  }
  else {
    logoImg.src = 'assets/icons/tws_logo-2.svg';
  }

} mainHeadResize();

addEvent(window, "resize", mainHeadResize);
