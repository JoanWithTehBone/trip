import Game from './Game.js';
import GameItem from './GameItem.js';

export default class BakerQuestBox extends GameItem {
  private display: boolean;

  private currentDialogue: number;

  private xPosition: number;

  private yPosition: number;

  private textXPos: number;

  private textYPos: number;

  private dialogueList: string[];

  private game: Game;

  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param xPos the x position
   * @param yPos the y position
   */
  constructor(game: Game, xPos: number, yPos: number) {
    super('', xPos, yPos);
    this.display = true;
    // Positioning
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.textXPos = xPos + 250;
    this.textYPos = yPos + 75;
    console.log(this.dialogueList);

    this.game = game;
  }

  /**
   * Method to draw the whole Box to the screen.
   *
   * TODO => Create an custom version of the textbox:
   *  - Add which NPC is talking
   *  - Add Image to the left
   *  - Change dimensions on the text to center it better
   *  - Add continue prompt to show how to continue.
   *
   * @param ctx CanvasRenderingContext
   */
  public drawBox(ctx: CanvasRenderingContext2D): void {
    if (this.display) {
      // ctx.clearRect(this.xPosition, this.yPosition, 100, 400);
      // // Drawing a white rectangle on the canvas background
      ctx.fillRect(this.xPosition, this.yPosition, 100, 400);
    }
  }

  /**
   * Sets the display to be shown or not to be shown
   *
   * @param active Sets the new state of displaying
   */
  public setDisplay(active: boolean): void {
    this.display = active;
  }
}
