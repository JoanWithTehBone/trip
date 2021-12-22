export default class UserData {
  private name: string;

  private score: number;

  private level: number;

  // Variables for the player stats: 
  private hp: number;

  private atk: number;

  private def: number; 



  /**
   * Creates a new instance of this class
   */
  public constructor() {
    this.level = 1;
    this.score = 0;
    this.name = 'Player 1';

    // Initializing the variables
    this.hp = 10;
    this.atk = 1;
    this.def = 1;
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
