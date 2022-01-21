import DialogueBox from './DialogueBox.js';
import Game from './Game.js';
import GameItem from './GameItem.js';
import QuestBox from './QuestBox.js';
import UserData from './UserData.js';

export default abstract class NPC extends GameItem {
  protected name: string;

  protected completed: boolean;

  protected rewardGiven: boolean;

  protected progression: number;

  protected dialogue: HTMLImageElement[];

  protected questDialogue: HTMLImageElement;

  protected quest: boolean;

  protected yesOrNoOption: HTMLImageElement;

  protected questResponse: HTMLImageElement[];

  protected rightAnswer: string;

  protected user: UserData;

  /**
   * Constructor of the NPC abstract class
   *
   * @param imageSrc the image of the NPC
   * @param maxX the xPosition of the NPC on the screen
   * @param maxY the yPosition of the NPC on the screen
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    super(null, null, imageSrc, maxX, maxY, null, null);
  }

  public abstract dialogueFactory(): void;

  public abstract giveReward(game: Game): void;

  /**
   * Method that displays the NPCS dialogue to the screen so the player can read it.
   *
   * @param dialogueIndex the index that decides which dialogue gets used
   * @param dialogueBox The Dialoguebox that shows on the screen
   */
  public talkToPlayer(dialogueIndex: number, dialogueBox: DialogueBox): void {
    dialogueBox.setDialogueList(this.dialogue);
    for (let i = 0; i < this.dialogue.length; i += 1) {
      if (dialogueIndex === i) {
        if (dialogueBox.getDisplay()) {
          dialogueBox.setCurrentDialogue(i);
        }
      }
    }
  }

  /**
   *
   * @param questBox box
   */
  public questingToPlayer(questBox: QuestBox): void {
    questBox.setQuestList(this.questDialogue);
  }

  /**
   * Checks if the Hunter Quest is completed
   *
   * @returns If quest is completed
   */
  public questCompleted(): boolean {
    return this.completed;
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
   * Whenever the progression needs to go up, call this function
   */
  public progressFurther(): void {
    this.progression += 1;
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getYesorNoText(): HTMLImageElement {
    return this.yesOrNoOption;
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getQuestResponseImage(): HTMLImageElement[] {
    return this.questResponse;
  }

  /**
   * Gets the progression of the NPC
   *
   * @returns Progression of the child
   */
  public getDialogue(): HTMLImageElement[] {
    return this.dialogue;
  }

  /**
   * Gets the progression of the NPC
   *
   * @returns Progression of the child
   */
  public getQuestDialogue(): HTMLImageElement {
    return this.questDialogue;
  }

  /**
   * Gets the right answer for the quest
   *
   * @returns the right answer of the specified quest
   */
  public getRightAnswer(): string {
    return this.rightAnswer;
  }

  /**
   * Sets the completion of the quest
   *
   * @param value a boolean that is either true or false
   */
  public setCompletion(value: boolean): void {
    this.completed = value;
  }
}
