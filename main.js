canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
roverX = 10;
roverY = 10;
mars_image_array = ["mars.jpg", "Mars1.jpg", "Mars 2.jpg", "Mars 3.jpg", "Mars 4.jpg"];
random_number = Math.floor(Math.random() * 5);
background_image = mars_image_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover;
    rover_image_tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_image_tag, roverX, roverY, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log("keypress = " + keypress);

    if (keypress == "37") {
        console.log("keypress is left");
        left();
    }

    if (keypress == "38") {
        console.log("keypress is up");
        up();
    }

    if (keypress == "39") {
        console.log("keypress is right");
        right();
    }

    if (keypress == "40") {
        console.log("keypress is down");
        down();
    }
}

function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (roverX <= 700) {
        roverX = roverX + 10;
        uploadBackground();
        uploadRover();
    }
}

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (roverY <= 500) {
        roverY = roverY + 10;
        uploadBackground();
        uploadRover();
    }
}