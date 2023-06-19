import { Square, breakPoint } from '../game.js';

export class Controller {
    constructor(playerPosition, playerVelocity) {
        this.playerPosition = playerPosition;
        this.playerVelocity = playerVelocity;
        this.controlSpeed = 10;
        this.keyLookup = {
            "w": {
                enabled: true,
                fn: this.arrowUp
            },
            "ArrowUp": {
                enabled: true,
                fn: this.arrowUp
            },
            " ": {
                enabled: true,
                fn: this.arrowUp
            }, // Spacebar
            "d": {
                enabled: true,
                fn: this.arrowRight
            },
            "ArrowRight": {
                enabled: true,
                fn: this.arrowRight
            },
            "s": { 
                enabled: true,
                fn: this.arrowDown
            },
            "ArrowDown": { 
                enabled: true,
                fn: this.arrowDown
            },
            "a": { 
                enabled: true,
                fn: this.arrowLeft
            },
            "ArrowLeft": { 
                enabled: true,
                fn: this.arrowLeft
            }
        }; 
    }

    // functions
    start() {}
    pause() {}

    // movement
    arrowUp(keyType) {
        if (!this.keyLookup.ArrowUp.enabled) return;
        if (keyType === 'keydown') { 
            this.playerVelocity.y -= this.controlSpeed;
        }
        else if (keyType === 'keyup') this.playerVelocity.y = 0;
    }
    arrowRight(keyType) {
        // disable movement past break points.
        // if (Square.position.x > breakPoint.right) return Plat.position.x -= this.controlSpeed;

        if (keyType === 'keydown') { 
            this.playerVelocity.x += this.controlSpeed;
            // if (this.playerPosition === breakPoint.right) {
            //     Plat.position.x -= this.controlSpeed;
            // }
        } else if (keyType === 'keyup') this.playerVelocity.x = 0;
    }
    arrowDown() {
        this.playerVelocity.y = 0;
    }
    arrowLeft(keyType) {
        // disable movement past break points.
        // if (Square.position.x < breakPoint.left) return Plat.position.x += this.controlSpeed; 

        if (keyType === 'keydown') this.playerVelocity.x -= this.controlSpeed;
        else if (keyType === 'keyup') this.playerVelocity.x = 0;
    }

    useControls(key, type, repeat) {
        if (repeat) this.keyLookup.ArrowUp.enabled = false;
        else this.keyLookup.ArrowUp.enabled = true;

        if (this.keyLookup.hasOwnProperty(key)) this.keyLookup[key].fn.call(this, type);
        else return;
    }
}