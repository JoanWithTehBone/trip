import DisplayItem from './DisplayItem.js';
import Game from './Game.js';

export default class YesorNoQuestPrompt extends DisplayItem {
  private currentPrompt: HTMLImageElement;

  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param xPos the x position
   * @param yPos the y position
   */
  constructor(game: Game, xPos: number, yPos: number) {
    super('./assets/img/yesornobox.png', game, xPos, yPos);
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.textXPos = xPos + 20;
    this.textYPos = yPos + 35;
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
      ctx.clearRect(this.xPosition, this.yPosition, 600, 250);
      // Drawing a white rectangle on the canvas background
      // ctx.fillRect(this.xPosition, this.yPosition, 600, 250);
      ctx.drawImage(this.currentPrompt, this.xPosition, this.yPosition);
      // console.log(this.npc.getProgression());
    }
  }

  /**
   * Sets the current prompt for the YesOrNoQuestPrompt
   *
   * @param currentPrompt the current line of text that needs to be displayed in the prompt
   */
  public setCurrentPrompt(currentPrompt: HTMLImageElement): void {
    this.currentPrompt = currentPrompt;
  }
}
