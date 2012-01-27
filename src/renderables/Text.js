var Text = function(str,pos){
	this.position = pos;
	this.string = str;
	this.size = 24;
	this.font = "sans-serif";
	this.baseline = "middle";
	this.align = "center";
};
Text.prototype.render = function(){
	con.fillStyle = this.color;
	con.textBaseline = this.baseline;
	con.textAlign = this.align;
	con.font = Math.floor(this.size) + "px " + this.font;
	draw.text(this.string,this.position);
};
