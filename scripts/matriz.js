const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

exibe(){
    let x = this.frameAtual % 4 * this.tamX;
    let y = Math.floor(this.frameAtual / 4) * this.tamY;
    
    image(this.imagem, 0, height- this.alturaPersonagem, this.larguraPersonagem, this.alturaPersonagem, x, y, this.tamX, this.tamY); 
    this.anima();
  }

