import Game from './Game.js';
import GameOverScene from './GameOverScene.js';

export default class GameLose extends GameOverScene {
  /**
   * Constructor for the GameLose scene
   *
   * @param game the game object which this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
  }

  /**
   * Draw the specific scene to the canvas
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Draw the lose screen image:
    this.game.ctx.drawImage(Game.loadNewImage('./assets/img/GameOverScreens/GameOverLoseScreen.png'), 0, 0, this.game.canvas.width, this.game.canvas.height);
  }
}
