import Game from './Game.js';
import NPC from './NPC.js';
import UserData from './UserData.js';

export default class Monster extends NPC {
  private baseXPos: number;

  private baseYPos: number;

  private monsterStats: UserData;

  /**
   * Constructor for the Monster Class
   *
   * @param canvas the game canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    super('./assets/img/MonsterImages/golem.png', canvas.width / 2, canvas.height / 2);
    this.progression = 0;
    this.name = 'Monster';
    this.completed = false;
    this.dialogue = [];
    this.dialogueFactory();

    this.baseXPos = canvas.width / 2;
    this.baseYPos = canvas.height / 2;

    // Initialising the monster's stats
    this.monsterStats = new UserData(20, 4, 3);
  }

  /**
   * Factory for creating the dialogue of the Monster
   */
  public dialogueFactory(): void {
    this.dialogue.push(
      Game.loadNewImage('./assets/img/MonsterImages/MonsterD1.png'),
      Game.loadNewImage('./assets/img/MonsterImages/MonsterD2.png'),
      Game.loadNewImage('./assets/img/MonsterImages/MonsterD3.png'),
      Game.loadNewImage('./assets/img/MonsterImages/MonsterD4.png'),
      Game.loadNewImage('./assets/img/MonsterImages/MonsterD5.png'),
    );
    console.log(this.dialogue);
  }

  /**
   * Move the monster to a new location on the map
   *
   * @param charXPos the new X position
   * @param charYPos the new Y position
   */
  public move(charXPos: number, charYPos: number): void {
    // Calculates the distance between the target point and the monster
    let dx = charXPos - this.xPos;
    let dy = charYPos - this.yPos;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculates the direction the monster needs to move towards to get to the target
    const directionX = dx / distance;
    const directionY = dy / distance;

    // If the monster is not on his base position it starts moving towards the target.
    if (!(this.baseXPos === this.xPos && this.baseYPos === this.yPos)) {
      this.xPos -= directionX;
      this.yPos -= directionY;
      if (this.xPos !== charXPos) {
        dx = this.xPos - charXPos;
        this.xPos -= dx / 10;
      }
      if (this.yPos !== charYPos) {
        dy = this.yPos - charYPos;
        this.yPos -= dy / 10;
      }
    } else {
      // Else it saves his new position before moving again
      this.baseXPos = charXPos;
      this.baseYPos = charYPos;
    }
  }

  /**
   * Get the Monster's stats
   *
   * @returns the Monster's stats
   */
  public getMonsterStats(): UserData {
    return this.monsterStats;
  }

  /**
   * Function to give a reward for ompleting a quest
   */
  public giveReward(): void {
    const randomStatIncrease = Game.randomNumber(1, 3);

    if (randomStatIncrease === 1) {
      this.monsterStats.setHP(this.monsterStats.getHP() + 5);
    } else if (randomStatIncrease === 2) {
      this.monsterStats.setATK(this.monsterStats.getATK() + 1);
    } else {
      this.monsterStats.setDEF(this.monsterStats.getDEF() + 1);
    }
  }

  /**
   * Sets the Monster's base X Position
   *
   * @param xPosition the X Position where the monster was standing
   */
  public setBaseXPos(xPosition: number): void {
    this.baseXPos = xPosition;
  }

  /**
   * Sets the Monster's base Y Position
   *
   * @param yPosition the Y Position where the monster was standing
   */
  public setBaseYPos(yPosition: number): void {
    this.baseYPos = yPosition;
  }
}
