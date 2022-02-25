const theGrid = document.getElementById("grid");
const clearButton = document.getElementById("shake");
const resizeButton = document.getElementById("resize");

// caching the DOM

let divSize = 16; // how many cells in each row
//let totalCells = Math.pow(divSize, 2); // how many total cells in the grid
//let columnNumberArray = Array(divSize).fill('auto'); // creates an array for 
// the gridTemplateColumns input
//let columnNumberString = columnNumberArray.join(" "); // formats the above array
// to ensure that the input is a string with only spaces in between items

function createCells(divSize) {
    let totalCells = Math.pow(divSize, 2); // how many total cells in the grid
    for (i = 0; i < totalCells; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        theGrid.appendChild(newCell);
        // creates the appropriate number of cells and puts them in the 
        // grid container in the DOM. 
        newCell.addEventListener('mouseover', function() {
            newCell.classList.add('hover');
        });
        newCell.addEventListener('animationend', function() {
            newCell.classList.remove('hover');
        })
    } 
    let columnNumberArray = Array(divSize).fill('auto'); // creates an array for 
    let columnNumberString = columnNumberArray.join(" "); // formats the above array
    theGrid.style.gridTemplateColumns = `${columnNumberString}`;
}

function clearGrid(){
    while (theGrid.firstChild) {
        theGrid.removeChild(theGrid.firstChild)
    }
}

clearButton.addEventListener('click', function() {
    theGrid.classList.add('shake');
    setTimeout(function() {document.getElementById("grid").classList.remove('shake')}, 200);
    clearGrid();
    createCells(divSize);
})

resizeButton.addEventListener('click', function() {
    let setSize = prompt("How many number of squares per side would you like?");
    let divSize = parseInt(setSize);
    clearGrid();
    createCells(divSize);
    return divSize;
})

createCells(divSize);
