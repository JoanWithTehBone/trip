import GameLoop from './GameLoop.js';
import Start from './Start.js';
import UserData from './UserData.js';
export default class Game {
    canvas;
    ctx;
    playerStats;
    gameLoop;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gameLoop = new GameLoop();
        this.gameLoop.start(new Start(this));
    }
    getPlayerStats() {
        return this.playerStats;
    }
    reset() {
        this.playerStats = new UserData(20, 3, 2);
    }
    writeTextToCanvas(text, fontSize = 14, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map