function createGrid(length=16) {
  let sketchpad = document.querySelector(".sketchpad");
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      let box = document.createElement('div');
      sketchpad.appendChild(box);
    }
  }
}