'use strict';

const gameObjects = require('../game-objects');
const bubbleFactory = require('../bubble-factory');
const random = require('../random');
const boundary = require('../boundary');

const getRandomPosition = () => {
    return {
        x: random(boundary.x),
        y: random(boundary.y)
    };
};

let counter = 0;

module.exports = (delta) => {
    counter += delta;

    if (counter > 1000) {
        gameObjects.push(bubbleFactory({ x: getRandomPosition().x, y: boundary.y }));
        counter = 0;
    }
};
