import Game from './Game.js';
import GameItem from './GameItem.js';

export default class FlyingDragonBaby extends GameItem {
  private speed: number;

  private imagearray : string[];

  /**
   * The constructor with the basic variables for the Dragon baby
   * that is supposed to fly over the village as decoration
   *
   * @param canvas the height of the canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    const yPosition = Game.randomNumber(0, canvas.height);
    super('./assets/img/flyingbabydragonpurple.png', 0, yPosition);
    this.speed = Game.randomNumber(2, 6);
    this.xPos = -100;
    this.imagearray = ['./assets/img/flyingbabydragonpurple.png', './assets/img/flyingbabydragonred.png', './assets/img/flyingbabydragonyellow.png', './assets/img/flyingbabydragongreen.png', './assets/img/flyingbabydragonblue.png'];
  }

  /**
   * Method to move the dragon baby over the map
   */
  public move(): void {
  // the current x position is changed each time a little
  // which makes it look like the object is moving
    this.setXPos(this.getXPos() + this.speed);
  }

  /**
   * Checks if Rocket is out of canvas
   *
   * @param canvas the canvas
   */
  public outOfCanvas(canvas: HTMLCanvasElement): void {
  // if the current x position is past the canvas then the x position is set back to the beginning
  // of the canvas and the y position is randomly chosen just as the speed and the image
    if (this.getXPos() - 100 >= canvas.width) {
      this.setXPos(-100);
      this.setYPos(Game.randomNumber(0, canvas.height));
      this.speed = Game.randomNumber(3, 6);
      this.setImageRandom(this.imagearray);
    }
  }

  /**
   * sets the image to a random image out of an array of image sources
   *
   * @param imagearray is an array of image sources
   */
  public setImageRandom(imagearray : string[]): void {
    this.img = Game.loadNewImage(imagearray[Game.randomNumber(0, 4)]);
  }
}
