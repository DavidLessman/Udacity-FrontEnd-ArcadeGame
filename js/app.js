let score = 0;
// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = y;
        this.speed = speed;
        this.halfWidth = 45;
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
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
            `images/char-pink-girl.png`,
            `images/char-boy.png`,
            `images/char-cat-girl.png`,
            `images/char-horn-girl.png`,
            `images/char-princess-girl.png`
        ]
        this.sprite = this.charArray[score];
        this.currentPosition = {
            x: 200,
            y: 400,
        }
    }
    update() {
        if (this.currentPosition.y === -20) {
            if (score === 4) {
                window.alert("you won!! press ok if you want to play again!");
                score = 0;
                this.resetPlayer();
            } else {
                score += 1;
                this.resetPlayer();
            }
        }
        switch (this.pressedKey) {
            case null:
                // no input. don't do anything. 
                break;
            case "left":
                // move left if player is not in the left boundary
                if (this.currentPosition.x === -40) {
                    this.currentPosition.x = 440;
                } else {
                    this.currentPosition.x -= 60;
                }
                break;
            case "up":
                // move up if player is not in the upper boundary
                if (this.currentPosition.y > 0) {
                    this.currentPosition.y -= 60;
                }
                break;
            case "right":
                // move right if player is not in the right boundary
                if (this.currentPosition.x === 440) {
                    this.currentPosition.x = -40;
                } else {
                    this.currentPosition.x += 60;
                }
                break;
            case "down":
                // move down if player is not in the down boundary
                if (this.currentPosition.y < 460) {
                    this.currentPosition.y += 60;
                }
                break;
        }
        // back to null
        this.pressedKey = null;
    }

    resetPlayer() {
        this.currentPosition.x = 200;
        this.currentPosition.y = 400;
        this.sprite = this.charArray[score];
        this.render;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.currentPosition.x, this.currentPosition.y);
    }

    handleInput(keyInput) {
        this.pressedKey = keyInput;
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
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
