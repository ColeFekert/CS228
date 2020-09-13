var controllerOptions = {};

var rawXMin = 9999;
var rawXMax = 0;
var rawYMin = 9999;
var rawYMax = 0;

var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var z = 0;

var xBase = window.innerWidth / 2;
var yBase = window.innerHeight / 2;
var zBase = 0;

function TransformCoordinates(x,y) {

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
    // if (fingers[i].type == 1) {
    //   HandleFinger(fingers[i]);
    // }

    HandleFinger(fingers[i]);
  }

  // for (var i = 0; i < fingers.proximal)
}

function HandleFinger(finger) {
  // console.log(finger);
  // console.log(finger.tipPosition);
  // console.log("XMax: " + rawXMax);
  // console.log("XMin: " + rawXMin);
  // console.log("YMax: " + rawYMax);
  // console.log("YMin: " + rawYMin);

  for (var i = 0; i <= 3; i++) {
    // console.log(finger.bones[i]);
    HandleBone(finger.bones[i]);
  }

  x = finger.tipPosition[0];
  y = finger.tipPosition[1];
  z = finger.tipPosition[2];

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

  // circle(x, window.innerHeight - y, z);
}

function HandleBone(bone) {
  // console.log(bone);

  x = bone.nextJoint[0];
  y = bone.nextJoint[1];
  z = bone.nextJoint[2];

  xBase = bone.prevJoint[0];
  yBase = bone.prevJoint[1];
  zBase = bone.prevJoint[2];

  // var a = bone.prevJoint[0];
  // var b = bone.prevJoint[1];
  // var c = bone.prevJoint[2];
  //
  // if (bone.nextJoint[0] < rawXMin) {
  //   rawXMin = bone.nextJoint[0];
  // }
  //
  // if (bone.prevJoint[0] > rawXMax) {
  //   rawXMax = bone.prevJoint[0];
  // }
  //
  // if (bone.nextJoint[2] < rawYMin) {
  //   rawYMin = bone.nextJoint[1];
  // }
  //
  // if (bone.prevJoint[1] > rawYMax) {
  //   rawYMax = bone.prevJoint[1];
  // }



  // console.log(x);
  // console.log(y);
  // console.log(z);

  x = (((window.innerWidth - 0) * (x - rawXMin)) / (rawXMax - rawXMin));

  y = (((window.innerWidth - 0) * (y - rawYMin)) / (rawYMax - rawYMin));

  xBase = (((window.innerWidth - 0) * (xBase - rawXMin)) / (rawXMax - rawXMin));

  yBase = (((window.innerWidth - 0) * (yBase - rawYMin)) / (rawYMax - rawYMin));

  console.log("x " + x);
  console.log("xBase " + xBase);

  circle(x, window.innerHeight - y, z);
  //
  // line(x, window.innerHeight - y, window.innerHeight - bone.prevJoint[0], window.innerHeight - bone.prevJoint[1]);
  line(x, window.innerHeight - y, z, xBase, window.innerHeight - yBase, zBase);
}

Leap.loop(controllerOptions, function(frame)
{
  clear();

  HandleFrame(frame);



  // circle(window.innerWidth - x, window.innerHeight - y, z);

  // var rando1 = Math.floor(Math.random() * 2) - 1;
  // var rando2 = Math.floor(Math.random() * 2) - 1;
  //
}
);
