let score = 0;
let number = document.getElementById('score');
let icon1 = document.getElementById('1');
let icon2 = document.getElementById('2');
let icon3 = document.getElementById('3');
let icon4 = document.getElementById('4');
let icon5 = document.getElementById('5');

function ScoreboardUpdate() {


    switch (score) {
        case 0:
            break;
        case 1:
            number.innerText = "1";
            icon1.classList.remove("hide");
            break;
        case 2:
            number.innerText = "2";
            icon2.classList.remove("hide");
            break;
        case 3:
            number.innerText = "3";
            icon3.classList.remove("hide");
            break;
        case 4:
            number.innerText = "4";
            icon4.classList.remove("hide");
            break;
        case 5:
            if (confirm("You've won. Do you want to play again?") === true) {
                number.innerText = "0";
                icon1.classList.add("hide");
                icon2.classList.add("hide");
                icon3.classList.add("hide");
                icon4.classList.add("hide");
                icon5.classList.add("hide");
                score = 0;
            } else {
                number.innerText = "5";
                icon5.classList.remove("hide");
            };
            break;

    }
};

// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(row, direction) {
        this.x = 0;
        this.y = 55;
        this.direction = direction;
        this.speed = randomize(100, 500);
        this.halfWidth = 45;
        if (this.direction !== "right" && this.direction !== "left") {
            let i = randomize(1, 2);
            if (i === 1) {
                this.direction = "right";
            } else {
                this.direction = "left";
            };
        };
        if (this.direction === "right") {
            this.sprite = 'images/enemy-bug-right.png';
        } else {
            this.sprite = 'images/enemy-bug.png';
        };
        switch (row) {
            case 1:
                this.y = 55;
                break;
            case 2:
                this.y = 130;
                break;
            case 3:
                this.y = 205;
                break;
            default:
                this.y = (randomize(1, 3) * 75)-20;
                break;
        }
        if (this.direction === "left") {
            this.x = randomize(0, 50);
        } else {
            this.x = randomize(390, 440);
        }
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
         //You should multiply any movement by the dt parameter
         //which will ensure the game runs at the same speed for
         //all computers.
        if (this.direction === "right") {
            this.x -= this.speed * dt;
            if (this.x < -100) {
                this.x = randomize(500, 800);
                this.speed = randomize(100, 400);
            }
        } else {
            this.x += this.speed * dt;
            if (this.x > 500) {
                this.x = randomize(100, 200) * -1;
                this.speed = randomize(100, 400);
            };
        }
        if (player.currentPosition.y >= this.y - 50 && player.currentPosition.y <= this.y + 50) {
            if (player.currentPosition.x >= this.x - 50 && player.currentPosition.x <= this.x + 50) {
                alert("Ack, you need to avoid the bugs to get to the water.");
                player.resetPlayer();
            }
        }
    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.charArray = [
            'images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png'
        ]
        this.sprite = this.charArray[score];
        this.currentPosition = {
            x: 200,
            y: 375,
        }
    }
    update() {
        if (this.currentPosition.y <= 0) {
            score += 1;
            this.resetPlayer();
        };
        switch (this.pressedKey) {
            case null:
                // no input. don't do anything. 
                break;
            case "left":
                // move left if player is not in the left boundary
                if (this.currentPosition.x === -25) {
                    this.currentPosition.x = 425;
                } else {
                    this.currentPosition.x -= 75;
                }
                break;
            case "up":
                // move up if player is not in the upper boundary
                if (this.currentPosition.y >-20) {
                    this.currentPosition.y -= 75;
                    console.log(this.currentPosition.y);
                }
                break;
            case "right":
                // move right if player is not in the right boundary
                if (this.currentPosition.x === 425) {
                    this.currentPosition.x = -25;
                } else {
                    this.currentPosition.x += 75;
                }
                break;
            case "down":
                // move down if player is not in the down boundary
                if (this.currentPosition.y < 450) {
                    this.currentPosition.y += 75;
                    console.log(this.currentPosition.y);
                }
                break;
        }
        // back to null
        this.pressedKey = null;
    }

    resetPlayer() {
        this.currentPosition.x = 200;
        this.currentPosition.y = 375;
        ScoreboardUpdate();
        if (score < 5) {
            this.sprite = this.charArray[score];
            this.render;
        } 
        
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.currentPosition.x, this.currentPosition.y);
    }

    handleInput(keyInput) {
        this.pressedKey = keyInput;
    }
}


// Now instantiate your objects.
let enemy1 = new Enemy(1, "left");
let enemy2 = new Enemy(2, "right");
let enemy3 = new Enemy(3, "left");
let enemy4 = new Enemy(4, "green");
let enemy5 = new Enemy(5, "black");
let enemy6 = new Enemy(6, "red");
let enemy7 = new Enemy(7, "blue");
let enemy8 = new Enemy(8, "yellow");
let enemy9 = new Enemy(9, "white");


// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9];
// Place the player object in a variable called player
var player = new Player;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function randomize(min, max) { 
    let i = Math.floor(Math.random() * (max - (min - 1)) + min);

    if (i > 0) {
        return i;
    } else if (i < 0) {
        i = i * -1;
        return i;
    } else {
        i = ((max - min) / 2) + min;
    }
    return i;
}
