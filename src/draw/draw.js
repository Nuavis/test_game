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
		con.drawImage(asset[id],x,y);
	},
	imgSize:function(id,x,y,width,height){
		con.drawImage(asset[id],x,y,width,height);
	},
	text:function(string,position){
		con.fillText(string,(position.x+draw.transform.preTranslate.x)*draw.transform.preScale.x,(position.y + draw.transform.preTranslate.y)*draw.transform.preScale.y);
	}
};
