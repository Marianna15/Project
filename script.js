    var matrix = []
    objectInMatrix = [1, 2, 3, 4, 5]
objectInMatrixCounts = [450, 200, 125, 100, 25]
for (var y = 0; y < 30; y++) {
    matrix.push([]);
    for (var x = 0; x < 30; x++) {
        matrix[y][x] = 0;

    }
}
for (var i = 0; i < objectInMatrix.length; i++) {
    fillMatrix(objectInMatrix[i],objectInMatrixCounts[i]);
}


    function fillMatrix(type, count) {
        for (var i = 0; i < count; i++) {
            var newx = Math.floor(Math.random() * 30)
            var newy = Math.floor(Math.random() * 30)
            if (matrix[newy][newx] == 0) {
                    matrix[newy][newx] = type
            }
            else {
                i--
            }
        }
    }





var side = 20;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vorsordArr = [];
var amenakerArr = [];
// var matrix = [ 
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,1,0,0,0,0,0,0,1,0],
//     [1,1,0,0,0,0,0,0,1,0],
//     [1,0,0,0,2,0,0,0,0,0],
//     [0,0,4,0,5,5,0,0,1,0],
//     [0,0,0,4,5,5,0,0,1,0],
//     [0,0,2,0,0,0,2,0,1,0],
//     [0,0,0,0,0,0,0,0,1,0],
//     [0,1,1,1,0,0,0,4,1,0],
//     [0,0,0,0,1,0,0,0,1,0]
// ]
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)

        }
        else if (matrix[y][x] == 2) {

            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {

            var gi = new Gishatich(x, y)
            gishatichArr.push(gi)
        }
        else if (matrix[y][x] == 4) {

            var vs = new vorsord(x, y)
            vorsordArr.push(vs)
        }
        else if (matrix[y][x] == 5) {

            var am = new amenaker(x, y)
            amenakerArr.push(am)
        }

    }
}


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);


            // fill("blue")
            //text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()

    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()

    }
    for (var i in vorsordArr) {
        vorsordArr[i].eat()
        vorsordArr[i].move()
        vorsordArr[i].mult()
        vorsordArr[i].die()

    }
    for (var i in amenakerArr) {
        amenakerArr[i].eat()
        amenakerArr[i].move()
        amenakerArr[i].mult()
        amenakerArr[i].die()

    }
}
