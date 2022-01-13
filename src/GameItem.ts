import Game from './Game.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

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
  }

  /**
   * draw
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, 0, 0, 64, 50, this.xPos, this.yPos, 160, 128);
  }

  /**
   * getImageHeight
   *
   * @returns the current height of the image.
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   * getImageWidth
   *
   * @returns the current width of the image.
   */
  public getImageWidth(): number {
    return this.img.width;
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
}
