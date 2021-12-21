import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';

export default class Level extends Scene {
  // Player
  private player: Player;
  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);

    // Create player
    this.player = new Player(this.game.canvas.width, this.game.canvas.height);
  }


  private hasWon(): boolean {
    const user = this.game.getUser();
    return user.getScore() >= user.getLevel() * 10;
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    // Move the player
    this.player.move(this.game.canvas);
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(): Scene {

    // Move to level clear screen
    if (this.hasWon()) {
      return new LevelUp(this.game);
    }

    // Move to gameover screen
    if (this.game.getUser().getScore() < 0) {
      return new GameOver(this.game);
    }

    return null;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.player.draw(this.game.ctx);
  }
}
