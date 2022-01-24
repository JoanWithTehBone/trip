export default class UserData {
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

    // Initializing the variables
    this.hp = health;
    this.atk = attack;
    this.def = defense;
  }

  /**
   * Get the current level
   *
   * @returns the current level
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * Increase the level value
   */
  public increaseLevel(): void {
    this.level += 1;
  }

  /**
   * Get the Player/Monster Health
   *
   * @returns the health
   */
  public getHP(): number {
    return this.hp;
  }

  /**
   * Set the Player/Monster Health
   *
   * @param hp the new health value
   */
  public setHP(hp: number): void {
    this.hp = hp;
  }

  /**
   * Get the Player/Monster Attack
   *
   * @returns the attack
   */
  public getATK(): number {
    return this.atk;
  }

  /**
   * Set the Player/Monster Attack
   *
   * @param atk the new attack value
   */
  public setATK(atk: number): void {
    this.atk = atk;
  }

  /**
   * Get the Player/Monster Defence
   *
   * @returns the defence
   */
  public getDEF(): number {
    return this.def;
  }

  /**
   * Set the Player/Monster Defence
   *
   * @param def the new defence value
   */
  public setDEF(def: number): void {
    this.def = def;
  }
}
