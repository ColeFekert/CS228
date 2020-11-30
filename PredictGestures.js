// Cole Fekert 2020
// CS 228

// VARIABLES
// K-Nearest Neighbors Classifier
const knnClassifier = ml5.KNNClassifier();

var trainingCompleted = false;

var numSamples;
var numFeatures;

var features;           // For training

var currentFeatures;    // For testing
var currentLabel;

var predictedLabel;

// var testingSampleIndex = 0;

var count = 0;

var controllerOptions;

var moreThanOneHand;

var oneFrameOfData = nj.zeros([5, 4, 6]);

var predictionCounter = 0;
var predictionAccuracy = 0.5;

// var predictedClassLabels = nj.zeros(numSamples);

var programState = 0;

var digitToShow = 0;

var timeSinceLastDigitChange = new Date();

// Stores the predictionAccuracy of each digit
var accuracyArray = [''];
var predictionCountArray = [''];

var allTriedAtLeastOnce = false;

var increasedDifficulty = false;

var zeroDisplayed = false;

// Interim Video I Variables
var mathGameActive = false;

// var answerCorrect = false;

var firstOperand;
var secondOperand;
var operatorNumeric;

var actualAnswer = -1;
var userAnswer;

var questionStartTime;

var questionStartingPredictionAccuracy;

var questionsCorrectnessArray = [];


// Interim Video II
var username = "";

var loginStart;
var loginEnd;

// FUNCTIONS
Leap.loop(controllerOptions, function(frame) {
  if (username != "") {
    if (predictionCounter % 10 == 0 && predictionCounter > 0) {
      UpdateUserStats();
    }

    // Constantly update the login end time to the current time,
    //   so that when the program terminates, we can refer back to this saved value.
    // loginEnd = new Date();

    clear();

    // line(0, 0, window.innerWidth, 0);
    // line(0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2)


    stroke(0, 0, 0);
    circle(25, 40, 15);

    DetermineState(frame);

    if (programState == 0) {
      HandleState0(frame);
    } else if (programState == 1) {
      HandleState1(frame);
    } else if (programState == 2) {
      HandleState2(frame);
    }

    // numSamples = train0.shape[0];
    // numFeatures = train0.shape[1] - 1;

    // console.log(predictedClassLabels);
  } else {
    console.log("Waiting for user to LogIn...");
  }
});

