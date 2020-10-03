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

var anotherFrameOfData = nj.array([[[ 165.86255, 487.95573,   75.4133, 165.86255, 487.95573,   75.4133],
        [ 165.86255, 487.95573,   75.4133, 120.61346, 524.56189,   67.6358],
        [ 120.61346, 524.56189,   67.6358,  90.10052, 548.39233,   59.9091],
        [  90.10052, 548.39233,   59.9091,  68.70685, 567.22644,   60.6705]],
       [[ 168.30176, 577.14933,   70.3597, 119.25678, 634.89589,   20.9731],
        [ 119.25678, 634.89589,   20.9731,  88.83912, 629.02743,  -7.04671],
        [  88.83912, 629.02743,  -7.04671,  72.86158, 606.89086,  -23.1581],
        [  72.86158, 606.89086,  -23.1581,   62.4812, 581.76192,  -34.4111]],
       [[ 175.90858, 593.07634,   62.0806, 136.09452, 654.11373,   9.10537],
        [ 136.09452, 654.11373,   9.10537, 111.38532, 653.40828,  -31.2041],
        [ 111.38532, 653.40828,  -31.2041,  97.04331, 629.26387,  -54.3242],
        [  97.04331, 629.26387,  -54.3242,   87.9692, 602.13097,   -68.814]],
       [[ 184.46601, 597.08813,   53.9508, 156.10655, 656.12932,   1.30337],
        [ 156.10655, 656.12932,   1.30337, 132.18606, 645.96999,  -35.2326],
        [ 132.18606, 645.96999,  -35.2326, 117.31197, 629.91894,  -57.5301],
        [ 117.31197, 629.91894,  -57.5301, 107.31145, 614.39892,  -72.3173]],
       [[ 193.91589, 573.22668,   46.0444, 174.65532, 639.00071,  -5.43355],
        [ 174.65532, 639.00071,  -5.43355, 163.91112,  638.5317,  -38.8732],
        [ 163.91112,  638.5317,  -38.8732, 157.47865, 631.88026,  -57.1015],
        [ 157.47865, 631.88026,  -57.1015, 151.52256, 621.91861,  -72.9105]]]);

var yetAnotherFrameOfData = nj.array([[[ 0.62762, 0.25858, 0.71935, 0.62762, 0.25858, 0.71935],
        [ 0.62762, 0.25858, 0.71935,  0.4134, 0.27889, 0.62929],
        [  0.4134, 0.27889, 0.62929, 0.27848, 0.29551, 0.52113],
        [ 0.27848, 0.29551, 0.52113, 0.17724, 0.30471, 0.48387]],
       [[ 0.63364, 0.36406,  0.7206, 0.46608, 0.46139, 0.29942],
        [ 0.46608, 0.46139, 0.29942, 0.34964, 0.52685, 0.08097],
        [ 0.34964, 0.52685, 0.08097,  0.2895, 0.53932,       0],
        [  0.2895, 0.53932,       0, 0.25222, 0.53344,       0]],
       [[ 0.67661, 0.39144, 0.68813, 0.55508,  0.4981, 0.26521],
        [ 0.55508,  0.4981, 0.26521,   0.478, 0.59568,       0],
        [   0.478, 0.59568,       0, 0.43322, 0.62529,       0],
        [ 0.43322, 0.62529,       0, 0.40528, 0.62862,       0]],
       [[ 0.72523, 0.40554,  0.6549, 0.65554, 0.51259, 0.25962],
        [ 0.65554, 0.51259, 0.25962,  0.6039, 0.60945,       0],
        [  0.6039, 0.60945,       0, 0.57037, 0.64611,       0],
        [ 0.57037, 0.64611,       0, 0.54763,  0.6569,       0]],
       [[  0.7812, 0.38834, 0.61604, 0.75047, 0.50421, 0.25149],
        [ 0.75047, 0.50421, 0.25149, 0.79633, 0.58534, 0.04914],
        [ 0.79633, 0.58534, 0.04914, 0.81892, 0.61857,       0],
        [ 0.81892, 0.61857,       0, 0.83635, 0.63855,       0]]]);

// Start and end variables for the tensor
var xStart = 0;
var yStart = 0;
var zStart = 0;

var xEnd = 0;
var yEnd = 0;
var zEnd = 0;

var frameIndex = 0;
var flipFlop = 0;

function draw() {
  clear();

  if (flipFlop == 0) {
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
  } else {
    for (var i = 0; i < yetAnotherFrameOfData.shape[0]; i++) {
      for (var j = 0; j < yetAnotherFrameOfData.shape[1]; j++) {
        xStart = yetAnotherFrameOfData.get(i, j, 3);
        yStart = yetAnotherFrameOfData.get(i, j, 4);
        zStart = yetAnotherFrameOfData.get(i, j, 5);
        xEnd = yetAnotherFrameOfData.get(i, j, 0);
        yEnd = yetAnotherFrameOfData.get(i, j, 1);
        zEnd = yetAnotherFrameOfData.get(i, j, 2);

        // console.log(xStart, yStart, zStart, xEnd, yEnd, zEnd);
        // line(xStart, yEnd, xEnd, yStart, zStart, zEnd);
        var canvasPrevX = window.innerWidth * xEnd;
        var canvasPrevY = window.innerHeight * (1 - yEnd);

        var canvasNextX = window.innerWidth * xStart;
        var canvasNextY = window.innerHeight * (1 - yStart);

        line(canvasNextX, canvasNextY, canvasPrevX, canvasPrevY, zStart, zEnd);

        // line(xStart, window.innerHeight - yStart, xEnd, window.innerHeight - yEnd);
      }
    }
  }


  frameIndex++;

  if (frameIndex >= 100) {
    frameIndex = 0;
    if (flipFlop == 1) {
      flipFlop = 0;
    } else {
      flipFlop = 1;
    }
  }
}
