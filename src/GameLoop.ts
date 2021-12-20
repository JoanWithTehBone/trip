import Scene from './Scene.js';

/**
 * Represents a basic Game Loop based on `requestAnimationFrame()`.
 *
 * The implementation of this class depends on another class: `Scene`. This
 * means that, if you use this class, you must have a class that is a subclass
 * of `Scene` that overides the three methods `processInput()`, `update(elapsed)`
 * and `render()`.
 *
 * It is possible for a game to switch to another Scene object during the game, so
 * you can create different classes for each game screen, levels, etc. To let the
 * gameloop switch to another scene, you must return an instance of a new Scene
 * subclass in the `update(elapsed)` method. See the documentation of that method
 * in the `Scene` class for more information on this.
 *
 * @see Scene
 * @see https://gameprogrammingpatterns.com/game-loop.html
 * @author BugSlayer
 */
export default class GameLoop {
  public static readonly STATE_IDLE = 0;

  public static readonly STATE_STARTING = 1;

  public static readonly STATE_RUNNING = 2;

  public static readonly STATE_STOPPING = 3;

  public static readonly NORMAL_MODE = 0;

  public static readonly PLAY_CATCH_UP = 1;

  /**
   * The current mode of the gameloop
   */
  private mode: number;

  /**
   * The current state of this gameloop
   */
  private state: number;

  /**
   * The game to animate
   */
  private currentScene: Scene;

  private previousElapsed: number;

  /**
   * Holds the start time of the game
   */
  private gameStart: number;

  /**
   * Holds the time where the last animation step method ended.
   */
  private frameEnd: number;

  /**
   * The total time in milliseconds that is elapsed since the start of the
   * game
   */
  public gameTime: number;

  /**
   * The amount of frames that are processed since the start of the game
   */
  public frameCount: number;

  /**
   * The timestamp of the exact moment where the gameloop has started
   * animating the current scene
   */
  public sceneStart: number;

  /**
   * The elapsed time between `sceneStart` and the timestamp of the current
   * frame
   */
  public sceneTime: number;

  /**
   * The amount of frames that are processed since `sceneStart`
   */
  public sceneFrameCount: number;

  /**
   * An indication of the current crames per second of this gameloop
   */
  public fps: number;

  /**
   * An indication of the load of this gameloop. The load is the ratio between
   * the time needed to update the game and the time the computer waits to
   * render the next frame.
   */
  public load: number;

  /**
   * Construct a new instance of this class.
   *
   * @param mode OPTIONAL, the mode of the gameloop. It defaults to
   *   GameLoop.NORMAL_MODE, which is fine for simple games
   */
  constructor(mode: number = GameLoop.NORMAL_MODE) {
    this.state = GameLoop.STATE_IDLE;
    this.mode = mode;
  }

  /**
   * Start the game loop.
   *
   * @param scene the game to start animating
   */
  public start(scene: Scene): void {
    if (this.state === GameLoop.STATE_IDLE) {
      this.state = GameLoop.STATE_STARTING;
      this.gameStart = performance.now();
      this.frameEnd = this.gameStart;
      this.previousElapsed = this.gameStart;
      this.gameTime = 0;
      this.frameCount = 0;
      this.setNextScene(scene);
      requestAnimationFrame(this.step);
    }
  }

  /**
   * Requests to gracefully stop the gameloop.
   */
  public stop(): void {
    this.state = GameLoop.STATE_STOPPING;
  }

  /**
   * Returns `true` if the given state exactly matches the current state of
   * this object
   *
   * @param state the state to check
   * @returns `true` if the given state exactly matches the current state of
   *   this object
   */
  public isInState(state: number): boolean {
    return this.state === state;
  }

  /*
   * Sets the next scene to animate
   *
   * @param next the next scene to animate
   */
  private setNextScene(next: Scene) {
    if (next === null) {
      // Throw an error if someone tries to set currentScene to `null`
      throw new Error('`null` as a scene is not allowed');
    }
    this.currentScene = next;
    this.sceneStart = performance.now();
    this.sceneTime = 0;
    this.sceneFrameCount = 0;
  }

  /**
   * This MUST be an arrow method in order to keep the `this` variable working
   * correctly. It will be overwritten by another object otherwise caused by
   * javascript scoping behaviour.
   *
   * @param timestamp a `DOMHighResTimeStamp` similar to the one returned by
   *   `performance.now()`, indicating the point in time when `requestAnimationFrame()`
   *   starts to execute callback functions
   */
  private step = (timestamp: number) => {
    // Handle first animation frame
    if (this.isInState(GameLoop.STATE_STARTING)) {
      this.state = GameLoop.STATE_RUNNING;
    }

    this.currentScene.processInput();

    // Let the game update itself
    let nextScene: Scene = null;
    if (this.mode === GameLoop.PLAY_CATCH_UP) {
      const step = 1;
      while (this.previousElapsed < timestamp && !nextScene) {
        nextScene = this.currentScene.update(step);
        this.previousElapsed += step;
      }
    } else {
      const elapsed = timestamp - this.previousElapsed;
      nextScene = this.currentScene.update(elapsed);
      this.previousElapsed = timestamp;
    }

    if (nextScene) {
      this.setNextScene(nextScene);
    } else {
      // Let the game render itself
      this.currentScene.render();
    }

    // Check if a next animation frame needs to be requested
    if (!this.isInState(GameLoop.STATE_STOPPING)) {
      requestAnimationFrame(this.step);
    } else {
      this.state = GameLoop.STATE_IDLE;
    }

    // Handle time measurement and analysis
    const now = performance.now();
    const stepTime = timestamp - now;
    const frameTime = now - this.frameEnd;
    this.fps = Math.round(1000 / frameTime);
    this.load = stepTime / frameTime;
    this.frameEnd = now;
    this.gameTime = now - this.gameStart;
    this.sceneTime = now - this.sceneStart;
    this.frameCount += 1;
    this.sceneFrameCount += 1;
  };
}
