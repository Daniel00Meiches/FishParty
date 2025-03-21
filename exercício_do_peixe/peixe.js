var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // Centralizando a tela do jogo
    scale: {
        mode: Phaser.Scale.FIT,
      },
    autoCenter: Phaser.Scale.CENTER,
    scene: {
    preload: preload,
    create: create,
    update: update
    }
};

var game = new Phaser.Game(config);

var peixin;

function preload() { 
    
    this.load.image("mar", 'assets/bg_rosa.png');

    this.load.image("bluemar", 'assets/bg_azul.png');

    this.load.image("logo", 'assets/logo-inteli_azul.png');

    this.load.image("peixe", 'assets/peixes/peixinho_azul.png');

    //Daqui pra baixo são as imagens extras
    this.load.image("peixonauta", 'assets/peixes/peixonauta.png');

    this.load.image("nemo", 'assets/peixes/nemo.png');

    this.load.image("disco", 'assets/peixes/disco.png');

    this.load.image("floor", 'assets/peixes/floor.png');
    
}

function create() {
    
    let imamar = this.add.image(400, 300, "mar");
    imamar.setDepth(1);

    let imalogo = this.add.image(400, 525, "logo").setScale(0.5);
    imalogo.setDepth(2)
    
    //Guardar o peixe em uma variável
    peixin = this.add.image(400, 300, "peixe");
    peixin.setDepth(4);
    
    //Transformando a variável
    peixin.setFlip(true, false);

    //Peixes extras
    let imanauta = this.add.image(80, 80, "peixonauta");
    imanauta.setDepth(3);

    let imanemo = this.add.image(720, 550, "nemo");
    imanemo.setDepth(3);

    let imadisco = this.add.image(400, 60, "disco");
    imadisco.setDepth(5)

    let imagem = this.add.image(400, 400, "floor");
    imagem.setDepth(2);

    // evento de mudança de orientação
    game.scale.on('orientationchange', function(orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT');
        }  else if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE');
        } 
    });

 }

function update() {
    //Adicionando movimento para o peixe
    peixin.x = this.input.x;
    peixin.y = this.input.y;
 }
