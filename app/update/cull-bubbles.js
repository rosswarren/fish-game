'use strict';

const gameObjects = require('../game-objects');

module.exports = () => {
    for (let i = gameObjects.length - 1; i > 0; i--) {
        if (gameObjects[i].position.y < 0) {
            gameObjects.slice(i, 1);
        }
    }
};
