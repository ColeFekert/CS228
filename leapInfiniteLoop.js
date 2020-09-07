var controllerOptions = {};

var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

function HandleFrame(frame) {
  if (frame.hands.length == 1){
    var hand = frame.hands[0];

    HandleHand(hand);
  }
}

function HandleHand(hand) {
  var fingers = hand.fingers;

  for (var i = 0; i < fingers.length; i++) {
    if (fingers[i].type == 1) {
      HandleFinger(fingers[i]);
    }
  }
}

function HandleFinger(finger) {
  // console.log(finger.tipPosition);
  x = finger.tipPosition[0];
  y = finger.tipPosition[1];
  z = finger.tipPosition[2];
}

Leap.loop(controllerOptions, function(frame)
{
  clear();

  HandleFrame(frame);

  // var rando1 = Math.floor(Math.random() * 2) - 1;
  // var rando2 = Math.floor(Math.random() * 2) - 1;
  //
  // circle(x + rando1, y + rando2, 50);
}
);
