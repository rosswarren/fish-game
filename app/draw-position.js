'use strict';

const camera = require('./camera');

module.exports = (position) => {
    return {
        x: position.x - camera.position.x,
        y: position.y - camera.position.y
    };
};
