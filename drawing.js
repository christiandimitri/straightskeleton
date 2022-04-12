const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "18px arial";

function stroke(c, w = 1) {
  ctx.strokeStyle = c;
  ctx.lineWidth = w;
}

function fill(c) {
  if (c === "none") {
    c = "transparent";
  }
  ctx.fillStyle = c;
}

function drawLine(sx, sy, ex, ey) {
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.stroke();
}

function drawPath(path) {
  stroke("rgba(0,0,0,0.5)");
  ctx.beginPath();
  ctx.moveTo(path[0].x, path[0].y);
  for (let i = 1; i < path.length; i++) {
    const vertex = path[i];
    ctx.lineTo(vertex.x, vertex.y);
  }
  ctx.lineTo(path[0].x, path[0].y);
  ctx.stroke();

  fill("black");
  stroke("none");
}

const bisectorDrawDistance = 1000;
function drawBisectors(lav) {
  stroke("green");
  ctx.setLineDash([2, 4]);
  lav.vertices.forEach(vertex => {
    if (vertex.active === false) {
      return;
    }
    drawLine(
      vertex.x,
      vertex.y,
      vertex.x + vertex.bisector.x * bisectorDrawDistance,
      vertex.y + vertex.bisector.y * bisectorDrawDistance
    );
  });
  ctx.setLineDash([]);
}

function drawSkeleton(lav) {
  stroke("blue", 2);
  lav.skeleton.forEach(([a, b]) => {
    drawLine(a.x, a.y, b.x, b.y);
  });
}
