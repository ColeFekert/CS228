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

var controllerOptions;

var moreThanOneHand;

// var predictedClassLabels = nj.zeros(numSamples);


// function draw() {
Leap.loop(controllerOptions, function(frame) {
  clear();

  // numSamples = train0.shape[0];
  // numFeatures = train0.shape[1] - 1;

  // console.log(predictedClassLabels);

  if (!trainingCompleted) {
    Train();
  }

  HandleFrame(frame);

  Test();
});

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
  console.log("Index: " + testingSampleIndex + " | Predicted Gesture: " + result.label);

  testingSampleIndex++;

  // console.log(test.shape[3]);      THIS = 2

  if (testingSampleIndex >= test.shape[3]) {
    testingSampleIndex = 0;
  }
}

function HandleFrame(frame) {
  var interactionBox = frame.interactionBox;

  if (frame.hands.length == 1){
    moreThanOneHand = false;

    var hand = frame.hands[0];

    HandleHand(hand, moreThanOneHand, interactionBox);
  } else if (frame.hands.length > 1) {
    moreThanOneHand = true;

    var hand = frame.hands[0];

    HandleHand(hand, moreThanOneHand, interactionBox);
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

  // framesOfData.set(fingerIndex, boneType, 0, currentSample, xb);
  // framesOfData.set(fingerIndex, boneType, 1, currentSample, yb);
  // framesOfData.set(fingerIndex, boneType, 2, currentSample, zb);
  // framesOfData.set(fingerIndex, boneType, 3, currentSample, xt);
  // framesOfData.set(fingerIndex, boneType, 4, currentSample, yt);
  // framesOfData.set(fingerIndex, boneType, 5, currentSample, zt);


  var canvasPrevX = window.innerWidth * normalizedPrevJoint[0];
  var canvasPrevY = window.innerHeight * (1 - normalizedPrevJoint[1]);

  var canvasNextX = window.innerWidth * normalizedNextJoint[0];
  var canvasNextY = window.innerHeight * (1 - normalizedNextJoint[1]);

  // console.log(framesOfData);

  // console.log("X Range: " + window.innerWidth + " | Y Range: " + window.innerHeight);
  // console.log("CanvasPrevX: " + canvasPrevX + " | CanvasPrevY: " + canvasPrevY);
  // console.log("CanvasNextX: " + canvasNextX + " | CanvasNextY: " + canvasNextY);

  // [xt, yt] = TransformCoordinates(xt, yt);
  // [xb, yb] = TransformCoordinates(xb, yb);


  // framesOfData.set(boneType, fingerIndex, 0, xb);
  // framesOfData.set(boneType, fingerIndex, 1, yb);
  // framesOfData.set(boneType, fingerIndex, 2, zb);
  // framesOfData.set(boneType, fingerIndex, 3, xt);
  // framesOfData.set(boneType, fingerIndex, 4, xt);
  // framesOfData.set(boneType, fingerIndex, 5, xt);

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
