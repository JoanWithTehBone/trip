import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import NPC from './NPC.js';
import DialogueBox from './DialogueBox.js';
import QuestBox from './QuestBox.js';
import YesorNoQuestPrompt from './YesorNoQuestPrompt.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  private dialogueBox: DialogueBox;

  private questBox: QuestBox;

  private yesornoquestprompt : YesorNoQuestPrompt;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   * Initialize Player
   *
   * @param xPos xPosition of the player
   * @param yPos yPostition of the player
   * @param dialogueBox BOX
   * @param questBox quest box
   * @param yesornoquestprompt prompt for quest
   */
  public constructor(
    xPos: number,
    yPos: number,
    dialogueBox: DialogueBox,
    questBox: QuestBox,
    yesornoquestprompt : YesorNoQuestPrompt,
  ) {
    super('./assets/img/player.png', xPos, yPos);

    this.xVel = 3;
    this.yVel = 3;
    this.keyboard = new KeyListener();

    this.dialogueBox = dialogueBox;
    this.questBox = questBox;
    this.yesornoquestprompt = yesornoquestprompt;
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   *
   * @param canvas the canvas to move over, for max x and y positions
   */
  public move(canvas: HTMLCanvasElement): void {
    // Set the limit values
    const minX = 0;
    const maxX = canvas.width - this.img.width;
    const minY = 0;
    const maxY = canvas.height - this.img.height;

    // Moving right
    if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT) && this.xPos < maxX) {
      this.xPos += this.xVel;
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
    }

    // Moving left
    if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT) && this.xPos > minX) {
      this.xPos -= this.xVel;
      // Limit to the max value
      if (this.xPos < minX) {
        this.xPos = minX;
      }
    }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_UP) && this.yPos > minY) {
      this.yPos -= this.yVel;
      if (this.yPos < minY) {
        this.yPos = minY;
      }
    }

    // Moving down
    if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.yPos < maxY) {
      this.yPos += this.yVel;
      if (this.yPos > maxY) {
        this.yPos = maxY;
      }
    }
  }

  // public onFrameStartListener() {
  //   this.keyboard.onFrameStart();
  // }

  /**
   * Method to declare keypresses without insantiating a new keyboard
   *
   * @returns the keys being pressed
   */
  public getKeys(): KeyListener {
    return this.keyboard;
  }

  /**
   *
   * @returns true if the player is pressing space
   */
  public isPressing(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_SPACE);
  }

  /**
   *
   * @returns true if the player is continuing up
   */
  public isContinuing(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_Q);
  }

  /**
   *
   * @returns true if the player is continuing up
   */
  public startQuestYes(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
  }

  /**
   *
   * @returns true if the player is continuing up
   */
  public refuseQuestNo(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_N);
  }

  /**
   *
   * @returns true if the player is continuing up
   */
  public answerQuestA(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_A);
  }

  /**
   *
   * @returns true if the player is continuing up
   */
  public answerQuestB(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_B);
  }

  /**
   *
   * @returns true if the player is continuing up
   */
  public answerQuestC(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_C);
  }

  /**
   *
   * @returns true if the player is fighting the monster
   */
  public isFighting(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_F);
  }

  /**
   *
   * @returns true if the player is responding to a dialogue prompt
   */
  public isResponding(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
  }

  /**
   * @returns true if the player is continuing up
   */
  public answerQuestD(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_D);
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: NPC): boolean {
    return this.xPos < other.getXPos() + other.getImageWidth()
      && this.xPos + this.img.width > other.getXPos()
      && this.yPos < other.getYPos() + other.getImageHeight()
      && this.yPos + this.img.height > other.getYPos();
  }

  /**
   * Method that checks if the player collides and interacts with a NPC.
   *
   * Also calculates which NPC is applicable for drawing the textBox to the screen
   *
   * @param npcs the character in the game that need to be collided with
   * @returns if the character is interacting with an NPC
   */
  public interactWith(npcs: NPC[]): boolean {
    let collides: boolean = true;
    npcs.forEach((element) => {
      if (this.collidesWith(element)) {
        this.dialogueBox.setDisplay(true);
        console.log('INTERACTION WITH THE npc:)');
        if (element.questCompleted() && element.getProgression() === 4) {
          this.dialogueBox.setDisplay(false);
          this.yesornoquestprompt.setDisplay(true);
          element.setProgression(element.getProgression() + 1);
          console.log(element.getProgression());
          // if (this.startQuestYes()) {
          //   this.questBox.setDisplay(true);
          //   console.log('closed');
          // }
        } else if (element.questCompleted() && element.getProgression() === 3) {
          element.talkToPlayer(3, this.dialogueBox);
          element.setProgression(element.getProgression() + 1);
          console.log(element.getProgression());
        } else if (element.questCompleted() && element.getProgression() === 2) {
          element.talkToPlayer(2, this.dialogueBox);
          element.setProgression(element.getProgression() + 1);
          console.log(element.getProgression());
        } else if (element.questCompleted() && element.getProgression() === 1) {
          element.talkToPlayer(1, this.dialogueBox);
          element.setProgression(element.getProgression() + 1);
          console.log(element.getProgression());
        } else if (element.getProgression() < 1) {
          element.talkToPlayer(element.getProgression(), this.dialogueBox);
          element.setProgression(element.getProgression() + 1);
          console.log(element.getProgression());
        }
        collides = false;
      }
    });
    return collides;
  }

  /**
   * Quest dialogue
   *
   * @param npcs the npc
   * @returns boolean
   */
  public questWith(npcs: NPC[]): boolean {
    let collides: boolean = true;
    if (this.startQuestYes) {
      npcs.forEach((element) => {
        if (this.collidesWith(element)) {
          this.questBox.setDisplay(true);
          this.dialogueBox.setDisplay(false);
          console.log('quest WITH THE npc:)');
          // if (element.getProgression() + 1 >= element.getQuest().length) {
          // element.questingToPlayer(0, this.questBox);
          // } else if (element.questCompleted()) {
          //   element.questingToPlayer(2, this.questBox);
          //   element.setProgression(element.getProgression() + 1);
          // } else if (element.getProgression() < 2) {
          //   element.questingToPlayer(element.getProgression(), this.questBox);
          //   element.setProgression(element.getProgression() + 1);
          // }
          collides = false;
        }
      });
      return collides;
    }
    return false;
  }

  /**
   * Increases the speed
   *
   * @param size the amount of speed to add
   */
  public increaseSpeed(size: number): void {
    this.xVel += size;
    this.yVel += size;
  }

  /**
   * Get the dialogue box details
   *
   * @returns the dialogue box
   */
  public getDialogueBox(): DialogueBox {
    return this.dialogueBox;
  }
}
