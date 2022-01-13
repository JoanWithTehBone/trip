import NPC from './NPC.js';
import UserData from './UserData.js';

export default class Monster extends NPC {
  private monsterStats: UserData;

  private baseXPos: number;

  private baseYPos: number;

  /**
   * Constructor for the Monster Class
   *
   * @param canvas the game canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    super('./assets/img/golem.png', canvas.width / 2, canvas.height / 2);
    this.progression = 0;
    this.name = 'Monster';
    this.completed = true;
    this.dialogue = [];
    this.dialogueFactory();

    this.baseXPos = canvas.width / 2;
    this.baseYPos = canvas.height / 2;

    // Initialising the monster's stats
    this.monsterStats = new UserData(20, 5, 3);
  }

  /**
   * Factory for creating the dialogue of the Monster
   */
  public dialogueFactory(): void {
    this.dialogue.push('Press F to fight the monster', 'Press T to talk with the monster', 'Raargh!', 'Oh hey, you seem like a nice guy! Wanna be friends? :)');
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
   * Get the monster's stats
   *
   * @returns the monster's stats
   */
  public getMonsterStats(): UserData {
    return this.monsterStats;
  }

  /**
   * Sets the base Y Position
   *
   * @param xPosition the x Position where the monster was standing
   */
  public setBaseXPos(xPosition: number): void {
    this.baseXPos = xPosition;
  }

  /**
   * Sets the base Y Position
   *
   * @param yPosition the y Position where the monster was standing
   */
  public setBaseYPos(yPosition: number): void {
    this.baseYPos = yPosition;
  }
}
