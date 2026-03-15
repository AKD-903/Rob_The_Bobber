let clickcount = 0;
let shape = "";
let selectedboxX;
let selectedCameraX;
let selectedCameraY;
let laserx;
let lasery;
let laserpositions = [];
let guardX;
let guardY;
let guardpositions = [];
let selectedboxY;
let doorPositions = [];
let camerapositions = [];
let stairpositions = [];


function setup() {
createCanvas(500, 300);
clickcount = 0;
}

function draw() {
background(220);
for (i = 0; i <= width; i += 50) {
    stroke(0)
    strokeWeight(2)
    line(i,50,i,height)
    line(0,i,width,i)
}
cycle();
display();
textSize(13.8)
text("Click a box to place your selected item, use C to swap between items, S to save.", 5, 20)
text("Anything blank will be just a floor.    Selected Item: " + shape, 50, 40)
textSize(12)
text("Start", 5, 80)
text("End", width - 35, height - 20)
}

function cycle() {
if(clickcount === 0) {
shape = "Door"
}
if (clickcount === 1) {
shape = "Camera"
}
if (clickcount === 2) {
shape = "Guard"
} if (clickcount === 3) {
shape = "Stair"
}
if (clickcount === 4) {
    shape = "Laser"
}
}
function keyPressed() {
console.log("Key HAS BEEN PRESSED!")
console.log(key)
if (clickcount === 4) {
clickcount = 0
} else{
    if (key === 'c') {
    clickcount++
    }
    if(key === 's') {
    savelevel();
    }
}
}
function display() {
// Door
if (shape === "Door" && mouseIsPressed) {
    if (mouseX < 50) {
    selectedboxX = 10;
    } else if (mouseX < 100) {
    selectedboxX = 60;
    } else if (mouseX < 150) {
    selectedboxX = 110;
    } else if (mouseX < 200) {
    selectedboxX = 160;
    } else if (mouseX < 250) {
    selectedboxX = 210;
    } else if (mouseX < 300) {
    selectedboxX = 260;
    } else if (mouseX < 350) {
    selectedboxX = 310;
    } else if (mouseX < 400) {
    selectedboxX = 360;
    } else if (mouseX < 450) {
    selectedboxX = 410;
    } else {
    selectedboxX = 460;
    }

    if (mouseY < 100) {
    selectedboxY = 75;
    } else if (mouseY < 150) {
    selectedboxY = 125;
    } else if (mouseY < 200) {
    selectedboxY = 175;
    } else if (mouseY < 250) {
    selectedboxY = 225;
    } else if (mouseY < 300) {
    selectedboxY = 275;
    }
    if(!(selectedboxX === 10 && selectedboxY === 75)) {
        if (!(selectedboxX === 460 && selectedboxY === 275)) {
        removeItemAtPosition(selectedboxX, selectedboxY);
        doorPositions.push({ x: selectedboxX, y: selectedboxY });
        }
    }
}
for (let i = 0; i < doorPositions.length; i++) {
    text("Door", doorPositions[i].x, doorPositions[i].y);
}

// Camera
if (shape === "Camera" && mouseIsPressed) {
    if (mouseX < 50) {
    selectedCameraX = 10;
    } else if (mouseX < 100) {
    selectedCameraX = 60;
    } else if (mouseX < 150) {
    selectedCameraX = 110;
    } else if (mouseX < 200) {
    selectedCameraX = 160;
    } else if (mouseX < 250) {
    selectedCameraX = 210;
    } else if (mouseX < 300) {
    selectedCameraX = 260;
    } else if (mouseX < 350) {
    selectedCameraX = 310;
    } else if (mouseX < 400) {
    selectedCameraX = 360;
    } else if (mouseX < 450) {
    selectedCameraX = 410;
    } else {
    selectedCameraX = 460;
    }

    if (mouseY < 100) {
    selectedCameraY = 75;
    } else if (mouseY < 150) {
    selectedCameraY = 125;
    } else if (mouseY < 200) {
    selectedCameraY = 175;
    } else if (mouseY < 250) {
    selectedCameraY = 225;
    } else if (mouseY < 300) {
    selectedCameraY = 275;
    }
    if(!(selectedCameraX === 10 && selectedCameraY === 75)) {
        if (!(selectedCameraX === 460 && selectedCameraY === 275)) {
        removeItemAtPosition(selectedCameraX, selectedCameraY);
        camerapositions.push({ x: selectedCameraX, y: selectedCameraY });
        }
    }
}
textSize(11)
for (let i = 0; i < camerapositions.length; i++) {
    text("Camera", camerapositions[i].x, camerapositions[i].y);
}
//Laser
if (shape === "Laser" && mouseIsPressed) {
if (mouseX < 50) {
laserx = 10;
} else if (mouseX < 100) {
laserx = 60;
} else if (mouseX < 150) {
laserx = 110;
} else if (mouseX < 200) {
laserx = 160;
} else if (mouseX < 250) {
laserx = 210;
} else if (mouseX < 300) {
laserx = 260;
} else if (mouseX < 350) {
laserx = 310;
} else if (mouseX < 400) {
laserx = 360;
} else if (mouseX < 450) {
laserx = 410;
} else {
laserx = 460;
}

if (mouseY < 100) {
lasery = 75;
} else if (mouseY < 150) {
lasery = 125;
} else if (mouseY < 200) {
lasery = 175;
} else if (mouseY < 250) {
lasery = 225;
} else if (mouseY < 300) {
lasery = 275;
}
if(!(laserx === 10 && lasery === 75)) {
    if (!(laserx === 460 && lasery === 275)) {
    removeItemAtPosition(laserx, lasery);
    laserpositions.push({ x: laserx, y: lasery });
    }
}
}
for (let i = 0; i < laserpositions.length; i++) {
text("Laser", laserpositions[i].x, laserpositions[i].y);
}
// Guard
if (shape === "Guard" && mouseIsPressed) {
    if (mouseX < 50) {
    guardX = 10;
    } else if (mouseX < 100) {
    guardX = 60;
    } else if (mouseX < 150) {
    guardX = 110;
    } else if (mouseX < 200) {
    guardX = 160;
    } else if (mouseX < 250) {
    guardX = 210;
    } else if (mouseX < 300) {
    guardX = 260;
    } else if (mouseX < 350) {
    guardX = 310;
    } else if (mouseX < 400) {
    guardX = 360;
    } else if (mouseX < 450) {
    guardX = 410;
    } else {
    guardX = 460;
    }

    if (mouseY < 100) {
    guardY = 75;
    } else if (mouseY < 150) {
    guardY = 125;
    } else if (mouseY < 200) {
    guardY = 175;
    } else if (mouseY < 250) {
    guardY = 225;
    } else if (mouseY < 300) {
    guardY = 275;
    }

    if(!(guardX === 10 && guardY === 75)) {
        if (!(guardX === 460 && guardY === 275)) {
        removeItemAtPosition(guardX, guardY);
        guardpositions.push({ x: guardX, y: guardY });
        }
    }
}
textSize(12.5)
for (let i = 0; i < guardpositions.length; i++) {
    text("Guard", guardpositions[i].x, guardpositions[i].y);
}

// Stair
if (shape === "Stair" && mouseIsPressed) {
    if (mouseX < 50) {
    stairX = 10;
    } else if (mouseX < 100) {
    stairX = 60;
    } else if (mouseX < 150) {
    stairX = 110;
    } else if (mouseX < 200) {
    stairX = 160;
    } else if (mouseX < 250) {
    stairX = 210;
    } else if (mouseX < 300) {
    stairX = 260;
    } else if (mouseX < 350) {
    stairX = 310;
    } else if (mouseX < 400) {
    stairX = 360;
    } else if (mouseX < 450) {
    stairX = 410;
    } else {
    stairX = 460;
    }

    if (mouseY < 100) {
    stairY = 75;
    } else if (mouseY < 150) {
    stairY = 125;
    } else if (mouseY < 200) {
    stairY = 175;
    } else if (mouseY < 250) {
    stairY = 225;
    } else if (mouseY < 300) {
    stairY = 275;
    }

    if(!(stairX === 10 && stairY === 75)) {
        if (!(stairX === 460 && stairY === 275)) {
        removeItemAtPosition(stairX, stairY);
        stairpositions.push({ x: stairX, y: stairY});
        }
    }
}
textSize(12.5)
for (let i = 0; i < stairpositions.length; i++) {
    text("Stair",  stairpositions[i].x,  stairpositions[i].y);
}
}

