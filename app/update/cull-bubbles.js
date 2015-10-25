'use strict';

const gameObjects = require('../game-objects');

module.exports = (delta) => {
    for (let i = gameObjects.length - 1; i > 0; i--) {
        if (gameObjects[i].position.y <= 0) {
            gameObjects.splice(i, 1);
        }
    }
};
