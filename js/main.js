let stepTime = 20;
let docBody = document.body;
let focElem = document.documentElement;

let scrollAnimationStep = function (initPos, stepAmount) {
  let newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
  docBody.scrollTop = focElem.scrollTop = newPos;
  newPos && setTimeout(function () {
    scrollAnimationStep(newPos, stepAmount);
  }, stepTime);
}

let scrollTopAnimated = function (speed) {
  let topOffset = docBody.scrollTop || focElem.scrollTop;
  let stepAmount = topOffset;
  speed && (stepAmount = (topOffset * stepTime)/speed);
  scrollAnimationStep(topOffset, stepAmount);
};
