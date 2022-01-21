import Game from './Game.js';
import GameOverScene from './GameOverScene.js';
export default class GameWon extends GameOverScene {
    constructor(game) {
        super(game);
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/GameOverScreens/GameOverLoseScreen.png'), 0, 0, this.game.canvas.width, this.game.canvas.height);
    }
}
//# sourceMappingURL=GameWonFight.js.map