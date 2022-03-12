// var xoff1 = 0;
// var xoff2 = 10000;

var inc = 1;
var walkers = [];

function setup() {
    createCanvas(400, 250);

    while (walkers.length < 20) {
        let temp = new Walker(0);
        walkers.push(temp);
    }
    background(255);
}

function draw() {
    walkers.forEach(walker => {
        walker.update();
    });
    console.log(walkers[0]);
}