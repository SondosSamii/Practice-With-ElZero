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

// // First Canvas
// context.fillStyle = "teal";
// context.fillRect(30, 20, 100, 50);

// context.strokeStyle = "#fff";
// context.strokeRect(35, 25, 90, 40);

// context.fillRect(170, 20, 100, 50);
// // context.clearRect(170, 20, 100, 50);

// // context.fillRect(100, 90, 100, 50);

// context.strokeStyle = "teal";
// context.strokeRect(100, 90, 100, 50);

// // context.clearRect(100, 100, 100, 100);

// /////////////////////////////////////////////////////////////

// // Second Canvas
// context.fillStyle = "#ccc";

// context.fillRect(0, 0, width, height);

// context.strokeStyle = "teal";

// // Top Left Line
// context.moveTo(10, 10);
// context.lineTo(width / 2 - 10, height / 2 - 10);
// context.lineTo(width / 2 + 10, height / 2 - 10);

// // Top Right Line
// context.moveTo(width - 10, 10);
// context.lineTo(width / 2 + 10, height / 2 - 10);
// context.lineTo(width / 2 + 10, height / 2 + 10);

// // Bottom Left Line
// context.moveTo(10, height - 10);
// context.lineTo(width / 2 - 10, height / 2 + 10);
// context.lineTo(width / 2 - 10, height / 2 - 10);

// // Bottom Right Line
// context.moveTo(width - 10, height - 10);
// context.lineTo(width / 2 + 10, height / 2 + 10);
// context.lineTo(width / 2 - 10, height / 2 + 10);

// context.stroke();

// /////////////////////////////////////////////////////////////

// Third Canvas
context.font = "70px cursive";

context.fillStyle = "teal";

context.fillText("S", 10, 55);

context.strokeStyle = "#77c";

context.strokeText("o", 40, 75);

context.strokeText("n", 60, 95);

context.strokeText("d", 90, 115);

context.strokeText("o", 120, 135);

context.fillStyle = "teal";

context.fillText("S", 140, 155);
