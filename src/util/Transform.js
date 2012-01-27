var Transform = function(a,b,c,d,e,f,g){
	this.preTranslate = a || new V2();
	this.postTranslate = b||new V2();
	this.preScale = c||new V2(1,1);
	this.postScale = d||new V2(1,1);
	this.preRotate = e||0;
	this.postRotate = f||0;
	this.child = g||blankTransform;
};
Transform.prototype = {
	copy:function(){
		return new Transform(this.preTranslate,this.postTranslate,this.preScale,this.postScale,this.preRotate,this.postRotate,this.child);
	}
};
var blankTransform = new Transform();
