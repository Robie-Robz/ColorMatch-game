var colors;
colors=generateRandomColor(8);
var colorsDuplicate=colors.slice(0,8);
var combinedColors;
combineColor();
//var square=document.querySelector("#square");


//3 second timer function
//score function

var squares=document.querySelectorAll(".square");
changesSquareColor();

var clickedColor1;
var clickedColor2;
//boolean game=true;
var clickCounter=0;
//while(game===true)
for(i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click", function(){
		clickCounter=1;
		console.log(clickCounter);
	// 
		clickedColor1=this.style.backgroundColor;
		console.log(clickedColor1);
		// squares[i].addEventListener("click", function(){
		// // clickedColor2=this.backgroundColor;
		//  clickCounter=2;
		// console.log(clickCounter);
		// });

	});

}

function changesSquareColor()
{
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=combinedColors[i];
	}
}

function combineColor()
{
	console.log("Original: ")
	console.log(colors);
	console.log("Duplicate");
	console.log(colorsDuplicate);
	shuffle(colorsDuplicate);
	console.log("Duplicate Shuffled");
	console.log(colorsDuplicate);
	combinedColors=colors.concat(colorsDuplicate);// merges colors[] and combinedColors[]
	console.log("Combined: ")
	console.log(combinedColors);

}

function generateRandomColor(num)
{
	//adds random color to arr array based on the receieved num
	var arr=[];
	for(i=0;i<num;i++)
	{
			arr.push(rgbColor()); //calling rgbColor() to generate colors

	}

	return arr;
}

function rgbColor()
{	
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function shuffle(array) { //Fisher and Yates algorithm for shuffling elements of an array
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
