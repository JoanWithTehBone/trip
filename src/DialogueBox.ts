import Game from './Game.js';
import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import NPC from './NPC.js';

export default class DialogueBox extends GameItem {
  private display: boolean;

  private currentDialogue: number;

  private xPosition: number;

  private yPosition: number;

  private textXPos: number;

  private textYPos: number;

  private width: number;

  private height: number;

  private dialogueList: string[];

  private keyboard: KeyListener;

  private player: Player;

  private game: Game;

  private npc: NPC;

  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param xPos the x position
   * @param yPos the y position
   * @param npc nice
   * @param dialogue yep
   */
  constructor(game: Game, xPos: number, yPos: number, npc: NPC) {
    super('', xPos, yPos);
    this.display = false;
    // Positioning
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.textXPos = xPos + 250;
    this.textYPos = yPos + 75;
    this.width = (game.canvas.width / 5) * 3;
    this.height = (game.canvas.height / 5);
    this.dialogueList = npc.getDialogue();
    console.log(this.dialogueList);

    this.game = game;
    this.keyboard = new KeyListener();
    this.npc = npc;
  }

  public drawBox(ctx: CanvasRenderingContext2D): void {
    if (this.display) {
      ctx.clearRect(this.xPosition, this.yPosition, 700, 200);
      // Drawing a white rectangle on the canvas background
      ctx.fillRect(this.xPosition, this.yPosition, 700, 200);
      // console.log(this.npc.getProgression());
      this.writeTextToBox(this.currentDialogue);
    }
  }

  public writeTextToBox(currentDialogue: number): void {
    this.game.writeTextToCanvas(this.dialogueList[currentDialogue], 32, this.textXPos, this.textYPos, 'center', 'black');
  }

  /**
   * Sets the display to be shown or not to be shown
   *
   * @param active Sets the new state of displaying
   */
  public setDisplay(active: boolean): void {
    this.display = active;
  }

  public getDisplay(): boolean {
    return this.display;
  }

  public getTextXPos(): number {
    return this.textXPos;
  }

  public getTextYPos(): number {
    return this.textYPos;
  }

  public setCurrentDialogue(currentDialogue: number): void {
    this.currentDialogue = currentDialogue;
  }
}
