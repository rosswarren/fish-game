'use strict';

const context = require('./context');
const getDrawPosition = require('./draw-position');
const GameObject = require('./game-object');
const random = require('./random');

class Bubble extends GameObject {
    constructor(position, radius, render) {
        super(position, radius, render);

        this.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }
}

module.exports = (position) => {
    return new Bubble(position, 20, function() {
        context.beginPath();
        context.arc(getDrawPosition(this.position).x, getDrawPosition(this.position).y, this.radius, 0, 2 * Math.PI, false);
        context.closePath();
        context.globalAlpha = 0.2;
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.strokeStyle = 'white';
        context.globalAlpha = 1;
    });
};
