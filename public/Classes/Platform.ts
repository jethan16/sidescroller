import { c } from "../game.js";
// const platformPNG = new Image();
// platformPNG.src='../images/platform.png'

export class Platform {
    position: {x: number; y: number;};
    velocity: {x: number; y: number;};
    width: number;
    height: number;
    constructor(position: {x: number; y: number;}, width: number, height: number) {
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
        c!.fillStyle = 'black';
        // c!.drawImage(platformPNG, this.position.x, this.position.y, this.width, this.height)
        c?.fillRect(this.position.x, this.position.y, this.width, this.height)
    };
}