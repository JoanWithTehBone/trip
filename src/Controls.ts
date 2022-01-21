import Game from './Game.js';
import GameItem from './GameItem.js';

export default class Controls extends GameItem {
  private display: boolean;

  private xPosition: number;

  private yPosition: number;

  private textXPos: number;

  private textYPos: number;

  private game: Game;

  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param xPos the x position
   * @param yPos the y position
   */
  constructor(game: Game, xPos: number, yPos: number) {
    super('./assets/img/controls.jpg', xPos, yPos);
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
   * @param ctx CanvasRenderingContext
   */
  public drawBox(ctx: CanvasRenderingContext2D): void {
    if (this.display) {
      ctx.clearRect(this.xPosition, this.yPosition, 1000, 600);
      // Drawing a white rectangle on the canvas background
      // ctx.fillRect(this.xPosition, this.yPosition, 600, 250);
      ctx.drawImage(this.img, this.xPosition, this.yPosition);
      // console.log(this.npc.getProgression());
      // this.writeTextToBox();
    }
  }

  // /**
  //  * Method to write the text in the box to the screen
  //  */
  // public writeTextToBox(): void {
  //   this.game.writeTextToCanvas(this.baker.getYesorNoTextBaker(),
  // 26, this.textXPos, this.textYPos, 'center', 'black');
  // }

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