function Train() {
  // train0Allison.js
  for (var i = 0; i < train0.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train0.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 0);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 0);
    count += 2;
    console.log(count + " Train0 Example(s) Added")
  }

  count = 0;

  // train1Bongard.js
  for (var i = 0; i < train1.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train1.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 1);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 1);
    count += 2;
    console.log(count + " Train1 Example(s) Added")
  }
  // train1Davis.js
  for (var i = 0; i < train1Davis.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train1Davis.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 1);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 1);
    count += 2;
    console.log(count + " Train1 Example(s) Added")
  }
  // train1Li.js
  for (var i = 0; i < train1Li.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train1Li.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 1);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 1);
    count += 2;
    console.log(count + " Train1 Example(s) Added")
  }
  // train1Rice.js
  for (var i = 0; i < train1Rice.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train1Rice.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 1);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 1);
    count += 2;
    console.log(count + " Train1 Example(s) Added")
  }
  // train1Riofrio.js
  for (var i = 0; i < train1Riofrio.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train1Riofrio.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 1);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 1);
    count += 2;
    console.log(count + " Train1 Example(s) Added")
  }
  // train1McLaughlin.js
  for (var i = 0; i < train1McLaughlin.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train1McLaughlin.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 1);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 1);
    count += 2;
    console.log(count + " Train1 Example(s) Added")
  }

  count = 0;

  // train2Banaszewski.js
  for (var i = 0; i < train2.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train2.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 2);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 2);
    count += 2;
    console.log(count + " Train2 Example(s) Added")
  }
  // train2Bongard.js
  for (var i = 0; i < train2Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train2Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 2);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 2);
    count += 2;
    console.log(count + " Train2 Example(s) Added")
  }
  // train2Neff.js
  for (var i = 0; i < train2Neff.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train2Neff.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 2);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 2);
    count += 2;
    console.log(count + " Train2 Example(s) Added")
  }
  // train2Sheboy.js
  for (var i = 0; i < train2Sheboy.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train2Sheboy.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 2);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 2);
    count += 2;
    console.log(count + " Train2 Example(s) Added")
  }
  // train2Rielly.js
  for (var i = 0; i < train2Rielly.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train2Rielly.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 2);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 2);
    count += 2;
    console.log(count + " Train2 Example(s) Added")
  }
  // // train2Jing.js
  // for (var i = 0; i < train2Jing.shape[3]; i++) {
  //   // console.log(train0.pick(null, null, null, i).toString());
  //   features = train2Jing.pick(null, null, null, i);
  //
  //   features = features.reshape(120);
  //
  //   // console.log(features.toString());
  //
  //   knnClassifier.addExample(features.tolist(), 2);
  //   MirrorHand();
  //   knnClassifier.addExample(features.tolist(), 2);
  //   count += 2;
  //   console.log(count + " Train2 Example(s) Added")
  // }


  count = 0;

  // train3Beattie.js
  for (var i = 0; i < train3.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train3.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 3);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 3);
    count += 2;
    console.log(count + " Train3 Example(s) Added")
  }
  // train3Bongard.js
  for (var i = 0; i < train3Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train3Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 3);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 3);
    count += 2;
    console.log(count + " Train3 Example(s) Added")
  }

  count = 0;

  // train4Faucher.js
  for (var i = 0; i < train4.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train4.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 4);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 4);
    count += 2;
    console.log(count + " Train4 Example(s) Added")
  }
  // train4Bongard.js
  for (var i = 0; i < train4Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train4Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 4);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 4);
    count += 2;
    console.log(count + " Train4 Example(s) Added")
  }
  // train4Kiely.js
  for (var i = 0; i < train4Kiely.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train4Kiely.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 4);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 4);
    count += 2;
    console.log(count + " Train4 Example(s) Added")
  }
  // train4Makovsky.js
  for (var i = 0; i < train4Makovsky.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train4Makovsky.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 4);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 4);
    count += 2;
    console.log(count + " Train4 Example(s) Added")
  }

  count = 0;

  // Train5.js
  for (var i = 0; i < train5.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train5.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 5);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 5);
    count += 2;
    console.log(count + " Train5 Example(s) Added")
  }
  // Train5Bongard.js
  for (var i = 0; i < train5Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train5Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 5);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 5);
    count += 2;
    console.log(count + " Train5 Example(s) Added")
  }
  // train5Kiely.js
  for (var i = 0; i < train5Kiely.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train5Kiely.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 5);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 5);
    count += 2;
    console.log(count + " Train5 Example(s) Added")
  }
  // train5Koretsky.js
  for (var i = 0; i < train5Koretsky.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train5Koretsky.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 5);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 5);
    count += 2;
    console.log(count + " Train5 Example(s) Added")
  }
  // train5Manian.js
  for (var i = 0; i < train5Manian.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train5Manian.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 5);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 5);
    count += 2;
    console.log(count + " Train5 Example(s) Added")
  }

  count = 0;

  // Train6.js
  for (var i = 0; i < train6.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train6.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 6);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 6);
    count += 2;
    console.log(count + " Train6 Example(s) Added")
  }
  // Train6Bongard.js
  for (var i = 0; i < train6Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train6Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 6);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 6);
    count += 2;
    console.log(count + " Train6 Example(s) Added")
  }

  count = 0;

  // train7Laquerre.js
  for (var i = 0; i < train7.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train7.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 7);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 7);
    count += 2;
    console.log(count + " Train7 Example(s) Added")
  }
  // // train7Vega.js
  // for (var i = 0; i < train7Vega.shape[3]; i++) {
  //   // console.log(train0.pick(null, null, null, i).toString());
  //   features = train7Vega.pick(null, null, null, i);
  //
  //   features = features.reshape(120);
  //
  //   // console.log(features.toString());
  //
  //   knnClassifier.addExample(features.tolist(), 7);
  //   MirrorHand();
  //   knnClassifier.addExample(features.tolist(), 7);
  //   count += 2;
  //   console.log(count + " Train7 Example(s) Added")
  // }
  // train7Bongard.js
  for (var i = 0; i < train7Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train7Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 7);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 7);
    count += 2;
    console.log(count + " Train7 Example(s) Added")
  }

  count = 0;

  // train8Timsina.js
  for (var i = 0; i < train8.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train8.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 8);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 8);
    count += 2;
    console.log(count + " Train8 Example(s) Added")
  }
  // train8Bongard.js
  for (var i = 0; i < train8Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train8Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 8);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 8);
    count += 2;
    console.log(count + " Train8 Example(s) Added")
  }

  count = 0;

  // train9Croxford.js
  for (var i = 0; i < train9.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train9.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 9);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 9);
    count += 2;
    console.log(count + " Train9 Example(s) Added")
  }
  // train9Bongard.js
  for (var i = 0; i < train9Bongard.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train9Bongard.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 9);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 9);
    count += 2;
    console.log(count + " Train9 Example(s) Added")
  }
  // train9Woolley.js
  for (var i = 0; i < train9Woolley.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train9Woolley.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 9);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 9);
    count += 2;
    console.log(count + " Train9 Example(s) Added")
  }
  // train9Goldman.js
  for (var i = 0; i < train9Goldman.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train9Goldman.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 9);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 9);
    count += 2;
    console.log(count + " Train9 Example(s) Added")
  }
  // train9He.js
  for (var i = 0; i < train9He.shape[3]; i++) {
    // console.log(train0.pick(null, null, null, i).toString());
    features = train9He.pick(null, null, null, i);

    features = features.reshape(120);

    // console.log(features.toString());

    knnClassifier.addExample(features.tolist(), 9);
    MirrorHand();
    knnClassifier.addExample(features.tolist(), 9);
    count += 2;
    console.log(count + " Train9 Example(s) Added")
  }

  count = 0;

  trainingCompleted = true;
}

