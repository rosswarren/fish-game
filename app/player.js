'use strict';

const random = require('./random');
const GameObject = require('./game-object');
const context = require('./context');
const canvas = require('./canvas');
const getDrawPosition = require('./draw-position');

class Player extends GameObject {
    constructor(position, render) {
        super(position, render);

        this.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }
}

module.exports = new Player({
    x: canvas.width / 2,
    y: canvas.height / 2
}, function() {
    const radius = 70;

    context.beginPath();
    context.arc(getDrawPosition(this.position).x, getDrawPosition(this.position).y, radius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
});
