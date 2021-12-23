import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import DialogueBox from './DialogueBox.js';
import Baker from './Baker.js';
import BlackSmith from './BlackSmith.js';
import Hunter from './Hunter.js';
import KeyListener from './KeyListener.js';

export default class Level extends Scene {
  // Player
  private player: Player;

  private dialogueBox: DialogueBox;

  private baker: Baker;

  private blackSmith: BlackSmith;

  private hunter: Hunter;

  private keyboard: KeyListener;

  // Progression Values for each Character
  private hunterProgression: number;

  private blacksmithProgression: number;

  private bakerProgression: number;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    // Create Characters
    this.baker = new Baker();
    this.blackSmith = new BlackSmith();
    this.hunter = new Hunter(game);

    this.dialogueBox = new DialogueBox(
      this.game,
      this.game.canvas.width / 2 - 350,
      (this.game.canvas.height / 5) * 3.5,
      this.hunter,
    );

    // Create player
    this.player = new Player(
      game.canvas.width / 2,
      game.canvas.height / 2,
      this.hunter,
      this.baker,
      this.blackSmith,
      this.dialogueBox,
    );
    this.keyboard = this.player.getKeys();
    // Create Progression Values
    this.hunterProgression = 0;
    this.blacksmithProgression = 0;
    this.bakerProgression = 0;
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
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(): Scene {
    // this.player.onFrameStartListener();
    this.keyboard.onFrameStart();

    this.player.interactWithBaker();

    this.player.interactWithBlackSmith();

    if (this.player.isPressing()) {
      this.player.interactWithHunter();
    }

    if (this.player.isContinuing()) {
      this.dialogueBox.setDisplay(false);
    }

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
    this.baker.draw(this.game.ctx);
    this.blackSmith.draw(this.game.ctx);
    this.hunter.draw(this.game.ctx);

    this.dialogueBox.drawBox(this.game.ctx);

    this.interact();
  }

  private interact() {
    const score = `Score: ${this.game.getUser().getScore()}`;
    this.game.writeTextToCanvas(score, 36, 120, 50);

    // Show HP
    const hp = `HP: ${this.game.getUser().getHP()}`;
    this.game.writeTextToCanvas(hp, 36, 120, 100);
  }
}