function Test() {
  CenterXData();
  CenterYData();
  CenterZData();

  currentFeatures = oneFrameOfData.pick(null, null, null, 0);

  currentLabel = digitToShow;

  // console.log(currentFeatures.toString());

  predictedLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result) {
  if (mathGameActive) {
    predictionCounter++;

    console.log(actualAnswer);

    var target = actualAnswer;

    predictionAccuracy  = ((predictionCounter - 1) * predictionAccuracy + (result.label == target)) / predictionCounter;

    console.log(result.label);
    console.log("n: " + predictionCounter + " | m: " + predictionAccuracy + " | c: " + target);
  } else {
    // console.log("Predicted Gesture: " + result.label);
    // console.log(result.label);
    predictionCounter++;

    var target = digitToShow;

    predictionAccuracy  = ((predictionCounter - 1) * predictionAccuracy + (result.label == target)) / predictionCounter;

    if (target == result.label) {
      stroke(0, 255, 0);
      circle(25, 40, 15);
    } else {
      stroke(255, 0, 0);
      circle(25, 40, 15);
    }

    console.log(result.label);
    console.log("n: " + predictionCounter + " | m: " + predictionAccuracy + " | c: " + target);

    // testingSampleIndex++;

    // console.log(test.shape[3]);     // THIS = 2

    // if (testingSampleIndex >= oneFrameOfData.shape[3]) {
      //   testingSampleIndex = 0;
      // }
  }
}

function HandleFrame(frame) {
  var interactionBox = frame.interactionBox;

  if (frame.hands.length == 1) {
    moreThanOneHand = false;

    var hand = frame.hands[0];

    HandleHand(hand, moreThanOneHand, interactionBox);

    // console.log(oneFrameOfData.toString);

    // Test();
  } else if (frame.hands.length > 1) {
    moreThanOneHand = true;

    var hand = frame.hands[0];

    HandleHand(hand, moreThanOneHand, interactionBox);

    // console.log(oneFrameOfData.toString);

    // Test();
  } else {
    moreThanOneHand = false;
  }
}

function HandleHand(hand, moreThanOneHand, interactionBox) {
  var fingers = hand.fingers;

  for (var i = 3; i >= 0; i -= 1) {     // For each bone
    for (var j = 4; j >= 0; j -= 1) {   // For each finger
      // HandleFinger(fingers[i]);
      // console.log("finger: " + j);
      // console.log("bone: " + i + "\n");
      HandleBone(fingers[j].bones[i], fingers[j].bones[i].type, j, moreThanOneHand, interactionBox);
    }
  }
}

