import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import NPC from './NPC.js';
import DialogueBox from './DialogueBox.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  private dialogueBox: DialogueBox;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   * Initialize Player
   *
   * @param xPos xPosition of the player
   * @param yPos yPostition of the player
   * @param dialogueBox BOX
   */
  public constructor(
    xPos: number,
    yPos: number,
    dialogueBox: DialogueBox,
  ) {
    super('./assets/img/character_robot_walk0.png', xPos, yPos);
    this.xVel = 3;
    this.yVel = 3;
    this.keyboard = new KeyListener();

    this.dialogueBox = dialogueBox;
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
    return this.keyboard.isKeyTyped(KeyListener.KEY_C);
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

  // public interactWithBaker(): boolean {
  //   // create a new array with garbage item that are still on the screen
  //   // (filter the clicked garbage item out of the array garbage items)
  //   if (this.collidesWith(this.baker)) {
  //     console.log('INTERACTION WITH THE BAKER:)');
  //     return false;
  //   }
  //   return true;
  // }

  // public interactWithBlackSmith(): boolean {
  //   // create a new array with garbage item that are still on the screen
  //   // (filter the clicked garbage item out of the array garbage items)
  //   if (this.collidesWith(this.blackSmith)) {
  //     console.log('INTERACTION WITH THE BLACKSMITH:)');
  //     return false;
  //   }
  //   return true;
  // }

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
    // eslint-disable-next-line @typescript-eslint/no-shadow
    npcs.forEach((element) => {
      // create a new array with garbage item that are still on the screen
      // (filter the clicked garbage item out of the array garbage items)
      if (this.collidesWith(element)) {
        this.dialogueBox.setDisplay(true);
        console.log('INTERACTION WITH THE npc:)');
        if (element.getProgression() + 1 >= element.getDialogue().length) {
          element.talkToPlayer(3, this.dialogueBox);
        } else if (element.questCompleted()) {
          element.talkToPlayer(2, this.dialogueBox);
          element.setProgression(element.getProgression() + 1);
        } else if (element.getProgression() < 2) {
          element.talkToPlayer(element.getProgression(), this.dialogueBox);
          element.setProgression(element.getProgression() + 1);
        }
        collides = false;
      }
    });
    return collides;
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
}
