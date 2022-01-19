import Game from './Game.js';
import Sprite from './Sprite.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  protected sprite: Sprite;

  protected canvas: HTMLCanvasElement;

  protected currentAnimation: string;

  protected yesOrNoOption: HTMLImageElement;

  /**
   * Creates a new GameItem on a random position
   *
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = maxX;
    this.yPos = maxY;
    this.sprite = new Sprite(this);
  }

  /**
   * draw
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }

  /**
   * getImageWidth
   *
   * @returns the current width of the image.
   */
  public getImage(): HTMLImageElement {
    return this.img;
  }

  /**
   * getXPos
   *
   * @returns the current X-position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * getXPos
   *
   * @param xPosition of the gameitem
   */
  public setXPos(xPosition : number): void {
    this.xPos = xPosition;
  }

  /**
   * getYPos
   *
   * @returns the current Y-position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * setXPos
   *
   * @param yPosition this y position
   */
  public setYPos(yPosition : number): void {
    this.yPos = yPosition;
  }

  /**
   * Get the currentanimation of the gameitem
   *
   * @returns current animation
   */
  public getCurrentAnimation() : string {
    return this.currentAnimation;
  }

  /**
   * get the sprite called in here
   *
   * @returns the sprite
   */
  public getSprite() : Sprite {
    return this.sprite;
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getYesorNoText(): HTMLImageElement {
    return this.yesOrNoOption;
  }
}
