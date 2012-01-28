var Transform = function(a,b,c,d,e,f){
	this.preTranslate = a || new V2();
	this.postTranslate = b||new V2();
	this.preScale = c||new V2(1,1);
	this.postScale = d||new V2(1,1);
	this.preRotate = e||0;
	this.postRotate = f||0;
    this.last = [];
};
Transform.prototype = {
	copy:function(){
		return new Transform(this.preTranslate,this.postTranslate,this.preScale,this.postScale,this.preRotate,this.postRotate);
	},
    push:function(transform){
        this.last.push(transform)
        return this.apply(transform);
    },
    pop:function(){
        return this.apply(this.last.pop().copy().inverse());
    },
    apply:function(transform){
        this.preScale.dot(transform.preScale);
        this.preTranslate.add(transform.preTranslate);
        this.postTranslate.add(transform.postTranslate);
    },
    inverse:function(){
        this.preScale.recp();
        this.preTranslate.mult(-1);
        this.postTranslate.mult(-1);
        return this;
    }
};
var blankTransform = new Transform();
