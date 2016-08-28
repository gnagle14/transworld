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



// -----------------------------------
// Main Header RESIZE & SCROLL actions

var logoImg   = document.querySelector('.logo img'),
    mainHead  = document.querySelector('.mainHead'),
    bigWidth  = 1000,
    hideHead;


// RESIZE actions
function noTrans() {
  if (mainHead.classList.contains('slide-up') ) {
    mainHead.classList.add('no-transition');
    mainHead.classList.remove('slide-up');
    setTimeout(function(){
      mainHead.classList.remove('no-transition');
    }, 100);
  }
}

function mainHeadResize() {
  var wndWidth = window.innerWidth;

  if ( wndWidth <= bigWidth ) {
    logoImg.src = 'assets/icons/tws_logo.svg';
    hideHead = false;
  }
  else {
    logoImg.src = 'assets/icons/tws_logo-2.svg';
    hideHead = true;
    noTrans();
  }
}
mainHeadResize();
addEvent(window, "resize", mainHeadResize);


// SCROLL actions
var
    previousTop  = 0,
    currentTop   = 0,
    scrollDelta  = 10,
    scrollOffset = 200;

function checkHead(currentTop) {
  // scrolling Down
  if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
    mainHead.classList.add('slide-up');
  }
  // scrolling Up
  else if (previousTop - currentTop > scrollDelta) {
    mainHead.classList.remove('slide-up');
  }
}

function mainHeadAction(currentTop) {
  currentTop = document.body.scrollTop;
  checkHead(currentTop);
  previousTop = currentTop;
}

function mainHeadScroll() {
  if ( hideHead === false ) {
    mainHeadAction();
  }
}
// mainHeadScroll();
addEvent(document, "scroll", mainHeadScroll);
