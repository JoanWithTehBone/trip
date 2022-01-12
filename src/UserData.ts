export default class UserData {
  private score: number;

  private level: number;

  // Variables for the player stats:
  private hp: number;

  private atk: number;

  private def: number;

  /**
   * Creates a new instance of this class
   *
   * @param health the character's health value
   * @param attack the character's attack value
   * @param defense the character's defense value
   */
  public constructor(health: number, attack: number, defense: number) {
    /**
     * TODO
     * If we want to increase the game difficulty we can use 'level' to increase the monster's
     * stats in Monster.ts file
     */
    this.level = 1;
    // TODO Might change to instead count the number of completed quests
    this.score = 0;

    // Initializing the variables
    this.hp = health;
    this.atk = attack;
    this.def = defense;
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

  /**
   * gethp
   *
   * @returns the hp
   */
  public getHP(): number {
    return this.hp;
  }

  /**
   * sethp
   *
   * @param hp the Hp to set
   */
  public setHP(hp: number): void {
    this.hp = hp;
  }

  /**
   * getATK
   *
   * @returns the atk
   */
  public getATK(): number {
    return this.atk;
  }

  /**
   * setATK
   *
   * @param atk the atk to set
   */
  public setATK(atk: number): void {
    this.atk = atk;
  }

  /**
   * getDEF
   *
   * @returns the def
   */
  public getDEF(): number {
    return this.def;
  }

  /**
   * setDEF
   *
   * @param def the DEF to set
   */
  public setDEF(def: number): void {
    this.def = def;
  }
}
