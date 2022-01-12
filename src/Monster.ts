import NPC from './NPC.js';
import UserData from './UserData.js';
import Game from './Game.js';

export default class Monster extends NPC {
  private monsterStats: UserData;

  /**
   * Constructor for the Monster Class
   *
   * @param canvas the game canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    super('./assets/img/character_robot_walk0.png', canvas.width / 2, canvas.height / 2);
    this.progression = 0;
    this.name = 'Monster';
    this.completed = true;
    this.dialogue = [];
    this.dialogueFactory();

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
   * @param charXpos the new X position
   * @param charYPos the new Y position
   */
  public move(charXpos: number, charYPos: number) : void {
    const dx = charXpos - this.xPos;
    const dy = charYPos - this.yPos;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const directionX = dx / distance;
    const directionY = dy / distance;

    if ((this.xPos === charXpos && this.yPos === charYPos)) {
      this.xPos -= directionX;
      this.yPos -= directionY;
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
}
