var V2 = function(x,y){
	this.set(x || 0, y || 0);
}
V2.prototype = {
	set:function(x,y){
		this.x = x;
		this.y = y;
		return this;
	},
	copy:function(){
		return new V2(this.x,this.y);
	}
};