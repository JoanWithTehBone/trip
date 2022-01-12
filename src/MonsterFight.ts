import DialogueBox from './DialogueBox.js';
import Game from './Game.js';
import GameOver from './GameOver.js';
import GameWon from './GameWon.js';
import KeyListener from './KeyListener.js';
import Monster from './Monster.js';
import NPC from './NPC.js';
import Player from './Player.js';
import Scene from './Scene.js';
import UserData from './UserData.js';

export default class MonsterFight extends Scene {
  private player: Player;

  private keyboard: KeyListener;

  private monster: Monster;

  private user: UserData;

  private dialogueBox: DialogueBox;


  private monsterFightArray: NPC[];

  private monsterNewLocation: number [];

  /**
   * Constructor for the Monster Fight scene
   *
   * @param game the game class
   * @param player the player
   */
  constructor(game: Game, player: Player) {
    super(game);

    this.player = player;
    this.monster = new Monster(game.canvas);
    this.user = game.getPlayerStats();

    // Create DialogueBox
    this.dialogueBox = this.player.getDialogueBox();

    // Create a new array of Monster dialogue to pass on
    this.monsterFightArray = [];
    this.monsterFightArray.push(this.monster);

    this.monsterNewLocation = [];

    this.keyboard = this.player.getKeys();
  }

  /**
   * Method to initiate the fight between player and monster
   */
  public fightWithMonster(): void {
    console.log('In Progress');

    this.playerFights();
    this.monsterFights();
    this.animateMovement();
  }

  /**
   * Method to calculate the player's damage to the monster
   */
  public playerFights(): void {
    this.monster.getMonsterStats().setHP(this.monster.getMonsterStats().getHP()
      - ((this.user.getATK() + Game.randomNumber(1, 5)) - this.monster.getMonsterStats().getDEF()));
    console.log(`Monster HP is now ${this.monster.getMonsterStats().getHP()}`);
  }

  /**
   * Method to calculate the monster's damage to the player
   */
  public monsterFights(): void {
    if (this.monster.getMonsterStats().getHP() > 0) {
      console.log('Oww, I cast fist!');
      this.user.setHP(this.user.getHP()
      - (this.monster.getMonsterStats().getATK() - this.user.getDEF()));
      console.log(`Player's HP is now ${this.user.getHP()}`);
    } else {
      console.log("I'm not the monster here, you are!");
    }
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    this.player.move(this.game.canvas);
    console.log('BATTLE!!!');
  }

  /**
   * Animate the monster movement to the new location
   */
  public animateMovement(): void {
    // Should monster move? Yes
    this.monster.move(80, 200);
    this.monster.draw(this.game.ctx);

    // If at it's new location, stop moving
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   *
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(): Scene {
    this.keyboard.onFrameStart();

    if (this.player.isPressing()) {
      this.player.interactWith(this.monsterFightArray);
    }

    if (this.player.isContinuing()) {
      this.dialogueBox.setDisplay(false);
    }

    if (this.player.isFighting()) {
      console.log('I fight thee monster!');
      this.fightWithMonster();
    }

    if (this.player.isResponding()) {
      console.log('Ok');
    }

    // Move to level clear screen
    if (this.hasWon()) {
      return new GameWon(this.game);
    }

    if (this.hasLost()) {
      return new GameOver(this.game);
    }

    return null;
  }

  /**
   * Check if the player has beaten the monster
   *
   * @returns True/false
   */
  private hasWon(): boolean {
    return this.monster.getMonsterStats().getHP() <= 0;
  }

  /**
   * Check if the monster has beaten the player
   *
   * @returns True/false
   */
  private hasLost(): boolean {
    return this.user.getHP() <= 0;
  }

  private showFightProgress() {
    // const playerRect = this.game.ctx.fillRect(40, 15, 160, 200);
    this.game.ctx.fillStyle = 'white';
    this.game.ctx.fillRect(35, 15, 170, 200);
    // Show player stats
    this.game.writeTextToCanvas('The Hero', 36, 120, 50, 'center', 'black');
    const playerHp = `HP: ${this.game.getPlayerStats().getHP()}`;
    this.game.writeTextToCanvas(playerHp, 36, 120, 100, 'center', 'black');
    const playerAttack = `ATK: ${this.game.getPlayerStats().getATK()}`;
    this.game.writeTextToCanvas(playerAttack, 36, 120, 150, 'center', 'black');
    const playerDefense = `DEF: ${this.game.getPlayerStats().getDEF()}`;
    this.game.writeTextToCanvas(playerDefense, 36, 120, 200, 'center', 'black');

    // Show monster stats
    this.game.ctx.fillStyle = 'white';
    this.game.ctx.fillRect(this.game.canvas.width - 200, 15, 160, 100);
    this.game.writeTextToCanvas('Monster', 36, this.game.canvas.width - 120, 50, 'center', 'black');
    const monsterHp = `HP: ${this.monster.getMonsterStats().getHP()}`;
    this.game.writeTextToCanvas(monsterHp, 36, this.game.canvas.width - 120, 100, 'center', 'black');
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // this.monster.draw(this.game.ctx);
    this.animateMovement();
    this.player.draw(this.game.ctx);

    this.dialogueBox.drawBox(this.game.ctx);

    this.showFightProgress();
  }
}
