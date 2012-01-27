function getBlocksFromImage(img,pw,ph,sx,sy,callback){
    var ilist = [];
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
            callback(ilist);   
        }
    };
    for (var x = 0;x<sx;x++){
        for (var y = 0;y<sy;y++){
            var d = c.getImageData(x*(pw/sx),y*(ph/sy),pw/sx,ph/sy);
            c2.putImageData(d,0,0);
            var mi = new Image();
            mi.onload = finLoad;
            mi.src = ca2.toDataURL();
            ilist[x + y * sx] = mi; 
        }
    }
    finLoad();
    return this.ilist;
    
}