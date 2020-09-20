oneFrameOfData = nj.array([[[ 602.59699, 555.84592,   70.2729, 602.59699, 555.84592,   70.2729],
        [ 602.59699, 555.84592,   70.2729, 414.95951, 455.79243,   46.4568],
        [ 414.95951, 455.79243,   46.4568, 280.87641, 397.54995,   31.8915],
        [ 280.87641, 397.54995,   31.8915, 180.89542, 376.08337,   25.0974]],
       [[ 613.28629, 685.44692,   54.7839, 392.15151, 583.67378,   1.81002],
        [ 392.15151, 583.67378,   1.81002, 295.52499, 620.77758,   -35.061],
        [ 295.52499, 620.77758,   -35.061, 239.74109, 573.12994,  -54.7589],
        [ 239.74109, 573.12994,  -54.7589, 204.49106, 500.61284,  -66.2308]],
       [[ 652.04133, 685.76754,   45.9771, 476.30817, 580.88298,  -10.0377],
        [ 476.30817, 580.88298,  -10.0377, 398.83098, 641.12201,  -54.2978],
        [ 398.83098, 641.12201,  -54.2978, 342.83115,  595.8644,  -79.1053],
        [ 342.83115,  595.8644,  -79.1053,  304.7917, 521.27788,    -92.41]],
       [[ 695.66951, 667.49253,   38.8508, 574.89693, 565.66109,  -16.0058],
        [ 574.89693, 565.66109,  -16.0058, 493.80664, 611.78581,  -56.4033],
        [ 493.80664, 611.78581,  -56.4033, 430.65255, 563.77384,  -79.3666],
        [ 430.65255, 563.77384,  -79.3666, 386.05794,  489.3622,  -91.4809]],
       [[ 744.34692, 604.68129,   35.4724, 666.68553, 522.12314,  -18.7173],
        [ 666.68553, 522.12314,  -18.7173, 629.69854, 531.33351,  -53.0862],
        [ 629.69854, 531.33351,  -53.0862, 594.67188, 477.68164,   -69.452],
        [ 594.67188, 477.68164,   -69.452, 558.00778, 393.54956,  -79.3267]]])

// Start and end variables for the tensor
var xStart = 0;
var yStart = 0;
var zStart = 0;

var xEnd = 0;
var yEnd = 0;
var zEnd = 0;

// var xStart = window.innerWidth / 2;
// var yStart = window.innerHeight / 2;
// var zStart = 0;
//
// var xEnd = window.innerWidth / 2;
// var yEnd = window.innerHeight / 2;
// var zEnd = 0;

function draw() {
  clear();

  for (var i = 0; i < oneFrameOfData.shape[0]; i++) {
    for (var j = 0; j < oneFrameOfData.shape[1]; j++) {
      xStart = oneFrameOfData.get(i, j, 3);
      yStart = oneFrameOfData.get(i, j, 4);
      zStart = oneFrameOfData.get(i, j, 5);
      xEnd = oneFrameOfData.get(i, j, 0);
      yEnd = oneFrameOfData.get(i, j, 1);
      zEnd = oneFrameOfData.get(i, j, 2);

      // console.log(xStart, yStart, zStart, xEnd, yEnd, zEnd);
      // line(xStart, yEnd, xEnd, yStart, zStart, zEnd);
      line(xStart, window.innerHeight - yStart, xEnd, window.innerHeight - yEnd);
    }
  }

  // for (var j = 3; j >= 0; j -= 1) {     // For each bone
  //   for (var i = 4; i >= 0; i -= 1) {
  //     xEnd = oneFrameOfData.get(i, j, 0);
  //     yEnd = oneFrameOfData.get(i, j, 1);
  //     zEnd = oneFrameOfData.get(i, j, 2);
  //     xStart = oneFrameOfData.get(i, j, 3);
  //     yStart = oneFrameOfData.get(i, j, 4);
  //     zStart = oneFrameOfData.get(i, j, 5);
  //
  //     // console.log(xEnd);
  //     // console.log(xStart);
  //
  //     line(xStart, yStart, xEnd, yEnd);
  //     // line(xStart, window.innerHeight - yStart, xEnd, window.innerHeight - yEnd, zStart, zEnd);
  //   }
  // }
  // console.log(xStart + " , " + yStart + " , " + zStart + " , " + xEnd + " , " + yEnd + " , " + zEnd);


}
