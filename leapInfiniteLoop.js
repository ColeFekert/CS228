var controllerOptions = {};

var i = 0;
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

Leap.loop(controllerOptions, function(frame)
{
  console.log(i);

  var rando = Math.floor(Math.random() * 2) - 1;

  circle(x + rando, y, 50);

  i++;
}
);
