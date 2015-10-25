'use strict';

class GameObject {
    constructor(position, render) {
        this.position = position;
        this.render = render;
        this.acceleration = {
            x: 0,
            y: 0
        };
    }
}

module.exports = GameObject;
