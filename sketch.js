
function setup() { 
    createCanvas(640, 360);
    design();   
}

function design() {
    var r = random(250,0)
    var g = random(250,0)
    var b = random(250,0)
    var a = random(250,0)
    background(r, g, b, a);
    rectMode(CENTER);

    var column = width/5;
    var row = height/3;
    for (var x = 0; x <= width; x += column) {

        for (var y = 0; y <= height; y += row) {
            var r = random(20,255)
            var g = random(20,255)
            var b = random(20,255)
            fill(r, g, b);

            var size = random(85);

            noStroke();
            ellipse(x, y, size, size)

        }

    }
}

function mouseClicked() {
    design();
}