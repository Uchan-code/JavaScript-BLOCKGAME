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

class Mino{
    constructor(x,y,rot,shape){
        this.x = x;
        this.y = y;
        this.rot = rot;
        this.shape = shape;
    }
    calcBlocks(){
        let blocks = [
            new Block(-1,0),
            new Block(0,0),
            new Block(0,-1),
            new Block(1,0)
        ];
        let rot = (400 + this.rot) % 4 ;
        for(let r = 0; r<rot; r++){
            //  rotate 90
            // blocks.forEach(b => (b.x=-b.y,b.y=b.x))
            blocks = blocks.map(b => new Block(-b.y, b.x));
        }
        return blocks;
    }
    draw(){
        let blocks = this.calcBlocks();
        blocks.forEach(b => (b.x += this.x, b.y += this.y));
        for(let b of blocks){
            b.draw();
        }
    }
}

class Game{
    constructor(){
        this.mino = new Mino(5,10,0,0);
        this.field = new Field();
        this.fc = 0;
    }
    proc(){

        background(64);
        this.mino.draw();
        this.field.draw();

        this.fc++;
    }
}
let game;

// p5jsのライブラリを読み込む関数
function setup(){
    createCanvas(400,600);
    background(64);
    game = new Game();
}

function draw(){
    game.proc();
};