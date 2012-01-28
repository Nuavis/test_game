var GameFrame = function(imgId){
    this.gsz = new V2(can.height/2/1.333,can.height/2);
    this.bsz = new V2(12,8);
    this.started = false;
    var gf = this;
    lg("Creating Game Frame");
    this.imageList = getBlocksFromImage(asset[imgId],this.gsz.x,this.gsz.y,this.bsz.x,this.bsz.y,function(){
        gf.loaded = true;
        if (gf.started){
               gf.init();
        }
    });
};
GameFrame.prototype = {
    init:function(){
        lg("Attempt Initialize Game");
        this.ticks = 0;
        this.started = true;
        if (this.loaded){
            lg("Initializing Game");
            this.squares = [];
            for (var i in this.imageList){
                this.squares.push(new Square(i%this.bsz.x,Math.floor(i/this.bsz.x),this.imageList[i]));
            }
        }
    },
    render:function(){
        var t = this.ticks;
        draw.transform.push(new Transform(false,new V2(can.width/2 - this.gsz.x/2,can.height/2 - this.gsz.y/2),new V2(this.gsz.x / this.bsz.x,this.gsz.y / this.bsz.y)));
        if (t<frameRate*2){
	        this.renderFunc(t/frameRate/2);
        }else if (t<frameRate * 4){
             this.renderFunc(t/frameRate/2-1);
        }
        draw.transform.pop();
	},update:function(){
        var t = this.ticks = this.ticks + 1;
        if (t<frameRate * 2){
              this.renderFunc = gameIntroAnimation;
        }else if (t<frameRate * 4){
              this.renderFunc = gameIntroAnimation2;
        }else{
            this.renderFunc = function(){}; 
        }
        
	},end:function(callback){
        
	}
};