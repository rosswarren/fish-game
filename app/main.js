'use strict';

const context = require('./context');
const canvas = require('./canvas');
const gameObjects = require('./game-objects');
const getDrawPosition = require('./draw-position');
const GameObject = require('./game-object');
const random = require('./random');

class Player extends GameObject {
    constructor(position, render) {
        super(position, render);

        this.color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }
}


gameObjects.push(new Player({
    x: canvas.width / 2,
    y: canvas.height / 2
}, function() {
    const radius = 70;

    context.beginPath();
    context.arc(getDrawPosition(this.position).x, getDrawPosition(this.position).y, radius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
}));

const gameLoop = require('./game-loop');

gameLoop.addLoopFunction(require('./update/camera-position'));
gameLoop.addLoopFunction(require('./update/handle-input'));
gameLoop.addLoopFunction(require('./update/apply-acceleration'));
gameLoop.addLoopFunction(require('./update/decay-acceleration'));
gameLoop.addLoopFunction(require('./update/cull-bubbles'));
gameLoop.addLoopFunction(require('./update/random-bubble-movement'));
gameLoop.addLoopFunction(require('./update/create-new-bubbles'));
gameLoop.addLoopFunction(require('./render/labels'));
gameLoop.addLoopFunction(require('./render/render'));

gameLoop.start();
