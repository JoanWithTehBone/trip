import DisplayItem from './DisplayItem.js';
import Game from './Game.js';

export default class QuestBox extends DisplayItem {
  private questList: HTMLImageElement;

  /**
   * Constructing the Quest Box
   *
   * @param game the game
   * @param xPos the X position
   * @param yPos the Y position
   */
  constructor(game: Game, xPos: number, yPos: number) {
    super('./assets/img/questbox.png', game, xPos, yPos);
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.textXPos = xPos + 20;
    this.textYPos = yPos + 35;
  }

  /**
   * Method to draw the whole Box to the screen.
   *
   * @param ctx CanvasRenderingContext
   */
  public drawBox(ctx: CanvasRenderingContext2D): void {
    if (this.display) {
      ctx.clearRect(this.xPosition, this.yPosition, 1000, 550);
      ctx.drawImage(this.questList, this.xPosition, this.yPosition);
    }
  }

  /**
   * Gets the Y-position of the text inside of the textbox
   *
   * @returns Y-position of the text inside of the textbox
   */
  public getTextYPos(): number {
    return this.textYPos;
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
  public setQuestList(list: HTMLImageElement): void {
    this.questList = list;
  }
}
