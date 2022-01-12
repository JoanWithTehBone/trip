import Game from './Game.js';
import GameItem from './GameItem.js';

export default class YesorNoQuestPrompt extends GameItem {
  private display: boolean;

  private currentDialogue: number;

  private xPosition: number;

  private yPosition: number;

  private textXPos: number;

  private textYPos: number;

  private questList: string[];

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
    this.display = false;
    // Positioning
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.textXPos = xPos + 20;
    this.textYPos = yPos + 35;

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
      ctx.clearRect(this.xPosition, this.yPosition, 600, 250);
      // Drawing a white rectangle on the canvas background
      ctx.fillRect(this.xPosition, this.yPosition, 600, 250);
      // console.log(this.npc.getProgression());
      this.writeTextToBox(this.currentDialogue);
    }
  }

  /**
   * Method to write the text in the box to the screen
   *
   * @param currentDialogue the current integer of dialogue -> currentindex
   */
  public writeTextToBox(currentDialogue: number): void {
    this.game.writeTextToCanvas(this.questList[currentDialogue], 26, this.textXPos, this.textYPos, 'center', 'black');
  }

  /**
   * Sets the display to be shown or not to be shown
   *
   * @param active Sets the new state of displaying
   */
  public setDisplay(active: boolean): void {
    this.display = active;
  }

  /**
   * Get display state
   *
   * @returns the display value [true or false]
   */
  public getDisplay(): boolean {
    return this.display;
  }

  /**
   * Gets the xPosition of the text inside of the textbox
   *
   * @returns xPosition of the text inside of the textbox
   */
  public getTextXPos(): number {
    return this.textXPos;
  }

  /**
   * Gets the yPosition of the text inside of the textbox
   *
   * @returns yPosition of the text inside of the textbox
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
  public setQuestList(list: string[]): void {
    this.questList = list;
  }
}
