const selectedShape = 0;

const shapes = [
  [
    [
      new Vector(118, 376),
      new Vector(252, 379),
      new Vector(440, 380),
      new Vector(330, 115),
      new Vector(35, 106),
      new Vector(25, 273)
    ]
  ],
  [
    [
      new Vector(272, 139),
      new Vector(222.940207, 206.525013),
      new Vector(143.559793, 180.732753),
      new Vector(143.559793, 97.267247),
      new Vector(222.940207, 71.474987)
    ]
  ],
  [
    [
      new Vector(161, 91),
      new Vector(154.129032, 164.141935),
      new Vector(102.122581, 176.141935),
      new Vector(120.122581, 83.258065),
      new Vector(53, 86.258065),
      new Vector(23, 34),
      new Vector(215, 34),
      new Vector(263, 86.258065),
      new Vector(161, 91)
    ]
  ],
  [
    [
      new Vector(69, 46),
      new Vector(218, 46),
      new Vector(199, 204),
      new Vector(113, 288)
    ]
  ],
  [
    [
      new Vector(107, 59),
      new Vector(129, 122),
      new Vector(96, 122),
      new Vector(74, 59),
      new Vector(36, 59),
      new Vector(36, 25),
      new Vector(154, 25),
      new Vector(154, 59),
      new Vector(107, 59)
    ]
  ],
  [
    [
      new Vector(118, 328),
      new Vector(252, 379),
      new Vector(331, 400),
      new Vector(250, 115),
      new Vector(35, 106),
      new Vector(53, 273)
    ]
  ],

  [
    [
      new Vector(118, 328),
      new Vector(252, 338),
      new Vector(331, 270),
      new Vector(250, 115),
      new Vector(35, 106),
      new Vector(53, 273)
    ]
  ],

  [
    [
      new Vector(80, 50),
      new Vector(44, 120),
      new Vector(300, 105),
      new Vector(270, 33)
    ]
  ],
  [
    [
      new Vector(80, 50),
      new Vector(44, 120),
      new Vector(300, 105),
      new Vector(270, 33)
    ]
  ],

  [[new Vector(80, 50), new Vector(44, 120), new Vector(300, 105)]]
];

const shape = shapes[selectedShape];

const slav = shape.map(path => {
  return new LAV(path);
});

function renderSLAV(slav) {
  ctx.clearRect(0, 0, 500, 500);
  shape.forEach(path => {
    drawPath(path);
  });
  slav.forEach(lav => {
    console.log(lav);
    // drawLAVVertices(lav);
    // drawBisectors(lav);
    // drawQueue(lav);
    drawSkeleton(lav);
  });
}

renderSLAV(slav);

function stepSLAV(slav) {
  return slav
    .map(lav => {
      return stepLAV(lav);
    })
    .filter(r => r !== undefined);
}

document.addEventListener("click", () => {
  const stepResults = stepSLAV(slav);
  renderSLAV(slav);
  if (stepResults === undefined) {
    return;
  }
});
