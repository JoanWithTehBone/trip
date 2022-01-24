import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import DialogueBox from './DialogueBox.js';
import Baker from './Baker.js';
import BlackSmith from './BlackSmith.js';
import Hunter from './Hunter.js';
import KeyCommands from './KeyCommands.js';
import NPC from './NPC.js';
import MonsterFight from './MonsterFight.js';
import QuestBox from './QuestBox.js';
import YesorNoQuestPrompt from './YesorNoQuestPrompt.js';
import FlyingDragonBaby from './FlyingDragonBaby.js';
import Controls from './Controls.js';
import Slime from './Slime.js';
import Fatcat from './Fatcat.js';
import QuestBoard from './QuestBoard.js';
import GameItem from './GameItem.js';

export default class Level extends Scene {
  // Player
  private controls: Controls;

  private dialogueBox: DialogueBox;

  private fatcat: Fatcat;

  private keyCommands: KeyCommands;

  private player: Player;

  private questBoard: GameItem;

  private questBox: QuestBox;

  private slime: Slime;

  private yesOrNoQuestPrompt: YesorNoQuestPrompt;

  // NPCS
  private baker: Baker;

  private blacksmith: BlackSmith;

  private hunter: Hunter;

  private flyingDragonBaby: FlyingDragonBaby;

  private npcs: NPC[];

  /**
   * Constructor for the Level class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    // Create Characters
    this.baker = new Baker(game.canvas);
    this.blacksmith = new BlackSmith(game.canvas);
    this.hunter = new Hunter(game.canvas);
    this.flyingDragonBaby = new FlyingDragonBaby(game.canvas);
    this.slime = new Slime();
    this.fatcat = new Fatcat();
    this.questBoard = new QuestBoard(game.canvas);

    // Create DialogueBox
    this.dialogueBox = new DialogueBox(
      this.game,
      this.game.canvas.width / 2 - 600, // xPosition
      (this.game.canvas.height / 5) * 3.7, // yPosition
    );

    // Create the QuestBox
    this.questBox = new QuestBox(
      this.game,
      this.game.canvas.width / 2 - 500, // xPosition
      (this.game.canvas.height / 8) * 0.5, // yPostition
    );

    // Create the Yes or no prompt box
    this.yesOrNoQuestPrompt = new YesorNoQuestPrompt(
      this.game,
      this.game.canvas.width / 2 - 300, // xPosition
      (this.game.canvas.height / 8) * 3, // yPostition
    );
    // Create new controls
    this.controls = new Controls(
      game,
      this.game.canvas.width / 2 - 500, // xPosition
      (this.game.canvas.height / 8) * 0.5,
    );

    // Create a new array of NPCS to pass on
    this.npcs = [];
    this.npcs.push(this.baker, this.blacksmith, this.hunter);

    // Create player
    this.player = new Player(
      game.canvas.width / 2,
      game.canvas.height / 2,
      this.dialogueBox,
      this.questBox,
      this.yesOrNoQuestPrompt,
    );

    this.keyCommands = this.player.getKeyboard();

    this.controls.setDisplay(true);
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    // Move the player
    this.player.move(this.game.canvas);
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
    this.keyCommands.getKeys().onFrameStart();
    // moves the dragonbaby across the screen
    this.flyingDragonBaby.move();
    // checks if the dragon baby is out of the canvas
    this.flyingDragonBaby.outOfCanvas(this.game.canvas);

    // Checks if the player is presing the interact button and gets rid of the questBox
    // Then it starts the Dialogue Lines
    if (this.keyCommands.isPressing()) {
      this.player.interactWithVillager(this.npcs);
      this.player.afterQuest(this.npcs, this.game);
      this.player.interactWithObject(this.questBoard);
    }

    // Checks if the player continues the conversation and gets rid of the dialogue box
    if (this.keyCommands.isContinuing()) {
      this.dialogueBox.setDisplay(false);
      this.controls.setDisplay(false);
    }

    // If you press M, open the control menu.
    if (this.keyCommands.openControls()) {
      this.controls.setDisplay(true);
    }

    // If you collide with the questboard and press Y, go to the monster fight
    if (this.keyCommands.isResponding()) {
      if (this.player.collidesWith(this.questBoard)) {
        return new MonsterFight(this.game, this.player, this.npcs);
      }
      this.player.questWithVillager(this.npcs);
    }

    // Button to get rid of any yes or no prompt
    if (this.keyCommands.isIgnoring()) {
      this.player.resetQuest(this.npcs);
      this.yesOrNoQuestPrompt.setDisplay(false);
    }

    if (this.questBox.getDisplay()) {
      this.player.questAnswer(this.npcs);
    }

    if (this.keyCommands.openControls()) {
      if (this.controls.getDisplay()) {
        this.controls.setDisplay(false);
      } else {
        this.controls.setDisplay(true);
      }
    }

    return null;
  }

  /**
   * Draw the game to the canvas
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Draws the invisible icons of the houses to the screen
    this.baker.draw(this.game.ctx);
    this.blacksmith.draw(this.game.ctx);
    this.hunter.draw(this.game.ctx);

    // Draw the sprites/interactable objects to the canvas
    this.fatcat.getSprite().drawSprite(this.game.ctx, this.fatcat);
    this.slime.getSprite().drawSprite(this.game.ctx, this.slime);
    this.player.getSprite().drawSprite(this.game.ctx, this.player);
    this.flyingDragonBaby.draw(this.game.ctx);
    this.questBoard.draw(this.game.ctx);

    // Draw the dialogue boxes to the canvas
    this.questBox.drawBox(this.game.ctx);
    this.dialogueBox.drawBox(this.game.ctx);
    this.yesOrNoQuestPrompt.drawBox(this.game.ctx);
    this.controls.drawBox(this.game.ctx);
  }

  /**
   * Get the Player's details
   *
   * @returns the Player's details
   */
  public getPlayer(): Player {
    return this.player;
  }
}
