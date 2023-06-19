import {c, canvas, gravity} from '../game.js';
import { Controller } from '../Classes/Controls.js';

export class Player {
    constructor(
        height,
        width,
        position, 
        velocity 
    ) {
        const PlayerControls = new Controller(position, velocity)

        this.height = height;
        this.width = width;
        this.position = position;
        this.velocity = velocity;
        this.velocityLimit = 10
        this.playerController = PlayerControls;
    };

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
        else this.velocity.y = 0;
    };

    controlCharacter({key, type, repeat}) {
        this.playerController.useControls(key, type, repeat);
    }
};

