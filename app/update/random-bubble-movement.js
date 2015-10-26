'use strict';

const gameObjects = require('../game-objects');
const random = require('../random');

module.exports = (delta) => {
    gameObjects.slice(1, gameObjects.length - 1).forEach((gameObject) => {
        switch(random(4)) {
        case 1:
            gameObject.acceleration.y -= delta;
            break;
        case 2:
            //gameObject.acceleration.y += delta;
            break;
        case 3:
            gameObject.acceleration.x -= delta;
            break;
        case 4:
            gameObject.acceleration.x += delta;
            break;
        }
    });
};
