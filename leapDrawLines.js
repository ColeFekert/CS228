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

  y = (((window.innerWidth - 0) * (y - rawYMin)) / (rawYMax - rawYMin));

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

  for (var i = 0; i < fingers.length; i++) {
    HandleFinger(fingers[i]);
  }
}

function HandleFinger(finger) {
  for (var i = 0; i < finger.bones.length; i++) {
    HandleBone(finger.bones[i]);
  }

  x = finger.tipPosition[0];
  y = finger.tipPosition[1];
  z = finger.tipPosition[2];

  [x, y] = TransformCoordinates(x, y);

  // circle(x, window.innerHeight - y, z);
}

function HandleBone(bone) {
  console.log("-----");

  xt = bone.nextJoint[0];
  yt = bone.nextJoint[1];
  zt = bone.nextJoint[2];

  xb = bone.prevJoint[0];
  yb = bone.prevJoint[1];
  zb = bone.prevJoint[2];

  [xt, yt] = TransformCoordinates(xt, yt);
  [xb, yb] = TransformCoordinates(xb, yb);

  line(xt, window.innerHeight - yt, xb, window.innerHeight - yb, zt, zb);
}

Leap.loop(controllerOptions, function(frame)
{
  clear();

  HandleFrame(frame);
}
);
