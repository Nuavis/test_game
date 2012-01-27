var asset = {};
var assetList = [
	"img/asset0.png",
	"img/img0.jpg"
];
function loadAssets(){
	lg("Loading Assets");
	
	var assetsLoaded = function(){
		lg("Finished Loading Assets");
	
		frame.end(function(){
			frame = new MainMenuFrame();
			frame.init();
		});
	};
	
	var imgsLeft = 1;
	for (var i = 0;i<assetList.length;i++){
		imgsLeft ++;
		var img = asset[assetList[i].split("/").pop().split(".").shift()] = new Image();
		img.onload = function(){
			imgsLeft --;
			lg("Loaded",img.src);
			if (imgsLeft <= 0){
				assetsLoaded();
			}
		}
		img.src = "../res/"+assetList[i];
		lg(img.src);
	}
	if (imgsLeft == 1){
		assetsLoaded();
	}else{
		imgsLeft --;
	}
}
