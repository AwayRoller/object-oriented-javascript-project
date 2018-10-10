// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //enemy random positions
    this.x = -100;

    //console.log(Math.floor(1 + Math.random() * (4 - 1)) );
    //this.y = 60 + Math.floor(Math.random() * (3)) * 85;
    //console.log(this.y);
    this.speed = 1000;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 500) {
        this.x +=  this.speed *dt;
    } else {
        this.x = -100;
        this.y = 60 + Math.floor(Math.random() * (3)) * 85;
        this.speed = Math.floor(Math.random() * (3)) *150 + 200;
        console.log(this);
        setTimeout(function() {
        }, 500);
    }

    //console.log(this.x);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

    var dx = 101;
    var dy = 85;

    //assign keyboard keys to player movement
    switch (key) {
        case 'up':
            if (this.y > 0) {
                this.y -= dy;
            }
            break;
        case 'left':
            if (this.x > 0) {
                this.x -= dx;
            }

            break;
        case 'down':
            if (this.y < 400) {
                this.y += dy;
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += dx;
            }
            break;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var player = new Player(202,404);
var allEnemies = [];

for (var i=0; i<3; i++) {
    allEnemies.push(new Enemy(i));
}

console.log(allEnemies);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});