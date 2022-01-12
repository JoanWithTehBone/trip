import NPC from './NPC.js';
import UserData from './UserData.js';

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
   * Get the monster's stats
   *
   * @returns the monster's stats
   */
  public getMonsterStats(): UserData {
    return this.monsterStats;
  }
}
