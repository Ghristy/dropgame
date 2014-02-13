/**
 * The Drop class is a blueprint for each raindrop we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Drop(){
	this.x; //starts empty, will keep track of each drop's left-right position as a #
	this.y; //starts empty, will keep track of each drop's up-down position as a #
	this.item_on_page; //represents drop's physical presence on the screen
	/** 
	*	The create method does lots of things when a drop gets created on the page
	*/
	this.create = function(){
		//make a section tag in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//give it a class which styles it in CSS to resemble a drop
		this.item_on_page.className = "raindrop";
		//store a random x and y position, different for each drop. I'm using screen width or 500, height of 300:
		this.x = Math.floor(Math.random()*500);
		this.y = -50;
		//use those x and y coordinates in the CSS to position the drop:
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** 
	*   The destroy function does lots of cleaning up when a drop is removed from the page
	*/
	this.destroy = function(){
		//clear all splashing images first
		for(var j = 0; j<document.getElementsByClassName("splash").length; j++){
		var thatSplash = document.getElementsByClassName("splash")[j];
		document.getElementsByTagName('body')[0].removeChild(thatSplash);
		}
		//create an image 
		var newSplash = document.createElement("img");
		//set its source and other styling
		newSplash.className = "splash";
		newSplash.src = "img/splash-anim-gif.gif?"+Math.random();
		newSplash.style.position="absolute";
		newSplash.style.left = this.x + "px";
		newSplash.style.top = this.y + "px";
		//attach the splashing imaging to our html hierarchy
		document.getElementsByTagName("body")[0].appendChild(newSplash);
		//remove this drop from the array first look up and store the current drops index number in array
			var this_drops_index_num = dropArray.indexOf(this);
			//remove exactly one drop from the array, starting with the first
			dropArray.splice(this_drops_index_num, 1);
		//remove object from page 
		document.getElementsByTagName('body')[0].removeChild(this.item_on_page);
	}
} //close the Drop class
//declare vars and arrays here outside of curlies, so that all functions can use it
var dropArray =new Array();
var spawnTimer;
var moveTimer;
	
onload=init;

function init() {
	//set interval fires off a function periodically
	setTimeout(function(){
	spawnTimer = setInterval(function(){spawn();}, 500);
	moveTimer = setInterval(function(){moveAllDrops();}, 100);
	}, 2000);
}
	function spawn(){
	//make an object that's an instance of the Drop Class:
	var anotherDrop = new Drop();
	anotherDrop.create();
	//store each drop into an array
	dropArray.push(anotherDrop);
	}
	
function moveAllDrops(){
	for(var i = 0; i < dropArray.length; i++){
		var currentDrop = dropArray[i];
	//iterate through the drops, and do whats in side of the {} to each drop
	//adds a little to the stored y property of the drop
		currentDrop.y += 5;
	//move drop a few pixels
		currentDrop.item_on_page.style.top = currentDrop.y+"px";
		
		//if drop reaches bottom of screen destroy it,
		
		if(currentDrop.y > 500){
			currentDrop.destroy();	
		}
			
	}//closes for loop
	
}//end move all drops function