function HandleBone(bone, boneType, fingerIndex, moreThanOneHand, interactionBox) {
  var normalizedPrevJoint = interactionBox.normalizePoint(bone.prevJoint, true);
  var normalizedNextJoint = interactionBox.normalizePoint(bone.nextJoint, true);

  // xt = bone.nextJoint[0];
  // yt = bone.nextJoint[1];
  // zt = bone.nextJoint[2];
  //
  // xb = bone.prevJoint[0];
  // yb = bone.prevJoint[1];
  // zb = bone.prevJoint[2];

  xt = normalizedNextJoint[0];
  yt = normalizedNextJoint[1];
  zt = normalizedNextJoint[2];

  xb = normalizedPrevJoint[0];
  yb = normalizedPrevJoint[1];
  zb = normalizedPrevJoint[2];


  // console.log("Normalized Prev Joint: " + normalizedPrevJoint);
  // console.log("Normalized Next Joint: " + normalizedNextJoint);

  oneFrameOfData.set(fingerIndex, boneType, 0, xb);
  oneFrameOfData.set(fingerIndex, boneType, 1, yb);
  oneFrameOfData.set(fingerIndex, boneType, 2, zb);
  oneFrameOfData.set(fingerIndex, boneType, 3, xt);
  oneFrameOfData.set(fingerIndex, boneType, 4, yt);
  oneFrameOfData.set(fingerIndex, boneType, 5, zt);


  var canvasPrevX = (window.innerWidth / 2) * normalizedPrevJoint[0];
  var canvasPrevY = (window.innerHeight / 2) * (1 - normalizedPrevJoint[1]);

  var canvasNextX = (window.innerWidth / 2) * normalizedNextJoint[0];
  var canvasNextY = (window.innerHeight / 2) * (1 - normalizedNextJoint[1]);

  // Scales the the predictionAccuracy between 0 and 255


  // console.log(colorProportion);

  // Changes the color based on how accurate the prediction is
  if (boneType == 0) {
    strokeWeight(25);
    // stroke(20);
    var colorProportion = ((predictionAccuracy - 0) / 1) * 255
    stroke(255 - colorProportion, colorProportion, 0);
  } else if (boneType == 1) {
    strokeWeight(20);
    // stroke(60);
    var colorProportion = ((predictionAccuracy - 0) / 1) * 220
    stroke(220 - colorProportion, colorProportion, 0);
  } else if (boneType == 2) {
    strokeWeight(15);
    // stroke(80);
    var colorProportion = ((predictionAccuracy - 0) / 1) * 205
    stroke(205 - colorProportion, colorProportion, 0);
  } else {
    strokeWeight(10);
    // stroke(100);
    var colorProportion = ((predictionAccuracy - 0) / 1) * 180
    stroke(180 - colorProportion, colorProportion, 0);
  }

  // Draws both hands as gray
  // if (boneType == 0) {
  //   strokeWeight(25);
  //   // stroke(20);
  //   stroke(207);
  // } else if (boneType == 1) {
  //   strokeWeight(20);
  //   // stroke(60);
  //   stroke(158);
  // } else if (boneType == 2) {
  //   strokeWeight(15);
  //   // stroke(80);
  //   stroke(115);
  // } else {
  //   strokeWeight(10);
  //   // stroke(100);
  //   stroke(67);
  // }

  // Changes the color of the hands from green to red when more than one are present
  // if (moreThanOneHand) {
  //   if (boneType == 0) {
  //     strokeWeight(8);
  //     // stroke(20);
  //     stroke(255,0,0);
  //   } else if (boneType == 1) {
  //     strokeWeight(6);
  //     // stroke(60);
  //     stroke(207,0,0);
  //   } else if (boneType == 2) {
  //     strokeWeight(4);
  //     // stroke(80);
  //     stroke(158,0,0);
  //   } else {
  //     strokeWeight(2);
  //     // stroke(100);
  //     stroke(115,0,0);
  //   }
  // } else {
  //   if (boneType == 0) {
  //     strokeWeight(8);
  //     // stroke(20);
  //     stroke(0,255,0);
  //   } else if (boneType == 1) {
  //     strokeWeight(6);
  //     // stroke(60);
  //     stroke(0,207,0);
  //   } else if (boneType == 2) {
  //     strokeWeight(4);
  //     // stroke(80);
  //     stroke(0,158,0);
  //   } else {
  //     strokeWeight(2);
  //     // stroke(100);
  //     stroke(0,115,0);
  //   }
  // }

  line(canvasNextX, canvasNextY, canvasPrevX, canvasPrevY, zt, zb);

  // line(xt, window.innerHeight - yt, xb, window.innerHeight - yb, zt, zb);
}

function CenterXData() {
  var xValues = oneFrameOfData.slice([],[],[0,6,3]);

  var currentMean = xValues.mean();

  var horizontalShift = (0.5 - currentMean);

  // console.log("before: " + currentMean);

  for (var i = 0; i < 5; i++) {     // rows
    for (var j = 0; j < 4; j++) {   // columns
      // Top X
      var currentX = oneFrameOfData.get(i, j, 0);

      var shiftedX = currentX + horizontalShift;

      oneFrameOfData.set(i, j, 0, shiftedX);

      // Bottom X
      currentX = oneFrameOfData.get(i, j, 3);

      shiftedX = currentX + horizontalShift;

      oneFrameOfData.set(i, j, 3, shiftedX);
    }
  }

  xValues = oneFrameOfData.slice([],[],[0,6,3]);

  currentMean = xValues.mean();

  horizontalShift = (0.5 - currentMean);

  // console.log("after: " + currentMean);
}

