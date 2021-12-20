import GameItem from './GameItem.js';

export default abstract class ScoringObject extends GameItem {
  private score: number;

  /**
   *
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param score the score of this scoring object
   */
  public constructor(imageSrc: string, maxX: number, maxY: number,
    score: number) {
    super(imageSrc, maxX, maxY);
    this.score = score;
  }

  /**
   * getScore
   *
   * @returns the score
   */
  public getScore(): number {
    return this.score;
  }
}
