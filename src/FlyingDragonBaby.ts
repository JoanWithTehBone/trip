import Game from './Game.js';
import GameItem from './GameItem.js';

export default class FlyingDragonBaby extends GameItem {
  private speed: number;

  /**
   * The constructor with the basic variables for the Dragon baby
   * that is supposed to fly over the village as decoration
   *
   * @param canvas the height of the canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    const yPosition = Game.randomNumber(0, canvas.height);
    super('./assets/img/egg.png', 0, yPosition);
    this.speed = Game.randomNumber(2, 8);
    this.xPos = 0 - this.img.width;
  }

  /**
   * Method to move the dragon baby over the map
   */
  public move(): void {
    this.setXPos(this.getXPos() + this.speed);
  }
}
