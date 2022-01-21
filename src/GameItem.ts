import Game from './Game.js';
import Sprite from './Sprite.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  protected widthCut: number;

  protected heightCut: number;

  protected currentAnimationFrameLimit: number;

  protected sizeSprite: number;

  protected sprite: Sprite;

  protected canvas: HTMLCanvasElement;

  protected currentAnimation: string;

  /**
   * Creates a new GameItem on a random position
   *
   * @param widthCut the width of a single spritesheetblock
   * @param heightCut the height of a single spritesheetblock
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param currentAnimationFrameLimit the speed of the frame troughout
   * @param sizeSprite the size it should be drawn to the screen
   */
  public constructor(widthCut: number, heightCut: number, imageSrc: string,
    maxX: number, maxY: number, currentAnimationFrameLimit : number, sizeSprite: number) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = maxX;
    this.yPos = maxY;
    this.widthCut = widthCut;
    this.heightCut = heightCut;
    this.currentAnimationFrameLimit = currentAnimationFrameLimit;
    this.sizeSprite = sizeSprite;
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
   * getYPos
   *
   * @returns the width of a single spritesheetblock
   */
  public getWidthCut(): number {
    return this.widthCut;
  }

  /**
   * getYPos
   *
   * @returns the height of a single spritesheetblock
   */
  public getHeightCut(): number {
    return this.heightCut;
  }

  /**
   * get the currerent animation frame limit which will be the speed of the animation
   *
   * @returns the height of a single spritesheetblock
   */
  public getCurrentAnimationFrameLimit(): number {
    return this.currentAnimationFrameLimit;
  }

  /**
   * get size sprite should be drawn on to the canvas
   *
   * @returns the height of a single spritesheetblock
   */
  public getSizeSprite(): number {
    return this.sizeSprite;
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
}
