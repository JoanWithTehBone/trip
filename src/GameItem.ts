import Game from './Game.js';
import Sprite from './Sprite.js';

export default abstract class GameItem {
  protected canvas: HTMLCanvasElement;

  protected currentAnimation: string;

  protected currentAnimationFrameLimit: number;

  protected heightCut: number;

  protected img: HTMLImageElement;

  protected questDialogue: HTMLImageElement;

  protected sizeSprite: number;

  protected sprite: Sprite;

  protected widthCut: number;

  protected xPos: number;

  protected yesOrNoOption: HTMLImageElement;

  protected yPos: number;

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
   * Method to draw an image to the canvas
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }

  /**
   * Get the image's details (width, height, etc.)
   *
   * @returns the image's details
   */
  public getImage(): HTMLImageElement {
    return this.img;
  }

  /**
   * Get the current X-position
   *
   * @returns the current X-position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * Set the new X-position
   *
   * @param xPosition of the gameitem
   */
  public setXPos(xPosition : number): void {
    this.xPos = xPosition;
  }

  /**
   * Get the current Y-position
   *
   * @returns the current Y-position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * Set the new Y-position
   *
   * @param yPosition this Y-position
   */
  public setYPos(yPosition : number): void {
    this.yPos = yPosition;
  }

  /**
   * Get the width of a single spritesheetblock
   *
   * @returns the width of a single spritesheetblock
   */
  public getWidthCut(): number {
    return this.widthCut;
  }

  /**
   * Get the height of a single spritesheetblock
   *
   * @returns the height of a single spritesheetblock
   */
  public getHeightCut(): number {
    return this.heightCut;
  }

  /**
   * Get the currerent animation frame limit (the speed of the animation)
   *
   * @returns the height of a single spritesheetblock
   */
  public getCurrentAnimationFrameLimit(): number {
    return this.currentAnimationFrameLimit;
  }

  /**
   * Get size for the sprite to be drawn on the canvas
   *
   * @returns the height of a single spritesheetblock
   */
  public getSizeSprite(): number {
    return this.sizeSprite;
  }

  /**
   * Get the Current Animation of the gameitem
   *
   * @returns the Current Animation
   */
  public getCurrentAnimation() : string {
    return this.currentAnimation;
  }

  /**
   * Get the Sprite's details
   *
   * @returns the Sprite's details
   */
  public getSprite() : Sprite {
    return this.sprite;
  }

  /**
   * Get the Yes or No question prompt
   *
   * @returns the Yes or No question prompt
   */
  public getYesorNoText(): HTMLImageElement {
    return this.yesOrNoOption;
  }

  /**
   * Gets the current quest dialogue image for the NPC
   *
   * @returns the current quest dialogue image for the NPC
   */
  public getQuestDialogue(): HTMLImageElement {
    return this.questDialogue;
  }
}
