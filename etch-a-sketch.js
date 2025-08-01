const parentDiv = document.querySelector(".container");
const arraySize = 100;

function createGrid() {
    for (let i = 0; i < arraySize; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "column";
        rowDiv.style.width = "100vw";

        for (let j = 0; j < arraySize; j++) {
            const gridElement = document.createElement("div");
            gridElement.style.display = "flex";
            gridElement.style.border = "1px solid";
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