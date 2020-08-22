function setup() {
  createCanvas(windowHeight, windowWidth);
  frameRate(42);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
  };
  botaoGerenciador = new BotaoGerenciador("Iniciar", width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
