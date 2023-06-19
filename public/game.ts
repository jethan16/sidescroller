import { Player } from './Classes/Player';
import { Platform } from './Classes/Platform'
export const canvas = document.querySelector('canvas');
export const c = canvas?.getContext('2d');

canvas!.setAttribute('width', (window.innerWidth - 10).toString())
canvas!.setAttribute('height', (window.innerHeight * .5).toString())

export const breakPoint = {
    left: 200,
    right: canvas!.width * .5
};
export const playerStart = {
    x: canvas?.width ?? 0 - (canvas!.width - 300),
    y: canvas?.height ?? 0 - 50
};
export const Square = new Player(50, 50, {...playerStart}, {x: 0, y: 0});

export const platforms = [
    new Platform({x: canvas!.width - canvas!.width + 100, y: canvas!.height - 25}, 200, 20), 
    new Platform({x: canvas!.width - canvas!.width + 400, y: canvas!.height - 75}, 200, 20),
    new Platform({x: canvas!.width - canvas!.width + 700, y: canvas!.height - 75}, 200, 20),
    new Platform({x: canvas!.width - canvas!.width + 1000, y: canvas!.height - 175}, 200, 20),
    new Platform({x: canvas!.width - canvas!.width + 1300, y: canvas!.height - 225}, 200, 20),
    new Platform({x: canvas!.width - canvas!.width + 1600, y: canvas!.height - 275}, 200, 20),
];

// TODO: Make this a class
export const gravity = .5;

// Game methods
export const animate = () => {
    requestAnimationFrame(animate);
    c?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);

    Square.update();

    platforms.forEach(platform => {
        platform.update();
        // Platform collision detetion
        if (
            Square.position.y + Square.height <= platform.position.y 
            && Square.position.y + Square.height + Square.velocity.y >= platform.position.y
            && Square.position.x + Square.width >= platform.position.x
            && Square.position.x <= platform.position.x + platform.width
        ) { Square.velocity.y = 0; }
    });
    
    if (Square.position.x < breakPoint.left || Square.position.x > breakPoint.right) {
        Square.velocity.x = 0;
    }
};

export const startGame = () => {
    animate()
    window.addEventListener('keydown', (e) => {Square.controlCharacter(e)});
    window.addEventListener('keyup', (e) => {Square.controlCharacter(e)});
}
export const logger = () => console.log('logger!')

