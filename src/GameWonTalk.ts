import Game from './Game.js';
import GameOverScene from './GameOverScene.js';

export default class GameWonTalk extends GameOverScene {
  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Draw the lose screen image:
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/GameOverScreens/GameOverLoseScreen.png'), 0, 0, this.game.canvas.width, this.game.canvas.height);
  }
}
