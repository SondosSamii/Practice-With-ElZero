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
