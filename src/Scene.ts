import Game from './Game.js';

/**
 * A superclass for objects that must be able to be animated by a `GameLoop`.
 *
 * Implementing classes must override the three methods `processInput()`,
 * `update(elapsed)` and `render()`.
 *
 * @see GameLoop
 * @author BugSlayer
 */
export default abstract class Scene {
  protected readonly game: Game;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    this.game = game;
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public abstract processInput(): void;

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
  public abstract update(elapsed: number): Scene;

  /**
   * Draw the game so the player can see what happened
   */
  public abstract render(): void;
}
