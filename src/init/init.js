var con,can;
window.onload = init;
function init(){
	initCanvas();
	initLoadFrame();
	setInterval(update,1000/60);
	setInterval(render,1000/60);
	addEvents();
	loadAssets();
}