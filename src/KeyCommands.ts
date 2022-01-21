import KeyListener from './KeyListener.js';

export default class KeyCommands {
  private keyboard: KeyListener;

  /**
   * Constructor for the KeyCommands class
   */
  constructor() {
    this.keyboard = new KeyListener();
  }

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
    return this.keyboard.isKeyTyped(KeyListener.KEY_M);
  }
}
