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
   * Method to check if the user is pressing the Space Key
   *
   * @returns true if the player is pressing the Space Key
   */
  public isPressing(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_SPACE);
  }

  /**
   * Method to check if the user is pressing the Q Key
   *
   * @returns true if the player is pressing the Q Key
   */
  public isContinuing(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_Q);
  }

  /**
   * Method to check if the user is pressing the N Key
   *
   * @returns true if the player is pressing the N Key
   */
  public isIgnoring(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_N);
  }

  /**
   * Method to check if the user is pressing the F Key
   *
   * @returns true if the player is pressing the F Key
   */
  public isFighting(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_F);
  }

  /**
   * Method to check if the user is pressing the Y Key
   *
   * @returns true if the player is pressing the Y Key
   */
  public isResponding(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
  }

  /**
   * Method to check if the user is pressing the M Key
   *
   * @returns true if the player is pressing the M Key
   */
  public openControls(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_M);
  }

  /**
   * Method to check if the user is pressing the A Key
   *
   * @returns true if the player is pressing the A Key
   */
  public answerQuestA(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_A);
  }

  /**
   * Method to check if the user is pressing the B Key
   *
   * @returns true if the player is pressing the B Key
   */
  public answerQuestB(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_B);
  }

  /**
   * Method to check if the user is pressing the C Key
   *
   * @returns true if the player is pressing the C Key
   */
  public answerQuestC(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_C);
  }

  /**
   * Method to check if the user is pressing the D Key
   *
   * @returns true if the player is pressing the D Key
   */
  public answerQuestD(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_D);
  }

  /**
   * Method to check if the user is pressing the E Key
   *
   * @returns true if the player is pressing the E Key
   */
  public answerQuestE(): boolean {
    return this.keyboard.isKeyTyped(KeyListener.KEY_E);
  }
}
