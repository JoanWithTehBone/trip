import GameOver from './GameOver.js';
export default class GameLose extends GameOver {
    constructor(game) {
        super(game);
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('Game Over', 128, centerX, 250, 'center', 'red');
        this.game.writeTextToCanvas("Type 'R' to Replay", 48, centerX, 550, 'center', 'white');
    }
}
//# sourceMappingURL=GameLose.js.map