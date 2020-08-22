class Vida {
  constructor(vidaTotalMaximo, vidaInicial) {
    this.vidaTotalMaximo = vidaTotalMaximo;
    this.vidaInicial = vidaInicial;
    this.vidas = this.vidaInicial;

    this.larguraVida = 25;
    this.alturaVida = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  exibe() {
    for(let i = 0; i < this.vidas; i++) {
      const margemVida = i * 10;
      const posicaoVida = this.xInicial * (1 + i);
      image(imagemVida, posicaoVida + margemVida, this.y, this.larguraVida, this.alturaVida);
    }
  }

  ganhaVida() {
    if(this.vidas < this.vidaTotalMaximo) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
  }

}