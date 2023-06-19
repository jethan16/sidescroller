import { canvas, c } from "../game.js";
// import platformPNG from '../assets/platform.png';

// TODO: Figure out why images blow up the app

export class Platform {
    constructor(position, width, height) {
        this.position = position;
        this.width = width; 
        this.height = height
    };

    draw() {
        c.fillStyle = 'black';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    };
}