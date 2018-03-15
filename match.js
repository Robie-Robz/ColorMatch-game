var colors;
colors=generateRandomColor(8);
var colorsDuplicate=colors.slice(0,8);
var combinedColors;
combineColor();
var squares=document.querySelectorAll(".square");
changeSquareColor();

// var colorObject= [
// 					{	objColor:null,
// 						squareId:null
// 					},
// 					{ 	objColor:null,
// 						squareId:null
// 					}
// 				];

// var clickedColor1;
// var clickedColor2;
var SquareBackground;
var SquareId;
var firstElement;
var SecondSquareBackground;
var SecondSquareId;
var secondElement;
var clickTracker=0;
var result;
var score=0;
var storeId=[];
var storeBackground=[];

// // //while(game===true)
// for(i=0;i<squares.length;i++) //executes 16 times since there are 16 div elements of class square 
// {
// 	squares[i].addEventListener("click", first);

// 	function first(e)
// 	{
// 			// colorObject[0].objColor=this.style.backgroundColor;
// 			// console.log(colorObject[0].objColor);
// 			// colorObject[0].squareId=this.getAttribute('id');
// 			// console.log(colorObject[0].squareId);
// 			firstSquareBackground=this.style.backgroundColor;
// 			console.log(firstSquareBackground);
// 			firstSquareId=this.getAttribute('id');
// 			console.log(firstSquareId);
// 			storeId.push(firstSquareId);
// 			evaluateSquares(1);

// 			e.stopImmediatePropagation(); //Prevents other listeners of the same event from being called.
//   			this.removeEventListener("click", first);
//    			document.onclick = second;
// 	}

// 	function second()
// 	{
		
// 			// colorObject[1].objColor=this.style.backgroundColor;
// 			// console.log(colorObject[1].objColor);
// 			// colorObject[1].squareId=this.getAttribute('id');
// 			// console.log(colorObject[1].squareId);	
// 			SecondSquareBackground=this.style.backgroundColor;
// 			console.log(SecondSquareBackground);
// 			SecondSquareId=this.getAttribute('id');
// 			console.log(SecondSquareId);	
// 			storeId.push(SecondSquareId);
// 			evaluateSquares(1);		
			
// 	}
	

// }
function evaluateSquares(value)
	{
		clickTracker+=value;
		if(clickTracker===2)
		{
			console.log("Clicked Twice");
			// console.log(storeId[0]);
			// console.log(storeId[1]);
			// console.log("Printing first");
			// console.log(firstSquareBackground);
			// console.log("Printing Second");
			// console.log(SecondSquareBackground);
			if(storeId[0]!==storeId[1]) //prevents from giving score if user clicks on the same square twice
			{	
				result=strcmp(storeBackground[0], storeBackground[1]);
				//console.log(result);
				if(result===0)
				{
					firstElement=document.getElementById(storeId[0]);
					firstElement.style.display="none";
					secondElement=document.getElementById(storeId[1]);
					secondElement.style.display="none";
					// console.log("Same");
					result=-1;
					storeBackground.length=0;
					storeId.length=0;
					score++;
					console.log("Score: "+score);


				}	
				else
				{
					storeBackground.length=0;
					storeId.length=0;
					score--;
					console.log("Score: "+score);
				}
			}
			else{
				storeBackground.length=0;
				storeId.length=0;
			}
		
				clickTracker=0;
				
			//storeId.length=0;//empties the array
		}
		
	}

function strcmp ( str1, str2 ) {

    return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
}
document.getElementById("container").addEventListener("click",function(e) { //Event delegation used to find the clicks on the squares within the "Container"
// e.target was the clicked element
    if (e.target && e.target.matches("div"))
  {
    console.log("Square element clicked!");

    	// firstSquareBackground=this.style.backgroundColor; //result getting error because color is retrieved in name format instead of rgb
  //   	var element = document.querySelector('.square');
  //   	var pre = document.getElementById('style');
		// pre.innerHTML = 'Its background color is: ' + window.getComputedStyle(element).getPropertyValue("background-color");
		// // console.log(firstSquareBackground);
		// console.log(pre.innerHTML);
		// firstSquareId=this.getAttribute('id');
		// console.log(firstSquareId);
		SquareBackground = e.target.style.backgroundColor;
   		console.log(SquareBackground);
   		storeBackground.push(SquareBackground);

    	SquareId = e.target.getAttribute('id');
    	console.log(SquareId);
		storeId.push(SquareId);
  		evaluateSquares(1);

   }
});



function changeSquareColor()
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
