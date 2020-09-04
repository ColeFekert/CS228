var controllerOptions = {};

var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

Leap.loop(controllerOptions, function(frame)
{
  clear();

  var rando1 = Math.floor(Math.random() * 2) - 1;
  var rando2 = Math.floor(Math.random() * 2) - 1;

  circle(x + rando1, y + rando2, 50);
}
);
