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

// var testingSampleIndex = 0;

var count = 0;

var controllerOptions;

var moreThanOneHand;

var oneFrameOfData = nj.zeros([5, 4, 6]);

var predictionCounter = 0;
var predictionAccuracy = 0;

// var predictedClassLabels = nj.zeros(numSamples);

var programState = 0;


// function draw() {
Leap.loop(controllerOptions, function(frame) {
  clear();

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

  currentLabel = 0;

  // console.log(currentFeatures.toString());

  predictedLabel = knnClassifier.classify(currentFeatures.tolist(), GotResults);
}

function GotResults(err, result) {
  // console.log("Predicted Gesture: " + result.label);
  console.log(result.label);
  predictionCounter++;

  var target = 7;

  predictionAccuracy  = ((predictionCounter - 1) * predictionAccuracy + (result.label == target)) / predictionCounter;

  // console.log("n: " + predictionCounter + " | m: " + predictionAccuracy + " | c: " + target);

  // testingSampleIndex++;

  // console.log(test.shape[3]);     // THIS = 2

  // if (testingSampleIndex >= oneFrameOfData.shape[3]) {
  //   testingSampleIndex = 0;
  // }
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

  // Draws both hands as gray
  if (boneType == 0) {
    strokeWeight(25);
    // stroke(20);
    stroke(207);
  } else if (boneType == 1) {
    strokeWeight(20);
    // stroke(60);
    stroke(158);
  } else if (boneType == 2) {
    strokeWeight(15);
    // stroke(80);
    stroke(115);
  } else {
    strokeWeight(10);
    // stroke(100);
    stroke(67);
  }

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
  } else {
    programState = 2;
  }
}

function HandleState0(frame) {
  TrainKNNIfNotDoneYet();

  DrawImageToHelpUserPutTheirHandOverTheDevice();
}

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

  // test();
}

function HandleState2(frame) {
  HandleFrame(frame);

  // test();
}

function TrainKNNIfNotDoneYet() {
  // if (!trainingCompleted) {
  //   Train();
  // }
}

function DrawImageToHelpUserPutTheirHandOverTheDevice() {
  image(imgOver, 0, 0, window.innerWidth / 2, window.innerHeight / 2);
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
    var item = document.createElement('li');

    item.innerHTML = String(username);

    list.appendChild(item);
  }

  console.log(list.innerHTML);

  return false;
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
