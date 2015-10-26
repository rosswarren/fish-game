'use strict';

class GameObject {
    constructor(position, radius, render) {
        this.position = position;
        this.radius = radius;
        this.render = render;
        this.acceleration = {
            x: 0,
            y: 0
        };
    }
}

module.exports = GameObject;
