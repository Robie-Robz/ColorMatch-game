var numSquares=6;
var difficultEasy=document.querySelector("#easy");
var difficultHard=document.querySelector("#hard");
var colors= generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var message=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var i;
var colorDisplay=document.querySelector("#colorDisplay");
var pickColor=pickedColor();
colorDisplay.textContent=pickColor;

difficultEasy.addEventListener("click", function(){ //Executes when user clicks Easy and sets the number of squares to 3
	difficultEasy.classList.add("selected");
	difficultHard.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickColor=pickedColor();
	colorDisplay.textContent=pickColor;
	for(i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];	
		}
		else
		{
			squares[i].style.display="none";
		}
	}


});

difficultHard.addEventListener("click", function(){ //Executes when user clicks Hard and sets the number of squares to 6
	difficultHard.classList.add("selected");
	difficultEasy.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickColor=pickedColor();
	colorDisplay.textContent=pickColor;
	for(i=0;i<squares.length;i++)
	{

			squares[i].style.backgroundColor=colors[i];	
			squares[i].style.display="block";
	}
});



function pickedColor() // returns a random color to set as the picked color for the game
{
	var random=Math.floor(Math.random()*colors.length);

	return colors[random];
}

resetButton.addEventListener("click", function(){ //Executes when the user clicks on 'New Colors'
	colors=generateRandomColors(numSquares);
	pickColor=pickedColor();
	colorDisplay.textContent=pickColor;
	this.textContent="New Colors";
	message.textContent="";
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";

})



for(i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){

		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor===pickColor)
		{
			
			colorChangeFunction(clickedColor);
			h1.style.backgroundColor=clickedColor;
			message.textContent="Success!";
			resetButton.textContent="Play Again!"

			
		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="Try again";
		}
	});
}


function colorChangeFunction(colorChange) //If user successfully clicks on the color picked by the program, then changes all the squares to the picked color
{
	for(i=0;i<squares.length;i++)
	{
	squares[i].style.backgroundColor=colorChange;
	}
}

function generateRandomColors(num) //adds random color to the array based on the difficulty. If easy, then 3 colors, and if hard, then 6 colors.
{
	var arr =[]
	for(i=0;i<num;i++)
	{
		arr.push(randomColor())
	}
	return arr;
}

function randomColor() //returns color in rgb format, where r, g, and b are random numbers ranging from 0 to 255
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}