'use strict';

module.exports = function() {
    const keysDown = [];

    document.onkeydown = keyDown;
    document.onkeyup = keyUp;

    function getKey(code) {
        switch(code) {
        case 38:
            return 'up';
        case 40:
            return 'down';
        case 37:
            return 'left';
        case 39:
            return 'right';
        default:
            return 'other';
        }
    }

    function keyUp(e) {
        const key = getKey(e.keyCode);

        if (keysDown.indexOf(key) !== -1) {
            keysDown.splice(keysDown.indexOf(key), 1);
        }
    }

    function keyDown(e) {
        const key = getKey(e.keyCode);

        if (keysDown.indexOf(key) === -1) {
            keysDown.push(key);
        }
    }

    return {
        getKeysDown: function() {
            return keysDown;
        }
    };
};
