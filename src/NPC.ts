import DialogueBox from './DialogueBox.js';
import GameItem from './GameItem.js';

export default abstract class NPC extends GameItem {
  protected name: string;

  protected completed: boolean;

  protected progression: number;

  protected dialogue: string[];

  public constructor(imageSrc: string, maxX: number, maxY: number) {
    super(imageSrc, maxX, maxY);
  }

  public abstract questCompleted(): boolean;

  public abstract talkToPlayer(dialogueIndex: number, dialogueBox: DialogueBox): void;

  public abstract giveReward(): void;

  /**
   * Gets the progression of the NPC
   *
   * @returns Progression of the child
   */
  public getProgression(): number {
    return this.progression;
  }

  /**
   * sets the new progression value
   *
   * @param input Inut value to set the progression
   */
  public setProgression(input: number): void {
    this.progression = input;
  }

  /**
   * Gets the progression of the NPC
   *
   * @returns Progression of the child
   */
  public getDialogue(): string[] {
    return this.dialogue;
  }
}
