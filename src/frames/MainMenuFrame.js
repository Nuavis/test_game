var MainMenuFrame = function(){
	this.frame = 0;
};
MainMenuFrame.prototype = {
	init:function(){
		lg("Initializing Main Menu");
		draw.transform = new Transform();
		draw.transform.preScale.set(can.width/100,can.height/100);
		this.buttons = [this.play = new Text("Quick Play",new V2(-50,50)),
		this.select = new Text("Level Select",new V2(-150,55)),
		this.custom = new Text("Custom Game",new V2(-250,60)),
		this.options = new Text("Options",new V2(-400,65)),
		this.credits = new Text("Credits",new V2(-700,70))]
		for (var i = 0;i<this.buttons.length;i++){
			this.buttons[i].destination = new V2(50,this.buttons[i].position.y);
		}
		addEvent("mousedown",this,"onMouseDown");
	},
	render:function(){
		draw.imgSize("asset0",0,0,can.width,can.height);
		for (var i = 0;i<this.buttons.length;i++){
			this.buttons[i].render();
		}
	},update:function(){
		for (var i = 0;i<this.buttons.length;i++){
			var b = this.buttons[i];
			if (this.frame == 0 && Math.abs(b.position.y - mouse.y2)*2<b.size/draw.transform.preScale.y && Math.abs(b.position.x - mouse.x2)*4 <b.size * b.string.length / draw.transform.preScale.x){
				b.size+=3;
			}else if (this.frame == 2 &&  Math.abs(b.position.y - mouse.y2)*2<b.size/draw.transform.preScale.y && Math.abs(b.position.x + b.size * b.string.length / draw.transform.preScale.x /2  - mouse.x2)*4 <b.size * b.string.length / draw.transform.preScale.x * 2){
				b.position.x += .05;
			}
			b.position.x -= (b.position.x - b.destination.x)/16;
			b.size -= (b.size - 24)/4;
		}
	},end:function(callback){
	
	},onMouseDown:function(){
		for (var i = 0;i<this.buttons.length;i++){
			var b = this.buttons[i];
			if (this.frame == 0 && Math.abs(b.position.y - mouse.y2)*2<b.size/draw.transform.preScale.y && Math.abs(b.position.x - mouse.x2)*4 <b.size * b.string.length / draw.transform.preScale.x){
				this.onButtonHit(b);
			}else if (this.frame == 2 &&  Math.abs(b.position.y - mouse.y2)*2<b.size/draw.transform.preScale.y && Math.abs(b.position.x + b.size * b.string.length / draw.transform.preScale.x /2  - mouse.x2)*4 <b.size * b.string.length / draw.transform.preScale.x * 2){
				this.onButtonHit(b);
			}
		}
	},onButtonHit:function(button){
		switch(button.string){
			case "Level Select":
				for (var i in this.buttons){
					this.buttons[i].destination.x =  100 + this.buttons[i].string.length * this.buttons[i].size / draw.transform.preScale.x + i * 10;
				}
				var ar = ["Mona Lisa","Van Goh","Sugar Canes","Liam is gay","Graceful Hummingbirds","Adjective and Noun","Blank"];
				for (var i in ar){
					var txt;
					this.buttons.push(txt = new Text(ar[i],new V2(-50,50 + i * 5)));
					txt.align = "start";
					txt.destination = new V2(5,50 + i*5);
				}
				this.frame = 2;
			break;
			case "Mona Lisa":
				
			break;
		}
	}
};
