var LoadFrame = function(){
	this.ticks = 0;
	this.oticks = 0;
	this.radius = 50;
	con.fillStyle = "#000";
	con.fillRect(0,0,can.width,can.height);
};
LoadFrame.prototype = {
	init:function(){
	    
	},
	render:function(){
		draw.pushAlpha(.5);
		con.fillStyle = "#000";
		con.fillRect(0,0,can.width,can.height);
		draw.popAlpha();
		con.fillStyle = "#fff";
		con.fillRect(can.width/2 + this.radius * Math.sin(this.ticks/8) - 12.5,can.height/2 + this.radius * Math.cos(this.ticks/8)  - 12.5,25,25);
		con.font = "24px sans-serif";
		con.textAlign = "center";
		con.fillText("Loading, please give us money",can.width/2,can.height/2 + this.radius*2);
	},
	update:function(){
		this.ticks ++;
		if (this.outro){
			this.oticks ++;
		}
	},end:function(callback){
		this.outro = true;
		this.callback = callback;
		
		lg("TODO: Outro Animation for Load Screen");
		callback();
	}
};