function CenterYData() {
  var yValues = oneFrameOfData.slice([],[],[1,6,3]);

  var currentMean = yValues.mean();

  var horizontalShift = (0.5 - currentMean);

  // console.log("before: " + currentMean);

  for (var i = 0; i < 5; i++) {     // rows
    for (var j = 0; j < 4; j++) {   // columns
      // Top Y
      var currentY = oneFrameOfData.get(i, j, 1);

      var shiftedY = currentY + horizontalShift;

      oneFrameOfData.set(i, j, 1, shiftedY);

      // Bottom Y
      currentY = oneFrameOfData.get(i, j, 4);

      shiftedY = currentY + horizontalShift;

      oneFrameOfData.set(i, j, 4, shiftedY);
    }
  }

  yValues = oneFrameOfData.slice([],[],[1,6,3]);

  currentMean = yValues.mean();

  horizontalShift = (0.5 - currentMean);

  // console.log("after: " + currentMean);
}

function CenterZData() {
  var zValues = oneFrameOfData.slice([],[],[2,6,3]);

  var currentMean = zValues.mean();

  var horizontalShift = (0.5 - currentMean);

  // console.log("before: " + currentMean);

  for (var i = 0; i < 5; i++) {     // rows
    for (var j = 0; j < 4; j++) {   // columns
      // Top Z
      var currentZ = oneFrameOfData.get(i, j, 2);

      var shiftedZ = currentZ + horizontalShift;

      oneFrameOfData.set(i, j, 2, shiftedZ);

      // Bottom Z
      currentZ = oneFrameOfData.get(i, j, 5);

      shiftedZ = currentZ + horizontalShift;

      oneFrameOfData.set(i, j, 5, shiftedZ);
    }
  }

  yValues = oneFrameOfData.slice([],[],[2,6,3]);

  currentMean = zValues.mean();

  horizontalShift = (0.5 - currentMean);

  // console.log("after: " + currentMean);
}

function MirrorHand() {
  for (var i = 0; i < 5; i++) {     // rows
    for (var j = 0; j < 4; j++) {   // columns
      // Top X
      var currentX = oneFrameOfData.get(i, j, 0);

      var shiftedX = 1 - currentX;

      oneFrameOfData.set(i, j, 0, shiftedX);

      // Bottom X
      currentX = oneFrameOfData.get(i, j, 3);

      shiftedX = 1 - currentX;

      oneFrameOfData.set(i, j, 3, shiftedX);
    }
  }
}

function DetermineState(frame) {
  if (frame.hands.length == 0) {
    programState = 0;
  } else if (HandIsUncentered()) {
    programState = 1;
  } else if (!HandIsUncentered()) {
    programState = 2;
  }
}

// Hand is not over device
function HandleState0(frame) {
  TrainKNNIfNotDoneYet();

  DrawImageToHelpUserPutTheirHandOverTheDevice();
}

// Hand is in bad spot
function HandleState1(frame) {
  HandleFrame(frame);

  if (HandIsTooFarToTheLeft()) {
    DrawArrowRight();
  }
  if (HandIsTooFarToTheRight()) {
    DrawArrowLeft();
  }
  if (HandIsTooFarUp()) {
    DrawArrowDown();
  }
  if (HandIsTooFarDown()) {
    DrawArrowUp();
  }
  if (HandIsTooFarAway()) {
    DrawArrowTowards();
  }
  if (HandIsTooFarTowards()) {
    DrawArrowAway();
  }

  // Test();
}

function HandleState2(frame) {
  image(imgGreenBorder, 0, 0, window.innerWidth / 2, window.innerHeight / 2);
  if (mathGameActive) {
    if (actualAnswer == -1) {
      // First question needs to be asked
      AskAnotherMathProblem();
    }

    DetermineWhetherToAskAnotherQuestion();

    DrawLowerRightPanel();

    HandleFrame(frame);

    Test();

  } else {
    DetermineWhetherToSwitchDigits();

    DrawLowerRightPanel();

    HandleFrame(frame);

    Test();
  }
}

function TrainKNNIfNotDoneYet() {
  if (!trainingCompleted) {
    Train();
  }
}

function DrawImageToHelpUserPutTheirHandOverTheDevice() {
  image(imgOver, 0, 0, window.innerWidth / 2, window.innerHeight / 2);
}

