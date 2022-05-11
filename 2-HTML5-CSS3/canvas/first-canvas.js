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

// First Canvas
context.fillStyle = "teal";
context.fillRect(30, 20, 100, 50);

context.strokeStyle = "#fff";
context.strokeRect(35, 25, 90, 40);

context.fillRect(170, 20, 100, 50);
// context.clearRect(170, 20, 100, 50);

// context.fillRect(100, 90, 100, 50);

context.strokeStyle = "teal";
context.strokeRect(100, 90, 100, 50);

// context.clearRect(100, 100, 100, 100);
