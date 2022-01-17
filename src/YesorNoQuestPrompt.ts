import Baker from './Baker.js';
import DislplayItem from './DislplayItem.js';
import Game from './Game.js';

export default class YesorNoQuestPrompt extends DislplayItem {
  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param baker baker
   * @param xPos the x position
   * @param yPos the y position
   */
  constructor(game: Game, baker: Baker, xPos: number, yPos: number) {
    super('./assets/img/yesornobox.png', baker, game, xPos, yPos);
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
      ctx.drawImage(this.img, this.xPosition, this.yPosition);
      // console.log(this.npc.getProgression());
      this.writeTextToBox();
    }
  }

  /**
   * Method to write the text in the box to the screen
   */
  public writeTextToBox(): void {
    this.game.writeTextToCanvas(this.baker.getYesorNoTextBaker(), 26, this.textXPos, this.textYPos, 'center', 'black');
  }
}
