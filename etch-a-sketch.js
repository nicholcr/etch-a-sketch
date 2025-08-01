const parentDiv = document.querySelector(".container");
let arraySize = 16;

const btn = document.querySelector(".btnSize");
btn.addEventListener('click', (event) => {
    const userInput = prompt('Please enter a number between 1 and 100: ');
    if (userInput < 0 || userInput > 100) {
        //do nothing
    } else {
        arraySize = userInput;
        createGrid();
    }
    changeSize();
});

function createGrid() {
    parentDiv.replaceChildren();
    for (let i = 0; i < arraySize; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "column";
        rowDiv.style.width = "100vw";

        for (let j = 0; j < arraySize; j++) {
            const gridElement = document.createElement("div");
            gridElement.style.display = "flex";
            gridElement.style.flex = "1";
            gridElement.addEventListener('mouseover', (event) =>  {
                gridElement.style.background = "black";
            });
            rowDiv.appendChild(gridElement);
        }

        parentDiv.appendChild(rowDiv);
    }
}

createGrid();