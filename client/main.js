dispatchEvent('mighty.start', extFolder())

var csInterface = new CSInterface();
var appName = csInterface.hostEnvironment.appName;

// MANUAL TEST
var foldBtn = document.getElementById('foldBtn');
var foldIcon = document.getElementById('foldIcon');
var layerNest = document.getElementById('layerNest');
var radioBtn = document.getElementById('radioBtn');
var radioIcon = document.getElementById('radioIcon');
var hideBtn = document.getElementById('hideBtn');
var hideIcon = document.getElementById('hideIcon');
var lockBtn = document.getElementById('lockBtn');
var lockIcon = document.getElementById('lockIcon');
var isShow = true;
var isLock = true;
var isFold = false;
var isRadio = true;
//



loadUniversalJSXLibraries();
// console.log(appUI);
loadJSX('mightyLayers.jsx')


// csInterface.evalScript(`readLayers()`, function(evt){
//   console.log(evt);
//   var result = JSON.parse(evt);
//   console.log(result);
//   var allRes = parseAll(evt);
// })


function retrieveData(str) {
  var result = JSON.parse(str);
  console.log(result);
}


function parseAll(str){
  var result = JSON.parse(str);
  for (let [key, value] of Object.entries(result)) {
    if (typeof value !== 'object') {
      result[key] = parseAll(value);
    } else {
      result[key] = key;
    }
  }
  return result;
}













// MANUAL TEST
foldBtn.addEventListener('click', function(evt){
  console.log(evt);
  var folds = ['adobe-icon-angleDown', 'adobe-icon-angleRight'];
  var show = ['none', 'flex'];
  isFold = !isFold;
  if (isFold) {
    switchClass(foldIcon, folds[0], folds[1]);
    layerNest.style.display = 'none';
  } else {
    switchClass(foldIcon, folds[1], folds[0]);
    layerNest.style.display = 'flex';
  }
})

radioBtn.addEventListener('click', function(evt){
  console.log(evt);
  var folds = ['adobe-icon-layerRadioOff', 'adobe-icon-layerRadioOn'];
  isRadio = !isRadio;
  if (isRadio) {
    switchClass(radioIcon, folds[0], folds[1]);
  } else {
    switchClass(radioIcon, folds[1], folds[0]);
  }
})

hideBtn.addEventListener('click', function(evt){
  console.log(evt);
  isShow = !isShow;
  if (isShow) {
    hideIcon.style.display = 'flex';
  } else {
    hideIcon.style.display = 'none';
  }
})

lockBtn.addEventListener('click', function(evt){
  console.log(evt);
  isLock = !isLock;
  if (isLock) {
    lockIcon.style.display = 'flex';
  } else {
    lockIcon.style.display = 'none';
  }
})
//
