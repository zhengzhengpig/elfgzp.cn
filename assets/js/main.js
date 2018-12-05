var leftTab = document.getElementById('left-tab'),
  rightTab = document.getElementById('right-tab')

// 垃圾方法，该方法必须等页面加载玩才有效
// window.onload = function(){
//   btn[0].onmouseover=function() {
//     leftTab.style.display="block";
//     leftTab.setAttribute("class","rotateInUpLeft self-animated");
//   }
//   btn[0].onmouseout=function() {
//     leftTab.setAttribute("class","rotateOutDownLeft self-animated");
//     // leftTab.style.display="none";
//   }
//   btn[1].onmouseover=function() {
//     rightTab.style.display="block";
//     rightTab.setAttribute("class","rotateInUpRight self-animated");
//   }
//   btn[1].onmouseout=function() {
//     rightTab.setAttribute("class","rotateOutDownRight self-animated");
//     // leftTab.style.display="none";
//   }
//
// }

function showLeft () {
  if (leftTab) {
    leftTab.style.display = 'block'
    leftTab.setAttribute('class', 'rotateInUpLeft self-animated')
  }
}

function goneLeft () {
  if (leftTab) {
    leftTab.setAttribute('class', 'rotateOutDownLeft self-animated')
  }
}

function showRight () {
  if (rightTab) {
    rightTab.style.display = 'block'
    rightTab.setAttribute('class', 'rotateInUpRight self-animated')
  }
}

function goneRight () {
  if (rightTab) {
    rightTab.setAttribute('class', 'rotateOutDownRight self-animated')
  }
}

var os = function () {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc
  }
}()

