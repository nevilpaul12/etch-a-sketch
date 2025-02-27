const container = document.querySelector("#container");

const input = document.querySelector("input");

const buttonAction = document.querySelector(".add-btn");
const resetButtonAction = document.querySelector(".reset-btn");

const colors = ["pink", "black", "blue", "brown", "grey"];

buttonAction.addEventListener("click", () => {
  const inputValue = input.value;
  createGrid(inputValue);
});

const createGrid = (size) => {
  container.innerHTML = "";
  const cellSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const smallDiv = document.createElement("div");
    smallDiv.classList.add("grid-cell");
    smallDiv.style.height = `${cellSize}px`;
    smallDiv.style.width = `${cellSize}px`;
    smallDiv.addEventListener("mouseover", () => {
      smallDiv.style.backgroundColor = `${
        colors[Math.floor(Math.random() * colors.length)]
      }`;
    });
    container.appendChild(smallDiv);
  }
};

const resetGrid = () => {
  input.value = "";
  input.focus();

  createGrid(0);
};

resetButtonAction.addEventListener("click", () => {
  resetGrid();
});
