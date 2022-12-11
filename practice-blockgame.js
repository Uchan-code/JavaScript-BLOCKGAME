// blockの概念を作る
class Block{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        push();
        let s =25;
        rect(s*this.x,s*this.y,s,s);
        pop();
    }
}

// fieldのクラスを作る
class Field{
    constructor(x,y){
        this.tiles = [
            [1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1],
        ];
    }
    thileAt(x,y){
        return this.tiles[y][x];
    }
    draw(){
        for(let y=0; y<21; y++){
            for(let x=0; x<12; x++){
                if(this.thileAt(x,y) === 0) continue;
                new Block(x,y).draw();
            }
        }
    }
}

// p5jsのライブラリを読み込む関数
function setup(){
    createCanvas(400,600);
    background(64);
}

function draw(){
};