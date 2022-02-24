const theGrid = document.getElementById("grid");
const clearButton = document.getElementById("buttons");
// caching the DOM, since there is only the one div in the HTML file, this 
// only includes the main container that I will then put all the other Divs in.

let divSize = 16; // how many cells in each row
let totalCells = Math.pow(divSize, 2); // how many total cells in the grid
let columnNumberArray = Array(divSize).fill('auto'); // creates an array for 
// the gridTemplateColumns input
let columnNumberString = columnNumberArray.join(" "); // formats the above array
// to ensure that the input is a string with only spaces in between items

function createCells(totalCells) {
    for (i = 0; i < totalCells; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        theGrid.appendChild(newCell);
        // creates the appropriate number of cells and puts them in the 
        // grid container in the DOM. 
        newCell.addEventListener('mouseover', function() {
            newCell.classList.add('hover');
        });
    } 
}

createCells(totalCells);

theGrid.style.gridTemplateColumns = `${columnNumberString}`;
