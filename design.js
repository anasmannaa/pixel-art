// Declare a variable to hold the value of selected color in color input
let colorValue = document.getElementById("colorPicker").value;

// Change the value of color in response to change in color input
function changeColor () {
	colorValue = document.getElementById("colorPicker").value;
}

// fill cell with the selected color when being clicked
function fillColor (evt) {
	evt.target.style.backgroundColor = colorValue;
}

// Construct canvas for coloring
function makeGrid() {
	// Your code goes here!

	// create a reference of the #pixelCanvas table
	const pixelCanvas = document.querySelector("#pixelCanvas");

	// Remove current table
	pixelCanvas.innerHTML = '';

	//get the number of rows within the table (table height)
	const numOfRows = parseInt((document.querySelector("#inputHeight")).value);

	// get the number of columns within the table (table width)
	const numOfColumns = parseInt((document.querySelector("#inputWidth")).value);

	//Create canvas rows and colums depends on user's width and height inputs
	for (let i = 0; i < numOfRows; i++) {
		const newRow = document.createElement("TR");
		for (let j = 0; j < numOfColumns; j++) {
			const newColumn = document.createElement('TD');
			newColumn.addEventListener('click', fillColor);
			newRow.appendChild(newColumn);
		}
		pixelCanvas.appendChild(newRow);
	}
}

// Add event listener to the form contains user inputs for width and height of the canvas
document.getElementById('sizePicker').addEventListener('submit', function(evt){
    evt.preventDefault();
    makeGrid();
});

// Add event listener to the color input when user select new color
document.getElementById('colorPicker').addEventListener('change', function(){
    changeColor();
});