import GameLoop from './GameLoop.js';
import Start from './Start.js';
import UserData from './UserData.js';

export default class Game {
  // Necessary canvas attributes
  public readonly canvas: HTMLCanvasElement;

  public readonly ctx: CanvasRenderingContext2D;

  private playerStats: UserData;

  private gameLoop: GameLoop;

  /**
   * Initialize the game
   *
   * @param canvas - The canvas element that the game
   * should be rendered upon
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Start the game cycle
    this.gameLoop = new GameLoop();
    this.gameLoop.start(new Start(this));
  }

  /**
   * getUser
   *
   * @returns the user data
   */
  public getPlayerStats(): UserData {
    return this.playerStats;
  }

  /**
   * Resets the game to the starting state.
   */
  public reset(): void {
    // Initialising the player's stats
    this.playerStats = new UserData(20, 4, 2);
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  public writeTextToCanvas(
    text: string,
    fontSize: number = 14,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'white',
  ): void {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
