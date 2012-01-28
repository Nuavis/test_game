var draw = {
	alphas:[],transform:blankTransform.copy(),
	block:function(squares,transform){
		for (var i = 0;i<squares.length;i++){
			
		}
	},
	pushAlpha:function(amt){
		this.alphas.push(amt);
		con.globalAlpha *= amt;
	},
	popAlpha:function(){
		con.globalAlpha /= this.alphas.pop();
	},
	img:function(id,x,y){
        x=x||0;
        y=y||0;
		con.drawImage(asset[id],x,y);
	},
    img2:function(img,x,y,sx,sy){
        x=x||0;
        y=y||0;
        lg(img,(x + this.transform.preTranslate.x)*this.transform.preScale.x + this.transform.postTranslate.x,(y + this.transform.preTranslate.y)*this.transform.preScale.y + this.transform.postTranslate.y,sx * this.transform.preScale.x,sy * this.transform.preScale.y);
        con.drawImage(img,(x + this.transform.preTranslate.x)*this.transform.preScale.x + this.transform.postTranslate.x,(y + this.transform.preTranslate.y)*this.transform.preScale.y + this.transform.postTranslate.y,sx * this.transform.preScale.x,sy * this.transform.preScale.y);
    },
	imgSize:function(id,x,y,width,height){
		con.drawImage(asset[id],x,y,width,height);
	},
	text:function(string,position){
		con.fillText(string,(position.x+draw.transform.preTranslate.x)*draw.transform.preScale.x,(position.y + draw.transform.preTranslate.y)*draw.transform.preScale.y);
	}
};
