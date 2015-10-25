const gameObjects = require('../game-objects');
const input = require('../input')();

module.exports = (delta) => {
    const player = gameObjects[0];
    const keysDown = input.getKeysDown();

    if (keysDown.indexOf('up') !== -1) {
        player.acceleration.y -= delta;
    }

    if (keysDown.indexOf('down') !== -1) {
        player.acceleration.y += delta;
    }

    if (keysDown.indexOf('left') !== -1) {
        player.acceleration.x -= delta;
    }

    if (keysDown.indexOf('right') !== -1) {
        player.acceleration.x += delta;
    }
};
