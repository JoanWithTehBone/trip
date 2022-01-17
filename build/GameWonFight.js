import GameOver from './GameOver.js';
export default class GameWon extends GameOver {
    constructor(game) {
        super(game);
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('The Monster has been defeated!', 128, centerX, 250, 'center', 'red');
        this.game.writeTextToCanvas("Type 'R' to Replay", 48, centerX, 550, 'center', 'white');
    }
}
//# sourceMappingURL=GameWonFight.js.map