var controllerOptions = {};

var rawXMin = 9999;
var rawXMax = 0;
var rawYMin = 9999;
var rawYMax = 0;

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

function TransformCoordinates(x,y) {
  if (x < rawXMin) {
    rawXMin = x;
  }

  if (x > rawXMax) {
    rawXMax = x;
  }

  if (y < rawYMin) {
    rawYMin = y;
  }

  if (y > rawYMax) {
    rawYMax = y;
  }

  x = (((window.innerWidth - 0) * (x - rawXMin)) / (rawXMax - rawXMin));

  y = (((window.innerHeight - 0) * (y - rawYMin)) / (rawYMax - rawYMin));

  return [x,y];
}

function HandleFrame(frame) {
  if (frame.hands.length == 1){
    var hand = frame.hands[0];

    HandleHand(hand);
  }
}

function HandleHand(hand) {
  var fingers = hand.fingers;

  for (var i = 3; i >= 0; i -= 1) {     // For each bone
    for (var j = 4; j >= 0; j -= 1) {   // For each finger
      // HandleFinger(fingers[i]);
      // console.log("finger: " + j);
      // console.log("bone: " + i + "\n");
      HandleBone(fingers[j].bones[i], fingers[j].bones[i].type, moreThanOneHand);
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

function HandleBone(bone, boneType) {
  xt = bone.nextJoint[0];
  yt = bone.nextJoint[1];
  zt = bone.nextJoint[2];

  xb = bone.prevJoint[0];
  yb = bone.prevJoint[1];
  zb = bone.prevJoint[2];

  [xt, yt] = TransformCoordinates(xt, yt);
  [xb, yb] = TransformCoordinates(xb, yb);

  if (boneType == 0) {
    strokeWeight(8);
    stroke(20);
  } else if (boneType == 1) {
    strokeWeight(6);
    stroke(60);
  } else if (boneType == 2) {
    strokeWeight(4);
    stroke(80);
  } else {
    strokeWeight(2);
    stroke(100);
  }

  line(xt, window.innerHeight - yt, xb, window.innerHeight - yb, zt, zb);
}

Leap.loop(controllerOptions, function(frame)
{
  clear();

  HandleFrame(frame);
}
);