function DrawLowerRightPanel() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  console.log("w: " + width + " | h: " + height);
  console.log((width / 2) + (width / 4));
  console.log(width / 2);

  // SCAFOLDING 2
  // If the increasedDifficulty flag is raised, then the image just displays the number
  if (!mathGameActive) {
    if (!increasedDifficulty) {
      if (digitToShow == 0) {
        image(imgZero, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 1) {
        image(imgOne, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 2) {
        image(imgTwo, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 3) {
        image(imgThree, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 4) {
        image(imgFour, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 5) {
        image(imgFive, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 6) {
        image(imgSix, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 7) {
        image(imgSeven, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 8) {
        image(imgEight, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 9) {
        image(imgNine, width / 2, height / 2, width / 2, height / 2);
      }
    } else {
      if (digitToShow == 0) {
        image(img0, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 1) {
        image(img1, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 2) {
        image(img2, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 3) {
        image(img3, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 4) {
        image(img4, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 5) {
        image(img5, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 6) {
        image(img6, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 7) {
        image(img7, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 8) {
        image(img8, width / 2, height / 2, width / 2, height / 2);
      } else if (digitToShow == 9) {
        image(img9, width / 2, height / 2, width / 2, height / 2);
      }
    }
  } else {
    if (operatorNumeric == 0) {
      image(imgAdditionOperator, (width / 2) + (width / 4), (height / 2) + (height / 4), 75, 75);
    } else if (operatorNumeric == 1) {
      image(imgSubtractionOperator, (width / 2) + (width / 4), (height / 2) + (height / 4), 75, 75);
    }



    if (firstOperand == 0) {
      image(img0, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 1) {
      image(img1, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 2) {
      image(img2, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 3) {
      image(img3, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 4) {
      image(img4, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 5) {
      image(img5, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 6) {
      image(img6, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 7) {
      image(img7, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 8) {
      image(img8, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    } else if (firstOperand == 9) {
      image(img9, ((width / 2) + (width / 4)) - 75, (height / 2) + (height / 4), 75, 75);
    }

    if (secondOperand == 0) {
      image(img0, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 1) {
      image(img1, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 2) {
      image(img2, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 3) {
      image(img3, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 4) {
      image(img4, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 5) {
      image(img5, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 6) {
      image(img6, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 7) {
      image(img7, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 8) {
      image(img8, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    } else if (secondOperand == 9) {
      image(img9, ((width / 2) + (width / 4)) + 75, (height / 2) + (height / 4), 75, 75);
    }
  }

}

function FlashGreen() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  image(imgGreenBorder, width / 2, height / 2, width / 2, height / 2);
}

function FlashRed() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  image(imgRedBorder, width / 2, height / 2, width / 2, height / 2);
}

function DetermineWhetherToAskAnotherQuestion() {
  if (AnswerCorrect()) {
    FlashGreen();
    questionsCorrectnessArray.push(1);
    predictionAccuracy = 0.5;
    predictionCounter = 0;
    AskAnotherMathProblem();
  } else if (QuestionTimeOut()) {
    FlashRed();
    predictionAccuracy = 0.5;
    predictionCounter = 0;
    questionsCorrectnessArray.push(0);
    AskAnotherMathProblem();
  }
}

function DetermineWhetherToSwitchDigits() {
  if (TimeToSwitchDigits()) {
    SwitchDigits();
  }
}

// Returns true if the user takes longer than 15 seconds to answer a question
function QuestionTimeOut() {
  var now = new Date();

  console.log("Now: " + now.getTime() + "| QStart: " + questionStartTime.getTime());

  var cutOffTimeInSeconds = 10;

  if (now.getTime() - questionStartTime.getTime() > cutOffTimeInSeconds * 1000) {
    return true;
  } else {
    return false;
  }
}

function AnswerCorrect() {
  if (predictionAccuracy > 0.55) {
    return true;
  } else {
    return false;
  }
}

function AskAnotherMathProblem() {
  questionStartTime = new Date();
  firstOperand = (questionStartTime.getTime() % 1273) % 10;
  secondOperand = (questionStartTime.getTime() % 2122) % 10;
  operatorNumeric = questionStartTime.getTime() % 2;

  if (operatorNumeric == 0) {
    // ADDITION
    actualAnswer = firstOperand + secondOperand;

    console.log(firstOperand + " + " + secondOperand + " = " + actualAnswer);

    if (actualAnswer > 9) {
      if (firstOperand > secondOperand) {
        firstOperand -= (actualAnswer - 9);
      } else {
        secondOperand -= (actualAnswer - 9);
      }
    }
    actualAnswer = firstOperand + secondOperand;

    console.log(firstOperand + " + " + secondOperand + " = " + actualAnswer);
  } else if (operatorNumeric == 1) {
    // SUBTRACTION
    actualAnswer = firstOperand - secondOperand;

    console.log(firstOperand + " - " + secondOperand + " = " + actualAnswer);

    if (actualAnswer < 0) {
      if (firstOperand < secondOperand) {
        firstOperand += Math.abs(actualAnswer);
        if (firstOperand >= 10) {
          firstOperand -= 9;
          secondOperand -= (firstOperand - 9);
        }
      } else {
        secondOperand += Math.abs(actualAnswer);
      }
    }
    actualAnswer = firstOperand - secondOperand;

    console.log(firstOperand + " - " + secondOperand + " = " + actualAnswer);
  }

  DrawLowerRightPanel();
}

function SwitchDigits() {
  timeSinceLastDigitChange = Date.now();

  increasedDifficulty = false;

  predictionCountArray[digitToShow] = predictionCounter;

  accuracyArray[digitToShow] = predictionAccuracy;

  console.log(accuracyArray);
  console.log(predictionCountArray);

  // SCAFOLDING 1:
  // Chooses the poorest performing digit to test again after testing all digits

  // Make sure every digit has been tested at least once
  if (!allTriedAtLeastOnce) {
    if (digitToShow == 0 && zeroDisplayed) {
      digitToShow = 1;
    } else if (digitToShow == 0) {
      zeroDisplayed = true;
    } else if (digitToShow == 1) {
      digitToShow = 2;
    } else if (digitToShow == 2) {
      digitToShow = 3;
    } else if (digitToShow == 3) {
      digitToShow = 4;
    } else if (digitToShow == 4) {
      digitToShow = 5;
    } else if (digitToShow == 5) {
      digitToShow = 6;
    } else if (digitToShow == 6) {
      digitToShow = 7;
    } else if (digitToShow == 7) {
      digitToShow = 8;
    } else if (digitToShow == 8) {
      digitToShow = 9;
    } else if (digitToShow == 9) {
      allTriedAtLeastOnce = true;
    }
    predictionAccuracy = 0.5;
    predictionCounter = 0;
  }
  if (allTriedAtLeastOnce) {
    // var leastValue = 1.0;

    // for (var i = 0; i < accuracyArray.length; i++) {
    //   // console.log(accuracyArray[i]);
    //   if (accuracyArray[i] < leastValue) {
    //     leastValue = accuracyArray[i];
    //   }
    // }

    var leastValue = Math.min(...accuracyArray);

    digitToShow = accuracyArray.indexOf(leastValue);

    if (leastValue > 0.65) {
      increasedDifficulty = true;
    }

    predictionAccuracy = accuracyArray[digitToShow];
    predictionCounter = predictionCountArray[digitToShow];

    if (predictionAccuracy < 0.5) {
      // If a user incorrectly signs a digit for too long,
      // its possible that it will say it equals -infinity
      // So this just handles that so its possible to improve.
      predictionAccuracy = 0.5;
    }
  }
}

function TimeToSwitchDigits() {
  var currentTime = new Date();

  var elapsedTimeInMilliseconds = currentTime - timeSinceLastDigitChange;

  var elapsedTimeinSeconds = elapsedTimeInMilliseconds / 1000;

  // SCAFOLDING 3
  // The better you are signing a digit, the less time you have to sign it
  if (predictionAccuracy >= 0.65) {
    if (elapsedTimeinSeconds > 3.0) {
      return true;
    } else {
      return false;
    }
  } else if (predictionAccuracy < 0.65) {
    if (elapsedTimeinSeconds > 5.0) {
      return true;
    } else {
      return false;
    }
  } else if (predictionAccuracy < 0.6) {
    if (elapsedTimeinSeconds > 6.25) {
      return true;
    } else {
      return false;
    }
  } else if (predictionAccuracy < 0.55) {
    if (elapsedTimeinSeconds > 7.5) {
      return true;
    } else {
      return false;
    }
  } else if (predictionAccuracy <= 0.5) {
    if (elapsedTimeinSeconds > 8.75) {
      return true;
    } else {
      return false;
    }
  }

}

// Hand position handling functions

function HandIsUncentered() {
  if (HandIsTooFarToTheLeft() || HandIsTooFarToTheRight() ||
      HandIsTooFarUp() || HandIsTooFarDown() || HandIsTooFarAway()
      || HandIsTooFarTowards()) {
    return true;
  } else {
    return false;
  }
}

function HandIsTooFarToTheLeft() {
  var xValues = oneFrameOfData.slice([],[],[0,6,3]);

  var mean = xValues.mean();

  if (mean < 0.25) {
    return true;
  } else {
    return false;
  }
}

function HandIsTooFarToTheRight() {
  var xValues = oneFrameOfData.slice([],[],[0,6,3]);

  var mean = xValues.mean();

  if (mean > 0.75) {
    return true;
  } else {
    return false;
  }
}

function HandIsTooFarUp() {
  var yValues = oneFrameOfData.slice([],[],[1,6,3]);

  var mean = yValues.mean();

  if (mean > 0.75) {
    return true;
  } else {
    return false;

  }
}

function HandIsTooFarDown() {
  var yValues = oneFrameOfData.slice([],[],[1,6,3]);

  var mean = yValues.mean();

  if (mean < 0.25) {
    return true;
  } else {
    return false;
  }
}

function HandIsTooFarAway() {
  var zValues = oneFrameOfData.slice([],[],[2,6,3]);

  var mean = zValues.mean();

  if (mean < 0.25) {
    return true;
  } else {
    return false;
  }
}

function HandIsTooFarTowards() {
  var zValues = oneFrameOfData.slice([],[],[2,6,3]);

  var mean = zValues.mean();

  if (mean > 0.75) {
    return true;
  } else {
    return false;
  }
}

// Image drawing funcitons

function DrawArrowRight() {
  image(imgRight, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerWidth / 2);
}

function DrawArrowLeft() {
  image(imgLeft, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerWidth / 2);
}

function DrawArrowUp() {
  image(imgUp, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerWidth / 2);
}

function DrawArrowDown() {
  image(imgDown, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerWidth / 2);
}

function DrawArrowAway() {
  image(imgAway, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerWidth / 2);
}

function DrawArrowTowards() {
  image(imgTowards, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerWidth / 2);
}

// Login function
function SignIn() {
  // console.log("[SignIn Function Called]");

  username = document.getElementById('username').value;

  // console.log("username: " + username);

  var list = document.getElementById('users');

  if (IsNewUser(username, list)) {
    CreateNewUser(username, list);

    loginStart = new Date()

    CreateSignInCount(username, list);

    for (var i = 0; i < 10; i += 1) {
      CreateGestureAttempts(username, list, i);

      CreateGestureAccuracy(username, list, i);
    }

  } else {
    ID = String(username) + "_signins";

    listItem = document.getElementById( ID );

    listItem.innerHTML = parseInt(listItem.innerHTML) + 1;

    ID = String(username) + "_" + String(digitToShow) + "_attempts";

    listItem = document.getElementById( ID );

    listItem.innerHTML = predictionCounter;

    ID = String(username) + "_" + String(digitToShow) + "_accuracy";

    listItem = document.getElementById( ID );

    listItem.innerHTML = predictionAccuracy;

    console.log(username)
  }

  console.log(list.innerHTML);

  return false;
}

function UpdateUserStats() {
  var list = document.getElementById('users');

  ID = String(username) + "_" + String(digitToShow) + "_attempts";

  listItem = document.getElementById( ID );

  // Log the listItem and check that the name is matching

  console.log(predictionCounter);

  listItem.innerHTML = predictionCounter;

  ID = String(username) + "_" + String(digitToShow) + "_accuracy";

  listItem = document.getElementById( ID );

  console.log(predictionAccuracy);

  listItem.innerHTML = predictionAccuracy;

  console.log(list);
}

function IsNewUser(username, list) {
  var users = list.children;

  usernameFound = false;

  for (var i = 0; i < users.length; i++) {
    if (username == users[i].innerHTML) {
      usernameFound = true;
    }
  }

  return usernameFound == false;
}

function CreateNewUser(username, list) {
  var item = document.createElement('li');

  item.id = String(username) + "_name";

  item.innerHTML = String(username);

  list.appendChild(item);
}

function CreateSignInCount(username, list) {
  var itemSignInCount = document.createElement('li');

  itemSignInCount.id = String(username) + "_signins";

  itemSignInCount.innerHTML = 1;

  list.appendChild(itemSignInCount);
}

function CreateGestureAttempts(username, list, digit) {
  var itemDigitAttempts = document.createElement('li');

  itemDigitAttempts.id = String(username) + "_" + String(digit) + "_attempts";

  itemDigitAttempts.innerHTML = predictionCounter;

  list.appendChild(itemDigitAttempts);


}

function CreateGestureAccuracy(username, list, digit) {
  var itemDigitAccuracy = document.createElement('li');

  itemDigitAccuracy.id = String(username) + "_" + String(digit) + "_accuracy";

  itemDigitAccuracy.innerHTML = predictionAccuracy;

  list.appendChild(itemDigitAccuracy);
}
