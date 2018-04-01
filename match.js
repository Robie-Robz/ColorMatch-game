//var SquareBackground;
var SquareId;
var firstElement;
var secondElement;
var clickTracker=0;
var result;
var score=0;
var mistakes=0;
var EliminatedPairs=0; //tracks the pairs that were successfully matched
var storeId=[];
var storeBackground=[];
var displayNodeValue;
var colors;
colors=generateRandomColor(8);
var colorsDuplicate=colors.slice(0,8);
var combinedColors;
combineColor();
var squares=document.querySelectorAll(".square");
var message=document.querySelector("h5");
var timeleft=document.getElementById("time");
initiateGame();

function initiateGame()
{
	changeSquareColor();
	flipSquares();// flip squares to reveal the colors
	GameTimer();

}


function GameTimer() {
     var seconds = 5;
     var finiteNumber = 0;
     var interval = setInterval(function(){
         seconds--;
         timeleft.textContent=seconds;
         if(seconds === finiteNumber)
         {
            flipSquares(); //flip squares to conceal the colors
            message.textContent="";	
            clearInterval(interval )
          }
    }, 1000);
 }

function flipSquares()
{
	for(i=0;i<squares.length;i++)
	{
		squares[i].parentNode.parentNode.classList.toggle("flip");
	}
}

function evaluateSquares(value)
	{
		if(value===-1)//executes if user clicks the same square twice
		{
			clickTracker=0;
			storeBackground.length=0;
			storeId.length=0;
			mistakes++;

		}
		else{
			clickTracker+=value;
			if(clickTracker===2)
			{
				console.log("Clicked Twice");
		
					result=strcmp(storeBackground[0], storeBackground[1]);
					//console.log(result);
					if(result===0)
					{
						console.log("Same! Eliminating!");
						firstElement=document.getElementById(storeId[0]);
						secondElement=document.getElementById(storeId[1]);
						firstElement.parentNode.style.visibility="hidden";//removes front and back of first item
						// firstElement.style.pointerEvents = "none";
						secondElement.parentNode.style.visibility="hidden";//removes front and back of second item
						// secondElement.style.pointerEvents = "none";
						// firstElement.parentNode.removeChild(firstElement);//removes front and back of first item
						// secondElement.parentNode.removeChild(secondElement);//removes front and back of second item

						result=-1;
						storeBackground.length=0;
						storeId.length=0;
						score++;
						EliminatedPairs++;
						console.log("Score: "+score);
						console.log("EliminatedPairs: "+EliminatedPairs);

					}	
					else
					{
						firstElement=document.getElementById(storeId[0]);
						secondElement=document.getElementById(storeId[1]);
						firstElement.parentNode.parentNode.classList.toggle("flip");
						secondElement.parentNode.parentNode.classList.toggle("flip");
						storeBackground.length=0;
						storeId.length=0;
						score--;
						mistakes++;
						console.log("Score: "+score);
					}
		
				clickTracker=0;
				
		}
		
		}
		
		if(EliminatedPairs===8 && score===8)
		message.textContent="High Score!";

		else if(EliminatedPairs===8) //When game finishes
		message.textContent="Your score is: "+score+" Mistakes: "+mistakes;

		
		
	}

function strcmp ( str1, str2 ) {

    return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
}


document.getElementById("container").addEventListener("click",function(e) { //Event delegation used to find the clicks on the squares within the "Container"
// e.target was the clicked element
    if (e.target && e.target.matches("div"))
  {
    	console.log("Square element clicked!");
    	
    	if(e.target.parentNode.style.visibility==="hidden") //prevents clicking on elready removed element
    		evaluateSquares(-1);

		if(e.target.className==="front")
		{
			e.target.parentNode.parentNode.classList.toggle("flip");
			// SquareBackground = e.target.nextElementSibling.style.backgroundColor;
	  //  		console.log(SquareBackground);
   // 			storeBackground.push(SquareBackground);

   			storeBackground.push(e.target.nextElementSibling.style.backgroundColor);

    		SquareId = e.target.nextElementSibling.getAttribute('id');
	    	console.log(SquareId);
			storeId.push(SquareId);
  			evaluateSquares(1);
  			displayNodeValue=e.target.parentNode.parentNode.className; //selects "flip-container" class of the clicked element
  			console.log(displayNodeValue);
  		}
  		else//if user clicks on the same square twice
  		{
  			e.target.parentNode.parentNode.classList.toggle("flip");
  			evaluateSquares(-1);

  		}
		
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
