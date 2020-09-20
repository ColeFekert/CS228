oneFrameOfData = nj.array([[[ 433.82264, 199.91114,   28.4001, 433.82264, 433.82264, 433.82264],
        [ 433.82264, 199.91114,   28.4001, 272.74994, 272.74994, 272.74994],
        [ 272.74994, 345.83922,   10.1863, 162.45743, 162.45743, 162.45743],
        [ 162.45743, 445.74943,  -2.06468,  82.70444,  82.70444,  82.70444]],
       [[ 471.06561, 337.86612,   24.5947, 340.12177, 340.12177, 340.12177],
        [ 340.12177, 495.35617,   -35.242, 252.14416, 252.14416, 252.14416],
        [ 252.14416, 572.59597,  -69.3686, 202.70194, 202.70194, 202.70194],
        [ 202.70194,  532.3361,  -88.7368, 174.99109, 174.99109, 174.99109]],
       [[ 513.84569, 348.31068,   18.8942, 424.21843, 424.21843, 424.21843],
        [ 424.21843, 494.77117,  -41.8105, 386.51886, 386.51886, 386.51886],
        [ 386.51886, 581.92312,   -86.144, 347.86697, 347.86697, 347.86697],
        [ 347.86697, 533.52582,  -111.261, 319.44535, 319.44535, 319.44535]],
       [[ 557.27911, 338.05674,   13.5527, 512.52882, 512.52882, 512.52882],
        [ 512.52882, 462.58957,  -43.7308, 493.28821, 493.28821, 493.28821],
        [ 493.28821, 540.86791,  -85.5557, 459.56694, 459.56694, 459.56694],
        [ 459.56694, 496.28297,  -110.476, 430.04922, 430.04922, 430.04922]],
       [[ 597.05968, 281.53516,   8.56916,  589.1153,  589.1153,  589.1153],
        [  589.1153,  402.3345,  -45.1086, 602.80291, 602.80291, 602.80291],
        [ 602.80291, 377.60672,  -79.3574,  578.1653,  578.1653,  578.1653],
        [  578.1653, 301.99046,    -93.42, 541.71172, 541.71172, 541.71172]]])

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
      xStart = oneFrameOfData.get(i, j, 0);

      console.log(xStart);
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
