var controllerOptions = {};

var oneFrameOfData = nj.zeros([5,4,6]);

// var rawXMin = 9999;
// var rawXMax = 0;
// var rawYMin = 9999;
// var rawYMax = 0;

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

// function TransformCoordinates(x,y) {
//   if (x < rawXMin) {
//     rawXMin = x;
//   }
//
//   if (x > rawXMax) {
//     rawXMax = x;
//   }
//
//   if (y < rawYMin) {
//     rawYMin = y;
//   }
//
//   if (y > rawYMax) {
//     rawYMax = y;
//   }
//
//   x = (((window.innerWidth - 0) * (x - rawXMin)) / (rawXMax - rawXMin));
//
//   y = (((window.innerHeight - 0) * (y - rawYMin)) / (rawYMax - rawYMin));
//
//   return [x,y];
// }

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

// function HandleFinger(finger) {
//   for (var i = 0; i < finger.bones.length; i++) {
//     HandleBone(finger.bones[i], finger.bones[i].type);
//   }
//
//   x = finger.tipPosition[0];
//   y = finger.tipPosition[1];
//   z = finger.tipPosition[2];
//
//   [x, y] = TransformCoordinates(x, y);
//
//   // circle(x, window.innerHeight - y, z);
// }

function HandleBone(bone, boneType, fingerIndex, moreThanOneHand, interactionBox) {
  xt = bone.nextJoint[0];
  yt = bone.nextJoint[1];
  zt = bone.nextJoint[2];

  xb = bone.prevJoint[0];
  yb = bone.prevJoint[1];
  zb = bone.prevJoint[2];

  var normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint, true);
  var normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint, true);

  // console.log("Normalized Prev Joint: " + normalizedPrevJoint);
  // console.log("Normalized Next Joint: " + normalizedNextJoint);

  var canvasPrevX = window.innerWidth * normalizedPrevJoint[0];
  var canvasPrevY = window.innerHeight * (1 - normalizedPrevJoint[1]);

  var canvasNextX = window.innerWidth * normalizedNextJoint[0];
  var canvasNextY = window.innerHeight * (1 - normalizedNextJoint[1]);

  // console.log("X Range: " + window.innerWidth + " | Y Range: " + window.innerHeight);
  // console.log("CanvasPrevX: " + canvasPrevX + " | CanvasPrevY: " + canvasPrevY);
  // console.log("CanvasNextX: " + canvasNextX + " | CanvasNextY: " + canvasNextY);

  // [xt, yt] = TransformCoordinates(xt, yt);
  // [xb, yb] = TransformCoordinates(xb, yb);

  oneFrameOfData.set(fingerIndex, boneType, 0, xb);
  oneFrameOfData.set(fingerIndex, boneType, 1, yb);
  oneFrameOfData.set(fingerIndex, boneType, 2, zb);
  oneFrameOfData.set(fingerIndex, boneType, 3, xt);
  oneFrameOfData.set(fingerIndex, boneType, 4, yt);
  oneFrameOfData.set(fingerIndex, boneType, 5, zt);

  // oneFrameOfData.set(boneType, fingerIndex, 0, xb);
  // oneFrameOfData.set(boneType, fingerIndex, 1, yb);
  // oneFrameOfData.set(boneType, fingerIndex, 2, zb);
  // oneFrameOfData.set(boneType, fingerIndex, 3, xt);
  // oneFrameOfData.set(boneType, fingerIndex, 4, xt);
  // oneFrameOfData.set(boneType, fingerIndex, 5, xt);

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

  line(xt, window.innerHeight - yt, xb, window.innerHeight - yb, zt, zb);
}

function RecordData() {
  if (previousNumHands == 2 && currentNumHands == 1) {
    background(0)
    // console.log(oneFrameOfData.toString());
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
