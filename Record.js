var controllerOptions = {};

// Finger Vars
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var z = 0;

// Bone Vars
var xt = window.innerWidth / 2;
var yt = window.innerHeight / 2;
var zt = 0;

var xb = window.innerWidth / 2;
var yb = window.innerHeight / 2;
var zb = 0;

var previousNumHands = 0;
var currentNumHands = 0;

var moreThanOneHand;

var numSamples = 2;
var currentSample = 0;

var framesOfData = nj.zeros([5, 4, 6, numSamples]);


function HandleFrame(frame) {
  var interactionBox = frame.interactionBox;

  if (frame.hands.length == 1){
    moreThanOneHand = false;

    var hand = frame.hands[0];

    HandleHand(hand, moreThanOneHand, interactionBox);
  } else if (frame.hands.length > 1) {
    moreThanOneHand = true;

    var hand = frame.hands[0];

    HandleHand(hand, moreThanOneHand, interactionBox);
  } else {
    moreThanOneHand = false;
  }
}

function HandleHand(hand, moreThanOneHand, interactionBox) {
  var fingers = hand.fingers;

  for (var i = 3; i >= 0; i -= 1) {     // For each bone
    for (var j = 4; j >= 0; j -= 1) {   // For each finger
      // HandleFinger(fingers[i]);
      // console.log("finger: " + j);
      // console.log("bone: " + i + "\n");
      HandleBone(fingers[j].bones[i], fingers[j].bones[i].type, j, moreThanOneHand, interactionBox);
    }
  }
}

function HandleBone(bone, boneType, fingerIndex, moreThanOneHand, interactionBox) {
  var normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint, true);
  var normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint, true);

  // xt = bone.nextJoint[0];
  // yt = bone.nextJoint[1];
  // zt = bone.nextJoint[2];
  //
  // xb = bone.prevJoint[0];
  // yb = bone.prevJoint[1];
  // zb = bone.prevJoint[2];

  xt = normalizedNextJoint[0];
  yt = normalizedNextJoint[1];
  zt = normalizedNextJoint[2];

  xb = normalizedPrevJoint[0];
  yb = normalizedPrevJoint[1];
  zb = normalizedPrevJoint[2];


  // console.log("Normalized Prev Joint: " + normalizedPrevJoint);
  // console.log("Normalized Next Joint: " + normalizedNextJoint);

  framesOfData.set(fingerIndex, boneType, 0, currentSample, xb);
  framesOfData.set(fingerIndex, boneType, 1, currentSample, yb);
  framesOfData.set(fingerIndex, boneType, 2, currentSample, zb);
  framesOfData.set(fingerIndex, boneType, 3, currentSample, xt);
  framesOfData.set(fingerIndex, boneType, 4, currentSample, yt);
  framesOfData.set(fingerIndex, boneType, 5, currentSample, zt);


  var canvasPrevX = window.innerWidth * normalizedPrevJoint[0];
  var canvasPrevY = window.innerHeight * (1 - normalizedPrevJoint[1]);

  var canvasNextX = window.innerWidth * normalizedNextJoint[0];
  var canvasNextY = window.innerHeight * (1 - normalizedNextJoint[1]);

  // console.log(framesOfData);

  // console.log("X Range: " + window.innerWidth + " | Y Range: " + window.innerHeight);
  // console.log("CanvasPrevX: " + canvasPrevX + " | CanvasPrevY: " + canvasPrevY);
  // console.log("CanvasNextX: " + canvasNextX + " | CanvasNextY: " + canvasNextY);

  // [xt, yt] = TransformCoordinates(xt, yt);
  // [xb, yb] = TransformCoordinates(xb, yb);


  // framesOfData.set(boneType, fingerIndex, 0, xb);
  // framesOfData.set(boneType, fingerIndex, 1, yb);
  // framesOfData.set(boneType, fingerIndex, 2, zb);
  // framesOfData.set(boneType, fingerIndex, 3, xt);
  // framesOfData.set(boneType, fingerIndex, 4, xt);
  // framesOfData.set(boneType, fingerIndex, 5, xt);

  if (moreThanOneHand) {
    if (boneType == 0) {
      strokeWeight(8);
      // stroke(20);
      stroke(255,0,0);
    } else if (boneType == 1) {
      strokeWeight(6);
      // stroke(60);
      stroke(207,0,0);
    } else if (boneType == 2) {
      strokeWeight(4);
      // stroke(80);
      stroke(158,0,0);
    } else {
      strokeWeight(2);
      // stroke(100);
      stroke(115,0,0);
    }
  } else {
    if (boneType == 0) {
      strokeWeight(8);
      // stroke(20);
      stroke(0,255,0);
    } else if (boneType == 1) {
      strokeWeight(6);
      // stroke(60);
      stroke(0,207,0);
    } else if (boneType == 2) {
      strokeWeight(4);
      // stroke(80);
      stroke(0,158,0);
    } else {
      strokeWeight(2);
      // stroke(100);
      stroke(0,115,0);
    }
  }

  line(canvasNextX, canvasNextY, canvasPrevX, canvasPrevY, zt, zb);

  // line(xt, window.innerHeight - yt, xb, window.innerHeight - yb, zt, zb);
}

function RecordData() {
  if (previousNumHands == 2 && currentNumHands == 1) {
    background(0)
    console.log(framesOfData.toString());
  }
}

Leap.loop(controllerOptions, function(frame)
{
  currentNumHands = frame.hands.length;

  clear();

  HandleFrame(frame);

  RecordData();

  // console.log("Prev: " + previousNumHands + " -- Curr: " + currentNumHands);

  previousNumHands = currentNumHands;
}
);
