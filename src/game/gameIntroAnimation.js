function gameIntroAnimation(t){
    draw.clear();
    if (this.squares){
        var t2 = 1 - (-1 * ( t -1) * ( t -1) + 1);
        var top =  can.height / draw.transform.preScale.y * 2;
        var li = this.squares.length;
        li*=li;
        for (var i in this.squares){
            draw.img2(this.squares[i].img,this.squares[i].position.x,this.squares[i].position.y - top*(t2 - (t2 * ((i*i)/li))/2),1,1);
        }
    }
}