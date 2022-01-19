import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import NPC from './NPC.js';
import DialogueBox from './DialogueBox.js';
import QuestBox from './QuestBox.js';
import YesorNoQuestPrompt from './YesorNoQuestPrompt.js';
import Game from './Game.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  private dialogueBox: DialogueBox;

  private questBox: QuestBox;

  private yesOrNoQuestPrompt: YesorNoQuestPrompt;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   * Initialize Player
   *
   * @param xPos xPosition of the player
   * @param yPos yPostition of the player
   * @param dialogueBox BOX
   * @param questBox quest box
   * @param yesOrNoQuestPrompt prompt for quest
   */
  public constructor(
    xPos: number,
    yPos: number,
    dialogueBox: DialogueBox,
    questBox: QuestBox,

    yesOrNoQuestPrompt: YesorNoQuestPrompt,

  ) {
    super('./assets/img/testplayer.png', xPos, yPos);

    this.xVel = 2;
    this.yVel = 2;
    this.currentAnimation = 'idle-down';
    this.keyboard = new KeyListener();

    this.dialogueBox = dialogueBox;
    this.questBox = questBox;
    this.yesOrNoQuestPrompt = yesOrNoQuestPrompt;
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
      this.getSprite().setAnimation('walk-right');
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
    } else if (this.keyboard.isKeyTyped(KeyListener.KEY_RIGHT)
    && !this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.getSprite().setAnimation('idle-right');
    }

    // Moving left
    if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT) && this.xPos > minX) {
      this.xPos -= this.xVel;
      this.getSprite().setAnimation('walk-left');
      // Limit to the max value
      if (this.xPos < minX) {
        this.xPos = minX;
      }
    } else if (this.keyboard.isKeyTyped(KeyListener.KEY_LEFT)
    && !this.keyboard.isKeyDown(KeyListener.KEY_LEFT)) {
      this.getSprite().setAnimation('idle-left');
    }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_UP) && this.yPos > minY) {
      this.yPos -= this.yVel;
      this.getSprite().setAnimation('walk-up');
      if (this.yPos < minY) {
        this.yPos = minY;
      }
    } else if (this.keyboard.isKeyTyped(KeyListener.KEY_UP)
    && !this.keyboard.isKeyDown(KeyListener.KEY_UP)) {
      this.getSprite().setAnimation('idle-up');
    }

    // Moving down
    if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.yPos < maxY) {
      this.yPos += this.yVel;
      this.getSprite().setAnimation('walk-down');
      if (this.yPos > maxY) {
        this.yPos = maxY;
      }
    } else if (this.keyboard.isKeyTyped(KeyListener.KEY_DOWN)
    && !this.keyboard.isKeyDown(KeyListener.KEY_DOWN)) {
      this.getSprite().setAnimation('idle-down');
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
  public isIgnoring(): boolean {
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
   * @returns true if the player is continuing up
   */
  public answerQuestD(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_D);
  }

  /**
   * @returns true if the player is continuing up
   */
  public answerQuestE(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_E);
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
  public openControls(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_O);
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: GameItem): boolean {
    return this.xPos < other.getXPos() + other.getImage().width
      && this.xPos + this.img.width > other.getXPos()
      && this.yPos < other.getYPos() + other.getImage().height
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
    // Create an collides statement to return to the level
    let collides: boolean = true;
    let questDone: boolean = false;
    npcs.forEach((element) => {
      // For every NPC, whenever it collides with the player, show the dialogue box
      if (!(questDone) && this.collidesWith(element)) {
        this.dialogueBox.setDisplay(true);
        console.log('INTERACTION WITH THE npc:)');
        // When the quest is completed and the 4th line of dialogue has been set,
        // show the yes or no prompt.
        if (element.getProgression() === (element.getDialogue().length - 2)) {
          // Dialogue Box should become invisible, and the YesOrNo prompt pops up.
          // Also sets the current prompt and quest respectively
          this.dialogueBox.setDisplay(false);
          this.yesOrNoQuestPrompt.setCurrentPrompt(element.getYesorNoText());
          this.yesOrNoQuestPrompt.setDisplay(true);

          questDone = true;
          element.progressFurther();
        } else {
          // For each dialogue in the NPC, checks if the quest is completed.
          // After calls the respective talk function and progresses further
          for (let i = 0; i < element.getDialogue().length; i += 1) {
            if (i === element.getProgression()) {
              element.talkToPlayer(i, this.dialogueBox);
            }
          }
          element.progressFurther();
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
    // Create an collides statement to return to the level
    let collides: boolean = true;
    // For each npc, we check if it collides with the player. If so, run the functions.
    npcs.forEach((element) => {
      if (this.collidesWith(element)) {
        this.questBox.setQuestList(element.getQuestDialogue());
        console.log('quest WITH THE npc:)');
        // When the player answers yes on the yes-or-no prompt, run this function
        if (this.isResponding() && element.getProgression() === element.getDialogue().length - 1) {
          // Remove the yes-or-no prompt from the screen and show the questbox
          this.yesOrNoQuestPrompt.setDisplay(false);
          this.questBox.setDisplay(true);
        }

        // When the player answers no on the yes-or-no prompt, run this function
        if (this.isIgnoring() && element.getProgression() === element.getDialogue().length - 1) {
          // Remove the yes-or-no prompt from the screen and reset the dialogue.
          this.yesOrNoQuestPrompt.setDisplay(false);
          element.setProgression(0);
        }
        collides = false;
      }
      return collides;
    });
    return false;
  }

  /**
   * Function that handles the answering of the quest
   *
   * @param npcs the array of NPC passed into the function
   */
  public questAnswer(npcs: NPC[]): void {
    npcs.forEach((npc): void => {
      if (this.collidesWith(npc)) {
        let rightGuess = false;
        let continueQuest = false;
        if (this.answerQuestA()) {
          console.log('This is skipped');
          if (this.checkForRightAnswer(npc, 'A') === false) {
            continueQuest = true;
          } else {
            rightGuess = true;
            continueQuest = true;
          }
        } else if (this.answerQuestB()) {
          if (this.checkForRightAnswer(npc, 'B') === false) {
            continueQuest = true;
          } else {
            rightGuess = true;
            continueQuest = true;
          }
        } else if (this.answerQuestC()) {
          if (this.checkForRightAnswer(npc, 'C') === false) {
            continueQuest = true;
          } else {
            rightGuess = true;
            continueQuest = true;
          }
        } else if (this.answerQuestD()) {
          if (this.checkForRightAnswer(npc, 'D') === false) {
            continueQuest = true;
          } else {
            rightGuess = true;
            continueQuest = true;
          }
        } else if (this.answerQuestE()) {
          if (this.checkForRightAnswer(npc, 'E') === false) {
            continueQuest = true;
          } else {
            rightGuess = true;
            continueQuest = true;
          }
        }

        if (continueQuest) {
          if (rightGuess) {
            this.dialogueBox.setDialogueList(npc.getQuestResponseImage());
            this.dialogueBox.setCurrentDialogue(1);
            this.dialogueBox.setDisplay(true);
            console.log('This is fudd');
            this.questBox.setDisplay(false);
            npc.setCompletion(true);
            console.log(npc.questCompleted());
          } else {
            this.dialogueBox.setDialogueList(npc.getQuestResponseImage());
            this.dialogueBox.setCurrentDialogue(0);
            this.dialogueBox.setDisplay(true);
            console.log('This is starting');
          }
        }
      }
    });
  }

  /**
   * Method that arranges the convo's after the quest has been completed
   *
   * @param npcs The list of NPCS that can be collided with
   * @param game The game that needs to be used for the rewards
   */
  public afterQuest(npcs: NPC[], game: Game): void {
    npcs.forEach((npc): void => {
      if (this.collidesWith(npc)) {
        if (npc.questCompleted()) {
          if (npc.getProgression() === 6) {
            npc.talkToPlayer(npc.getDialogue().length - 2, this.dialogueBox);
          } else if (npc.getProgression() > 6) {
            npc.talkToPlayer(npc.getDialogue().length - 1, this.dialogueBox);
          }
          console.log(npc.getProgression());

          npc.giveReward(game);
        }
      }
    });
  }

  /**
   * Function that checks if the answer is either right or wrong
   *
   * @param npc The specific NPC whose answer needs to be checked
   * @param input The answer that needs to be checked for
   * @returns if the answer is right or wrong.
   */
  // eslint-disable-next-line class-methods-use-this
  public checkForRightAnswer(npc: NPC, input: string): boolean {
    let rightOrWrong = false;

    if (npc.getRightAnswer() === input) {
      // console.log('this is the right answer');
      rightOrWrong = true;
    }
    console.log(rightOrWrong);
    return rightOrWrong;
  }

  /**
   * A method that lets you have a conversation with the monster
   *
   * @param monster the monster that needs to be talked with
   * @param talk checks if the monster is able to talk or not
   */
  public monsterConversation(monster: NPC, talk: boolean): void {
    if (this.collidesWith(monster)) {
      console.log('Touching the monster');
      this.dialogueBox.setDisplay(true);
      if (talk) {
        // For each dialogue in the NPC, checks if the quest is completed.
        // After calls the respective talk function and progresses further
        for (let i = 0; i < monster.getDialogue().length; i += 1) {
          if (i === monster.getProgression()) {
            monster.talkToPlayer(i, this.dialogueBox);
          }
        }
        monster.progressFurther();
      } else {
        monster.talkToPlayer(Game.randomNumber(0, 2), this.dialogueBox);
      }
    }
  }

  /**
   * Method that interacts with the current object
   *
   * @param object the object that is being used
   */
  public interactWithObject(object: GameItem): void {
    if (this.collidesWith(object)) {
      console.log(object.getYesorNoText());
    }
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
