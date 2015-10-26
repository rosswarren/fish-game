'use strict';

const random = require('./random');
const GameObject = require('./game-object');
const context = require('./context');
const canvas = require('./canvas');
const getDrawPosition = require('./draw-position');

const background = new Image();
background.src = '/puffed.gif';

background.onload = () => {
};

class Player extends GameObject {
    constructor(position, radius, render) {
        super(position, radius, render);

        this.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }
}

const degrees = (radians) => {
    return radians * 180 / Math.PI;
};

const radians = (degrees) => {
    return degrees * Math.PI / 180;
};

module.exports = new Player({
    x: canvas.width / 2,
    y: canvas.height / 2
}, 70, function() {
    context.save();
    context.translate(getDrawPosition(this.position).x, getDrawPosition(this.position).y);
    context.rotate( - Math.atan2(this.acceleration.x, this.acceleration.y) - radians(90));
    context.drawImage(background, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
    context.restore();
});
