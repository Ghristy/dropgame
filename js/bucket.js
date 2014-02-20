// JavaScript Document

/**
 * The Bucket class is a blueprint for each bucket we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Bucket(x, y){
	this.x = x; //starts empty, will keep track of each bucket's left-right position as a #
	this.y = y; //starts empty, will keep track of each bucket's up-down position as a #
	
	this.width = 100; //keep track of bucket width
	this.height = 100; //keep track of bucket width
	this.item_on_page; //represents bucket's physical presence on the screen
	/** 
	*	The create method does lots of things when a bucket gets created on the page
	*/
	this.create = function(){
		//make a section tag in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//give it a class which styles it in CSS to resemble a bucket
		this.item_on_page.className = "bucket";
		this.item_on_page.style.width = this.width + "px";
		this.item_on_page.style.height = this.height + "px";
		this.item_on_page.style.backgroundColor = "rgba(51,53,153,.5)";
		this.item_on_page.style.position = "absolute";
		this.item_on_page.style.borderBottomLeftRadius = "25px";
		this.item_on_page.style.borderBottomRightRadius = "25px";
		
		//use those x and y coordinates in the CSS to position the bucket:
		this.setpos();
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** 
	*   The destroy function does lots of cleaning up when a bucket is removed from the page
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
		//remove this bucket from the array first look up and store the current buckets index number in array
			var this_buckets_index_num = bucketArray.indexOf(this);
			//remove exactly one bucket from the array, starting with the first
			bucketArray.splice(this_buckets_index_num, 1);
		//remove object from page 
		document.getElementsByTagName('body')[0].removeChild(this.item_on_page);
	}
	/* the setpos function takes the x, y properties wstored weith the object and applies them to the css styling left and top properties;*/
		this.setpos = function setpos(){
			//apply current x and y properties to the items css to position the item:
				this.item_on_page.style.left = this.x + "px";
				this.item_on_page.style.top = this.y + "px";
		}
} //close the Bucket class