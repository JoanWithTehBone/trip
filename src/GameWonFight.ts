import Game from './Game.js';
import GameOverScene from './GameOverScene.js';

export default class GameWon extends GameOverScene {
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
    // Show score
    const centerX = this.game.canvas.width / 2;
    this.game.writeTextToCanvas('The Monster has been defeated!', 128, centerX, 250, 'center', 'red');
    // const msg = `${this.game.getUser().getName()} score: ${this.game.getUser().getScore()}`;
    // this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'yellow');
    this.game.writeTextToCanvas("Type 'R' to Replay", 48, centerX,
      550, 'center', 'white');
  }
}
