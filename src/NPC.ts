import DialogueBox from './DialogueBox.js';
import GameItem from './GameItem.js';

export default abstract class NPC extends GameItem {
  protected name: string;

  protected completed: boolean;

  protected progression: number;

  protected dialogue: string[];

  /**
   * Constructor of the NPC abstract class
   *
   * @param imageSrc the image of the NPC
   * @param maxX the xPosition of the NPC on the screen
   * @param maxY the yPosition of the NPC on the screen
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    super(imageSrc, maxX, maxY);
  }

  public abstract dialogueFactory(): void;

  // public abstract giveReward(): void;

  /**
   * Method that displays the NPCS dialogue to the screen so the player can read it.
   *
   * @param dialogueIndex the index that decides which dialogue gets used
   * @param dialogueBox The Dialoguebox that shows on the screen
   */
  public talkToPlayer(dialogueIndex: number, dialogueBox: DialogueBox): void {
    dialogueBox.setDialogueList(this.dialogue);
    if (dialogueIndex === 0) {
      console.log(dialogueBox.getDisplay());
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(0);
      }
    } else if (dialogueIndex === 1) {
      console.log(this.dialogue[1]);
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(1);
      }
    } else if (dialogueIndex === 2) {
      console.log(this.dialogue[2]);
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(2);
      }
    } else {
      console.log(this.dialogue[3]);
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(3);
      }
    }
  }

  /**
   * Checks if the Hunter Quest is completed
   *
   * @returns If quest is completed
   */
  public questCompleted(): boolean {
    if (this.progression === 2 && this.completed) {
      return true;
    }
    return false;
  }

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
