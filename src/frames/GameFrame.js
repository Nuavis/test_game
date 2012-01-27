var GameFrame = function(imgId){
    this.gsz = new V2(can.height/2/1.333,can.height/2);
    this.imageList = getBlocksFromImage(asset[imgId],this.gsz.x,this.gsz.y,3,2,function(){
        this.loaded = true;
        if (this.started){
               this.init();
        }
    });
};
GameFrame.prototype = {
    init:function(){
        lg("Initializing Game");
        this.ticks = 0;
        this.started = true;
        if (this.loaded){
               
        }
    },
    render:function(){
		
	},update:function(){
        var t = this.ticks = this.ticks + 1;
        if (t<frameRate * 4){
               
        }
        
	},end:function(){
        
	}
};