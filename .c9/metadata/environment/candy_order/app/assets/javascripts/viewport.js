{"filter":false,"title":"viewport.js","tooltip":"/candy_order/app/assets/javascripts/viewport.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["var baseW = 1280;","var ua = navigator.userAgent.toLowerCase();","var isiPad = (ua.indexOf(\"ipad\") > -1);","function updateMetaViewport(){","  var viewportContent;","  var w = window.outerWidth;","  if(isiPad){","    viewportContent = \"width=\"+baseW+\"px\";","  } else {","    viewportContent = \"width=device-width,initial-scale=1\";","  }","  document.querySelector(\"meta[name='viewport']\").setAttribute(\"content\", viewportContent);","}","if(isiPad){","  window.addEventListener(\"resize\", updateMetaViewport, false);","  window.addEventListener(\"orientationchange\", updateMetaViewport, false);","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":28},"end":{"row":5,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":31,"mode":"ace/mode/javascript"}},"timestamp":1624283554992,"hash":"4000ffb7edae38c557874d63c6fbd73efcbd2c2f"}