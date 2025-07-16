const parentDiv = document.querySelector(".container");
const arraySize = 16;

function createGrid() {
    for (let i = 0; i < arraySize; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "column";

        for (let j = 0; j < arraySize; j++) {
            const gridElement = document.createElement("div");
            gridElement.style.display = "flex";
            gridElement.style.border = "2px solid";
            gridElement.style.height = "30px";
            gridElement.style.width = "30px";
            rowDiv.appendChild(gridElement);
        }

        parentDiv.appendChild(rowDiv);
    }
}

createGrid();