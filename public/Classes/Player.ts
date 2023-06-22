import {c, canvas, gravity} from '../game.js';
import { Controller } from './Controls.js';

export class Player {
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    velocity: {
        x: number;
        y: number;
    }
    velocityLimit: number;
    playerController: any;
    isJumping: boolean;

    constructor(
        height: number,
        width: number,
        position: { x: number; y: number; }, 
        velocity: { x: number; y: number; } 
    ) {
        const PlayerControls = new Controller(position, velocity);

        this.height = height;
        this.width = width;
        this.position = position;
        this.velocity = velocity;
        this.velocityLimit = 10
        this.playerController = PlayerControls;
        this.isJumping = false;
    };

    draw() {
        c!.fillStyle = 'red';
        c!.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas!.height) this.velocity.y += gravity;
        else this.velocity.y = 0;
    };
    controlCharacter(e: KeyboardEvent) {
        const {key, type, repeat} = e;
        this.playerController.useControls(key, type, repeat);
    }
};

