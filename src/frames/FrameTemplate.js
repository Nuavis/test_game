var GameFrame = function(){
    //Stuff to go when the frame is created
    //You should be able to render after this point
};
GameFrame.prototype = {
    init:function(){
        //When the Frame is centered on the screen
    },
    render:function(){
    	//Called <frameRate> times a second to render the screen
        //Use the "draw" library to draw to the screen
	},update:function(){
        //Logic goes in here, any animations. Don't draw in here
        
	},end:function(callback){
        //Delete the frame, when finished, call the callback
	}
};