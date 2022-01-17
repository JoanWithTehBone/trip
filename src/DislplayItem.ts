import Game from './Game.js';
import GameItem from './GameItem.js';

export default abstract class DislplayItem extends GameItem {
  protected display: boolean;

  protected currentDialogue : number;

  protected imageSource: HTMLImageElement;

  protected xPosition: number;

  protected yPosition: number;

  protected textXPos: number;

  protected textYPos: number;

  protected game: Game;

  /**
   * The constructor of the DisplayItem abstract class That extends teh gameitem glass
   * it is specifiet to fit basics for the display functions in the game
   *
   * @param imageSrc the string to lead to image source
   * @param game the game class
   * @param xPosition the positions of the npc
   * @param yPosition the positions of the npc
   */
  constructor(imageSrc: string, game: Game, xPosition: number, yPosition: number) {
    super(imageSrc, xPosition, yPosition);
    this.display = false;
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
  public abstract drawBox(ctx: CanvasRenderingContext2D): void;

  /**
   * Method to write the text in the box to the screen
   *
   * @param currentDialogue the current integer of dialogue -> currentindex
   */
  public abstract writeTextToBox(currentDialogue: number): void;

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
}
