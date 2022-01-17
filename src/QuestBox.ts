import Baker from './Baker.js';
import DislplayItem from './DislplayItem.js';
import Game from './Game.js';

export default class QuestBox extends DislplayItem {
  private currentDialogue: number;

  private questList: string[];

  /**
   * Constructing the dialogue box
   *
   * @param game the game
   * @param baker baker
   * @param xPos the x position
   * @param yPos the y position
   */
  constructor(game: Game, baker: Baker, xPos: number, yPos: number) {
    super('./assets/img/questbox.png', baker, game, xPos, yPos, false, xPos + 20, yPos + 35);
  }

  /**
   * Method to draw the whole Box to the screen.
   *
   * TODO => Create an custom version of the textbox:
   *  - Add which NPC is talking
   *  - Add Image to the left
   *  - Change dimensions on the text to center it better
   *  - Add continue prompt to show how to continue.
   *
   * @param ctx CanvasRenderingContext
   */
  public drawBox(ctx: CanvasRenderingContext2D): void {
    if (this.display) {
      ctx.clearRect(this.xPosition, this.yPosition, 1000, 550);
      ctx.drawImage(this.img, this.xPosition, this.yPosition);
      // Drawing a white rectangle on the canvas background
      // ctx.fillRect(this.xPosition, this.yPosition, 1000, 550);
      // console.log(this.npc.getProgression());
      this.writeTextToBox();
    }
  }

  /**
   * Method to write the text in the box to the screen
   */
  public writeTextToBox(): void {
    this.game.writeTextToCanvas(this.baker.getQuestDialogue()[0], 26, this.textXPos, this.textYPos, 'center', 'black');
  }

  /**
   * Gets the yPosition of the text inside of the textbox
   *
   * @returns yPosition of the text inside of the textbox
   */
  public getTextYPos(): number {
    return this.textYPos;
  }

  /**
   * Sets the current integer of the dialogue index
   *
   * @param currentDialogue the current integer of dialogue -> currentindex
   */
  public setCurrentDialogue(currentDialogue: number): void {
    this.currentDialogue = currentDialogue;
  }

  /**
   * Sets the dialogue of the current character
   *
   * @param list the current list of dialogue
   */
  public setQuestList(list: string[]): void {
    this.questList = list;
  }
}
