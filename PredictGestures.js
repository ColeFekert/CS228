// Cole Fekert 2020
// CS 228

// K-Nearest Neighbors Classifier
const knnClassifier = ml5.KNNClassifier();

var trainingCompleted = false;

var numSamples;
var numFeatures;


var features;           // For training

var currentFeatures;    // For testing
var currentLabel;

var predictedLabel;

var testingSampleIndex = 0;

var count = 0;

// var predictedClassLabels = nj.zeros(numSamples);


function draw() {
  clear();

  // numSamples = train0.shape[0];
  // numFeatures = train0.shape[1] - 1;

  // console.log(predictedClassLabels);

  if (!trainingCompleted) {
    Train();
  }

  Test();
}

function DrawCircles() {

}

function Train() {
  // Train0.js
  for (var i = 0; i < train5.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train5.pick(null, null, null, i);

    features = features.reshape(120);

    console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 5);
    count++;
    console.log(count + " Example(s) Added")
  }

  // Train1.js
  for (var i = 0; i < train6.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train6.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 6);
    count++;
    console.log(count + " Example(s) Added")
  }


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

  // console.log(test.shape[3]);      THIS = 2

  if (testingSampleIndex >= test.shape[3]) {
    testingSampleIndex = 0;
  }
}