function savelevel() {
let grid = [];
for (let i = 0; i < 5; i++) {
    grid[i] = [];
    for (let j = 0; j < 10; j++) {
        grid[i][j] = '_';
    }
}

doorPositions.forEach(function(door) {
let xIndex = floor(door.x / 50);
let yIndex = floor(door.y / 50);
if (yIndex == 5) {
    yIndex = 4
}
grid[yIndex][xIndex] = '|';
});

camerapositions.forEach(function(camera) {
let xIndex = floor(camera.x / 50);
let yIndex = floor(camera.y / 50);
if (yIndex == 5) {
    yIndex = 4
}
grid[yIndex][xIndex] = '#';
});

guardpositions.forEach(function(guard) {
    let xIndex = floor(guard.x / 50);
    let yIndex = floor(guard.y / 50);
    if (yIndex == 5) {
        yIndex = 4
    }
    grid[yIndex][xIndex] = '*';
});

stairpositions.forEach(function(stair) {
    let xIndex = floor(stair.x / 50);
    let yIndex = floor(stair.y / 50);
    if (yIndex == 5) {
        yIndex = 4
    }
    console.log(stair.y, yIndex)
    grid[yIndex][xIndex] = '.';
})

laserpositions.forEach(function(laser) {
    let xIndex = floor(laser.x / 50);
    let yIndex = floor(laser.y / 50);
    if (yIndex == 5) {
        yIndex = 4
    }
    console.log(laser.y, yIndex)
    grid[yIndex][xIndex] = '.';
})


grid[0][0] = '+';
grid[4][9] = '=';
let output = '';

for (let i = 0; i < 5; i++) {
output += grid[i].join('') + '\n';
}
    
// Save map to sessionStorage
console.log(output)
sessionStorage.setItem('custom_user_made_map', output);
setTimeout(function() {
    window.location.href = '../index.html';
    }, 500);
}

function removeItemAtPosition(x, y) {
doorPositions = doorPositions.filter(p => !(p.x === x && p.y === y));
camerapositions = camerapositions.filter(p => !(p.x === x && p.y === y));
guardpositions = guardpositions.filter(p => !(p.x === x && p.y === y));
stairpositions = stairpositions.filter(p => !(p.x === x && p.y === y))
}

