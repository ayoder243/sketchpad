const GRID_WIDTH = 960;
const GRID_LENGTH = 960;

function createGrid(length=16) {
  let sketchpad = document.querySelector(".sketchpad");
  sketchpad.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${length}, 1fr)`;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      let box = document.createElement('div');
      box.classList.add("box");
      box.setAttribute("grid-column", i + 1);
      box.setAttribute("grid-row", j + 1);
      sketchpad.appendChild(box);
    }
  }
}

function draw() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "green";
    })
  })
}

createGrid();
draw();