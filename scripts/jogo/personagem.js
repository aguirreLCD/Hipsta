class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
  
    this.variacaoY = variacaoY;
    //substitui yInicial por chao
    this.chao = height - this.altura - this.variacaoY;
    this.y = this.chao;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;

    console.log(this.y);
    console.log(this.chao);
  }

  pula(){
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y >= this.chao) {
      this.y = this.chao;
      this.pulos = 0;
    }    
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1200);
  }

  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false
    }
    // noFill();
    // rect(this.x, this.y, this.largura, this.altura);
    // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

    const precisao = 0.7;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao,
      );

      return colisao;
  }

}
