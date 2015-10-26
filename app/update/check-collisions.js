'use strict';

const gameObjects = require('../game-objects');
const player = require('../player');

module.exports = () => {
    for (let i = gameObjects.length - 1; i > 1; i--) {
        const gameObject = gameObjects[i];

        var dx = gameObject.position.x - player.position.x;
        var dy = gameObject.position.y - player.position.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < gameObject.radius + player.radius) {
            gameObjects.splice(i, 1);
        }
    }
};
