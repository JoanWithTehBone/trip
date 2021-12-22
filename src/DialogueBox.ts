import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';

export default class DialogueBox extends Scene {
  private display: boolean;

  private xPosition: number;

  private yPosition: number;

  private width: number;

  private height: number;

  private dialogueList: string[];

  private keyboard: KeyListener;

  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param xPos the x position
   * @param yPos the y position
   * @param dialogue the dialogye array
   */
  constructor(game: Game, xPos: number, yPos: number, dialogue: string[]) {
    super(game);
    this.display = false;
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.width = (this.game.canvas.width / 5) * 3;
    this.height = (this.game.canvas.height / 5);
    this.dialogueList = dialogue;

    this.keyboard = new KeyListener();
  }

  /**
   * Transition between dialogue scenes
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
      console.log('Moving on');
    }
  }

  /**
   * words
   *
   * @param elapsed the frames elapsed
   */
  public update(elapsed: number): Scene {
    throw new Error('Method not implemented.');
  }

  /**
   * words
   */
  public render(): void {
    throw new Error('Method not implemented.');
  }
}
