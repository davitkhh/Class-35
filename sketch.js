var hypnoticBall;
var database, position;

function setup(){
    createCanvas(500, 500);
    database = firebase.database();
    hypnoticBall = createSprite(250, 250, 10, 10);
    hypnoticBall.shapeColor = "red"; 
    var hypnoticBallPosition = database.ref("ball/position");
    hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if (position!== undefined) {
        if (keyDown(LEFT_ARROW)){
        writePosition(-3, 0);
        }
        else if (keyDown(RIGHT_ARROW)){
        writePosition(3, 0);
        }
        else if (keyDown(UP_ARROW)){
        writePosition(0, -3);
        }
        else if (keyDown(DOWN_ARROW)){
        writePosition(0, + 3); 
        }
    drawSprites();
    }
}

function writePosition(x, y){
    database.ref("ball/position").set({
        x: position.x + x,
        y: position.y + y
    })
}

function readPosition(data) {
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}

function showError() {
    console.log("Error!");
}