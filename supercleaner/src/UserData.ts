export default class UserData {
  private name: string;

  private score: number;

  private level: number;

  /**
   * Creates a new instance of this class
   */
  public constructor() {
    this.level = 1;
    this.score = 0;
    this.name = 'Player 1';
  }

  /**
   * getName
   *
   * @returns the name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * setName
   *
   * @param name the name to set
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * getScore
   *
   * @returns the score
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * addScore
   *
   * @param points the amount of points to add to the score
   */
  public addScore(points: number): void {
    this.score += points;
  }

  /**
   * getLevel
   *
   * @returns the current level
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * increaseLevel
   */
  public increaseLevel(): void {
    this.level += 1;
  }
}
