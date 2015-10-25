const player = require('../player');
const input = require('../input')();

module.exports = (delta) => {
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
