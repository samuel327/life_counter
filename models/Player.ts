export class Player {
  playerNumber: number;

  constructor(playerNumber: number) {
    this.playerNumber = playerNumber;
  }
  get() {
    return this.playerNumber;
  }
}
