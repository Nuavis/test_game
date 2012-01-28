function getBlocksFromImage(img,pw,ph,sx,sy,callback){
    lg("Generating Tiles from Image");
    var iar = [];
    var ca = document.createElement("canvas");
    ca.width = pw;
    ca.height = ph;
    var c = ca.getContext("2d");
    c.drawImage(img,0,0,ca.width,ca.height);
    var ca2 = document.createElement("canvas");
    ca2.width = pw/sx;
    ca2.height = ph/sy;
    var c2 = ca2.getContext("2d");
    var amtLoaded = 1;
    var finLoad = function(){
        amtLoaded --;
        if (amtLoaded <= 0){
            lg("Generation Finished");
            callback();   
        }
    };
    for (var x = 0;x<sy;x++){
        for (var y = 0;y<sx;y++){
            amtLoaded++;
            var d = c.getImageData(y*(pw/sx),x*(ph/sy),pw/sx,ph/sy);
            c2.putImageData(d,0,0);
            var mi = new Image();
            mi.onload = finLoad;
            mi.src = ca2.toDataURL();
            iar.push( mi ); 
        }
    }
    finLoad();
    return iar;
    
}