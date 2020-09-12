var controllerOptions = {};

var rawXMin = 9999;
var rawXMax = 0;
var rawYMin = 9999;
var rawYMax = 0;

var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var z = 0;

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
}

function HandleFinger(finger) {
  // console.log(finger.tipPosition);
  console.log("XMax: " + rawXMax);
  console.log("XMin: " + rawXMin);
  console.log("YMax: " + rawYMax);
  console.log("YMin: " + rawYMin);

  if (finger.tipPosition[0] < rawXMin) {
    rawXMin = finger.tipPosition[0];
  }

  if (finger.tipPosition[0] > rawXMax) {
    rawXMax = finger.tipPosition[0];
  }

  if (finger.tipPosition[1] < rawYMin) {
    rawYMin = finger.tipPosition[1];
  }

  if (finger.tipPosition[1] > rawYMax) {
    rawYMax = finger.tipPosition[1];
  }

  x = finger.tipPosition[0];
  y = finger.tipPosition[1];
  z = finger.tipPosition[2];

  x = (((window.innerWidth - 0) * (x - rawXMin)) / (rawXMax - rawXMin));

  y = (((window.innerWidth - 0) * (y - rawYMin)) / (rawYMax - rawYMin));

  circle(x, window.innerHeight - y, z);
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
