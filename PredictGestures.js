// Cole Fekert 2020
// CS 228

// K-Nearest Neighbors Classifier
const knnClassifier = ml5.KNNClassifier();

var trainingCompleted = false;

var numSamples;
var numFeatures;

var currentFeatures;
var currentLabel;

var predictedLabel;

var testingSampleIndex = 0;

// var predictedClassLabels = nj.zeros(numSamples);


function draw() {
  clear();

  numSamples = train0.shape[0];
  numFeatures = train0.shape[1] - 1;

  // console.log(predictedClassLabels);

  if (!trainingCompleted) {
    Train();
  }

  Test();
}

function DrawCircles() {

}

function Train() {
  // console.log("train0 :" + train0);
  // console.log("test :" + test);

  for (var i = 0; i < train0.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());

    var features = train0.pick(null, null, null, i);

    features = features.reshape(120);

    console.log(features.toString());
  }

  knnClassifier.addExample(features, 0);

  // console.log("shape[0] :" + train0.shape[0]);
  // console.log("shape[1] :" + train0.shape[1]);
  // console.log("shape[2] :" + train0.shape[2]);
  // console.log("shape[3] :" + train0.shape[3]);

  trainingCompleted = true;
}

function Test() {
  currentFeatures = test.pick(null, null, null, testingSampleIndex);

  currentLabel = 0;

  console.log(currentFeatures.toString());

  predictedLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result) {
  console.log(testingSampleIndex + " : " + result.label);

  testingSampleIndex++;


}
