oneFrameOfData = nj.array([[[ 145.51548,  53.33692,   47.7147, 145.51548, 145.51548, 145.51548],
        [ 145.51548,  53.33692,   47.7147,  97.08908,  97.08908,  97.08908],
        [  97.08908, 182.15622,   27.8511,  62.98798,  62.98798,  62.98798],
        [  62.98798, 278.51859,   17.2803,  38.89209,  38.89209,  38.89209]],
       [[ 154.07382,  267.1295,    41.881, 100.78617, 100.78617, 100.78617],
        [ 100.78617,  514.6939,  -7.63295,  65.46965,  65.46965,  65.46965],
        [  65.46965, 531.84673,  -36.2276,  47.79005,  47.79005,  47.79005],
        [  47.79005, 428.67266,  -51.0059,  38.26291,  38.26291,  38.26291]],
       [[ 163.72109, 285.59723,    33.417,  121.1907,  121.1907,  121.1907],
        [  121.1907, 517.75867,  -19.7758,  94.64726,  94.64726,  94.64726],
        [  94.64726, 542.06923,  -61.4672,  77.30225,  77.30225,  77.30225],
        [  77.30225, 408.44516,  -80.9268,  67.32277,  67.32277,  67.32277]],
       [[ 173.68217, 272.22098,   25.1981, 144.17649, 144.17649, 144.17649],
        [ 144.17649, 471.64868,  -27.7295, 118.66296, 118.66296, 118.66296],
        [ 118.66296, 514.09083,  -65.7143,  100.0693,  100.0693,  100.0693],
        [  100.0693, 406.40857,  -84.8093,  88.35226,  88.35226,  88.35226]],
       [[ 182.84763, 187.60361,   17.4356, 164.24625, 164.24625, 164.24625],
        [ 164.24625, 381.93983,  -34.4441, 154.14485, 154.14485, 154.14485],
        [ 154.14485, 356.46267,  -68.4994, 143.37722, 143.37722, 143.37722],
        [ 143.37722, 262.19621,  -82.5114,   132.264,   132.264,   132.264]]]);

// Start and end variables for the tensor
var xStart = 0;
var yStart = 0;
var zStart = 0;

var xEnd = 0;
var yEnd = 0;
var zEnd = 0;

function draw() {
  clear();

  for (i = 0; i <= 4; i++) {
    for (j = 0; j <= 3; j++) {
      xStart = oneFrameOfData.get(i, j, 0);
      yStart = oneFrameOfData.get(i, j, 1);
      zStart = oneFrameOfData.get(i, j, 2);
      xEnd = oneFrameOfData.get(i, j, 3);
      yEnd = oneFrameOfData.get(i, j, 4);
      zEnd = oneFrameOfData.get(i, j, 5);
    }
  }
  console.log(xStart + " , " + yStart + " , " + zStart + " , " + xEnd + " , " + yEnd + " , " + zEnd);
}
