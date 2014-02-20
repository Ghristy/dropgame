//declare vars and arrays here outside of curlies, so that all functions can use it
var dropArray =new Array();
var spawnTimer;
var moveTimer;
var user_bucket = new Bucket(25, 250);
	
onload=init;

function init() {
	//set interval fires off a function periodically
	spawnTimer = setInterval(function(){spawn();}, 2000);
	moveTimer = setInterval(function(){moveAllDrops();}, 100)
	//actually put bucket on page
	user_bucket.create();
	document.onkeydown = function(e){ checkKey(e);}
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
		
		if(currentDrop.y > 350){
			currentDrop.destroy();	
		}
		//if current drop hits the bucket
			if(collisionCheck(user_bucket,currentDrop)){
				//do various things like add to score and get rid of drop
			currentDrop.destroy();	
		}
			
			
	}//closes for loop
	
}//end move all drops function

function checkKey(e){
	//equalize understanding of the ecent in all browsers
	e = e||window.event;
	//if its the right arrow
	if (e.keyCode == 39){
		//add to buckets x(which will move it rightward and apply to CSS LEFT)
	user_bucket.x +=15;
	user_bucket.setpos();
	}else if(e.keyCode == 37){
		//subtract from buckets x(which will move it rightward and apply to CSS LEFT)
	user_bucket.x -=15;
	user_bucket.setpos();		
	}
		
	
}
function collisionCheck(big_obj, sm_obj){
	var big_obj_left_x = big_obj.x;
	var big_obj_right_x = big_obj.x + big_obj.width;
	var big_obj_top_y = big_obj.y;
	var big_obj_bottom_y =  big_obj.y + big_obj.height
	
	var sm_obj_left_x = sm_obj.x;
	var sm_obj_right_x = sm_obj.x + sm_obj.width;
	var sm_obj_top_y = sm_obj.y;
	var sm_obj_bottom_y = sm_obj.y + sm_obj.height;
	//if the coordinates of the two objects indicate they are touching in left --to-- right positions
	if((sm_obj_left_x > big_obj_left_x)&&(sm_obj_right_x < big_obj_right_x )){
		//return true
		if((sm_obj_top_y > big_obj_top_y)&&(sm_obj_bottom_y < big_obj_bottom_y)){
			return true
		}
		
	}
		//otherwise return false
		return false
	
}