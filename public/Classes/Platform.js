import { c } from "../game.js";

export class Platform {
    constructor(position, width, height) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = width; 
        this.height = height
    };

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {
        c.fillStyle = 'black';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    };
}