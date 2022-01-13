import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import DialogueBox from './DialogueBox.js';
import Baker from './Baker.js';
import BlackSmith from './BlackSmith.js';
import Hunter from './Hunter.js';
import KeyListener from './KeyListener.js';
import NPC from './NPC.js';

import MonsterFight from './MonsterFight.js';

import QuestBox from './QuestBox.js';
import YesorNoQuestPrompt from './YesorNoQuestPrompt.js';

export default class Level extends Scene {
  // Player
  private player: Player;

  private dialogueBox: DialogueBox;

  private questBox: QuestBox;

  private yesorNoQuestPrompt : YesorNoQuestPrompt;

  // NPCS
  private baker: Baker;

  private blacksmith: BlackSmith;

  private hunter: Hunter;

  private npcs: NPC[];

  // Keyboard
  private keyboard: KeyListener;

  /**
   * Creates a new instance of this class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    // Create Characters
    this.baker = new Baker();
    this.blacksmith = new BlackSmith();
    this.hunter = new Hunter();

    // Create DialogueBox
    this.dialogueBox = new DialogueBox(
      this.game,
      this.baker,
      this.game.canvas.width / 2 - 600, // xPosition
      (this.game.canvas.height / 5) * 3.7, // yPosition
    );

    // Create the QuestBox
    this.questBox = new QuestBox(
      this.game,
      this.baker,
      this.game.canvas.width / 2 - 500, // xPosition
      (this.game.canvas.height / 8) * 0.5, // yPostition
    );

    // Create the Yes or no prompt box
    this.yesorNoQuestPrompt = new YesorNoQuestPrompt(
      this.game,
      this.baker,
      this.game.canvas.width / 2 - 300, // xPosition
      (this.game.canvas.height / 8) * 3, // yPostition
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
      this.yesorNoQuestPrompt,
    );
    this.keyboard = this.player.getKeys();
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
    // this.player.onFrameStartListener();
    this.keyboard.onFrameStart();

    if (this.player.isPressing()) {
      this.questBox.setDisplay(false);
      this.player.interactWith(this.npcs);
    }

    if (this.player.isContinuing()) {
      this.dialogueBox.setDisplay(false);
    }

    if (this.player.isFighting()) {
      return new MonsterFight(this.game, this.player);
    }
    // when the player is in collision with the baker and answers yes upon the yesnoprompt when
    // the progression is on 5(the prompt) so that you can't open the questbox in between dialogue
    if (this.player.startQuestYes() && this.baker.getProgression() === 5
    && this.player.collidesWith(this.baker)) {
      // dialoguebox and the yesnoprompt gets removed from screen, the quest begins/shows on screen.
      this.yesorNoQuestPrompt.setDisplay(false);
      // this.player.questWith(this.npcs);
      this.questBox.setDisplay(true);
      // PROBLEM the text pops up but also the dialogue box underneath?
    }

    // when the player is in collision with the baker and answers no upon the yesnoprompt
    if (this.player.refuseQuestNo() && this.player.collidesWith(this.baker)) {
      // the yes no prompt gets removed and the progression (of dialogue) get set to 0
      // so the dialogue start over upon interacting with npc again.
      this.yesorNoQuestPrompt.setDisplay(false);
      this.baker.setProgression(0);
    } // PROBLEM remove the dialogue box except if added in here then dialogue box will also
    // remove even when not on the yesnoprompt upon clicking Key_N

    // if The questbox is displayed and C is clicked the dialoguebox
    // and the completed text will pop up
    // PROBLEM there is no reaction to the button
    if (this.questBox.getDisplay() && this.player.answerQuestC()) {
      this.dialogueBox.setDialogueList(this.baker.getquestResponseTextBaker());
      this.dialogueBox.setCurrentDialogue(1);
      this.questBox.setDisplay(false);
      this.dialogueBox.setDisplay(true);
    }

    // if the quest box is displayed and A or B or D is clicked the dialogeubox
    // and the fail text will pop up
    // PROBLEM there is no reaction to the button
    if (this.questBox.getDisplay() && (this.player.answerQuestA()
    || this.player.answerQuestB() || this.player.answerQuestD())) {
      this.dialogueBox.setDialogueList(this.baker.getquestResponseTextBaker());
      this.dialogueBox.setCurrentDialogue(0);
      this.questBox.setDisplay(false);
      this.dialogueBox.setDisplay(true);
    }

    return null;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    this.baker.draw(this.game.ctx);
    this.blacksmith.draw(this.game.ctx);
    this.hunter.draw(this.game.ctx);
    this.player.draw(this.game.ctx);

    this.questBox.drawBox(this.game.ctx);
    this.dialogueBox.drawBox(this.game.ctx);
    this.yesorNoQuestPrompt.drawBox(this.game.ctx);
    this.interact();
  }

  private interact() {
    const score = `Score: ${this.game.getPlayerStats().getScore()}`;
    this.game.writeTextToCanvas(score, 36, 120, 50);

    // Show HP
    const hp = `HP: ${this.game.getPlayerStats().getHP()}`;
    this.game.writeTextToCanvas(hp, 36, 120, 100);
  }
}
