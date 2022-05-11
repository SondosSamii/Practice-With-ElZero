let myCanvas = document.createElement("canvas");

myCanvas.id = "canvas";

myCanvas.width = 600;
myCanvas.height = 300;
myCanvas.style.border = "1px solid pink";
myCanvas.style.display = "block";
myCanvas.style.margin = "20px auto 0";

document.body.appendChild(myCanvas);

let canvas = document.getElementById("canvas"),
  width = canvas.width,
  height = canvas.height,
  context = canvas.getContext("2d");

// Second Canvas
context.fillStyle = "#ccc";

context.fillRect(0, 0, width, height);

context.strokeStyle = "teal";

// Top Left Line
context.moveTo(10, 10);
context.lineTo(width / 2 - 10, height / 2 - 10);
context.lineTo(width / 2 + 10, height / 2 - 10);

// Top Right Line
context.moveTo(width - 10, 10);
context.lineTo(width / 2 + 10, height / 2 - 10);
context.lineTo(width / 2 + 10, height / 2 + 10);

// Bottom Left Line
context.moveTo(10, height - 10);
context.lineTo(width / 2 - 10, height / 2 + 10);
context.lineTo(width / 2 - 10, height / 2 - 10);

// Bottom Right Line
context.moveTo(width - 10, height - 10);
context.lineTo(width / 2 + 10, height / 2 + 10);
context.lineTo(width / 2 - 10, height / 2 + 10);

context.stroke();
