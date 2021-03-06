import DisplayItem from './DisplayItem.js';
import Game from './Game.js';

export default class DialogueBox extends DisplayItem {
  private dialogueList: HTMLImageElement[];

  /**
   * Constructor for the dialogue box
   *
   * @param game the game
   * @param xPos the x position
   * @param yPos the y position
   */
  constructor(game: Game, xPos: number, yPos: number) {
    super('', game, xPos, yPos);
    this.xPosition = xPos;
    this.yPosition = yPos;
  }

  /**
   * Method to draw the whole Box to the screen.
   *
   * @param ctx the CanvasRenderingContext
   */
  public drawBox(ctx: CanvasRenderingContext2D): void {
    if (this.display) {
      ctx.clearRect(this.xPosition, this.yPosition, 1200, 200);
      ctx.drawImage(this.dialogueList[this.currentDialogue], this.xPosition, this.yPosition);
    }
  }

  /**
   * Sets the current integer of the dialogue index
   *
   * @param currentDialogue the current integer of dialogue -> currentindex
   */
  public setCurrentDialogue(currentDialogue: number): void {
    this.currentDialogue = currentDialogue;
  }

  /**
   * Sets the dialogue of the current character
   *
   * @param list the current list of dialogue
   */
  public setDialogueList(list: HTMLImageElement[]): void {
    this.dialogueList = list;
  }
}
