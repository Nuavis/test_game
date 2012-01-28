function gameIntroAnimation(){
    for (var i in this.squares){
        draw.img2(this.squares[i].img,this.squares[i].position.x,this.squares[i].position.y,1,1);
    }
}