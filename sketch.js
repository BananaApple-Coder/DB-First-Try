var Hball, Database, position

function setup(){
    Database = firebase.database()
    createCanvas(500,500);
    Hball = createSprite(250,250,10,10);
    Hball.shapeColor = "red";

    var HballPos = Database.ref("ball/position")
    HballPos.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }
    drawSprites();
}

function writePosition(x,y){
    Database.ref('ball/position').set({
        'x':position.x + x,
        'y': position.y + y
    })  
}

function readPosition(data){
    position = data.val()
    console.log(position.x)
    Hball.x = position.x;
    Hball.y = position.y;
}