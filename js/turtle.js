//functions to draw the turtle
function Logo(canvasElem) {
    this.canvas = canvasElem.getContext('2d');
    //turtle visible by default
    this.visible = true;
    //actual position of the turtle
    this.x = 350;
    this.y = 150;

    /*
    let turtleImage = new Image();
    turtleImage.src = 'turtle.png';
    turtleImage.onload = function () {
        this.canvas.drawImage(turtleImage, this.x, this.y);
    }
    */

    //default color
    this.canvas.strokeStyle = "black";

    //position 0 of the turtle
    this.xBase = 350;
    this.yBase = 150;
    //rotate angle
    this.angle = 0;
    //pen down by default
    this.pen = true;
    //pen up (no trace)
    this.lc = function() {
        this.pen = false;
    };
    //pen down (trace active)
    this.bc = function() {
        this.pen = true;
    };
    //turtle turns degree (angle) to right
    this.td = function(angle) {
        this.angle = (this.angle + angle) % 360;
    };
    //turtle turns degree (angle) to left
    this.tg = function(angle) {
        this.angle = (this.angle + angle * (-1)) % 360;
    };
    //turtle moves forward
    this.av = function(distance) {
        let rad = this.angle * Math.PI / 180;
        let a = this.x;
        let b = this.y;
        this.x += distance * Math.cos(rad);
        this.y += distance * Math.sin(rad);
        if(this.pen){
            this.canvas.beginPath();
            this.canvas.moveTo(a, b);
            this.canvas.lineTo(this.x, this.y);
            this.canvas.lineWidth = 5;
            this.canvas.stroke();
        }
    };
    //turtle moves backward
    this.re = function(distance) {
        this.av(distance*(-1));
    };
    //changes the color traces (RGB color)
    this.fcc = function(color) {
        this.canvas.strokeStyle = color;
    };
    //clean the screen and put turtle in center
    this.ve = function() {
        this.canvas.clearRect(0, 0, canvasElem.width, canvasElem.height);
        this.x = this.xBase;
        this.y = this.yBase;
    };
    //hide the turtle
    this.ct = function() {
        this.visible = false;
    };
    //show the turtle
    this.mt = function() {
        this.visible = true;
    };
}
