var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
    preload: preload,
    create: create,
    update: update
    }
};

var game = new Phaser.Game(config);

var peixin;

function preload() { 
    
    this.load.image("mar", 'assets/bg_azul-claro.png');

    this.load.image("logo", 'assets/logo-inteli_azul.png');

    this.load.image("peixe", 'assets/peixes/peixinho_azul.png');

    //Daqui pra baixo são as imagens extras
    this.load.image("peixonauta", 'assets/peixes/peixonauta.png');

    this.load.image("nemo", 'assets/peixes/nemo.png');

    this.load.image("disco", 'assets/peixes/disco.png');

    this.load.image("floor", 'assets/peixes/floor.png');
    
}

function create() {
    
    const imamar = this.add.image(400, 300, "mar");
    imamar.setDepth(1);

    const imalogo = this.add.image(400, 525, "logo").setScale(0.5);
    imalogo.setDepth(2)
    
    //Guardar o peixe em uma variável
    peixin = this.add.image(400, 300, "peixe");
    peixin.setDepth(4);
    
    //Transformando a variável
    peixin.setFlip(true, false);

    //Peixes extras
    const imanauta = this.add.image(80, 80, "peixonauta");
    imanauta.setDepth(3);

    const imanemo = this.add.image(720, 550, "nemo");
    imanemo.setDepth(3);

    const imadisco = this.add.image(400, 60, "disco");
    imadisco.setDepth(5)

    const imagem = this.add.image(400, 400, "floor");
    imagem.setDepth(2);

 }

function update() {

    //Adicionando movimento para o peixe
    peixin.x = this.input.x;
    peixin.y = this.input.y;
 }