//there are more methods in the scene life-cycle (*render,shutdown,destroy*);

// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');
//life cycle
// Some parameters for our scene ( Our own customer variables - these are NOT part of the Phaser API)
gameScene.init = function () { //  init
    //Place to defined custom var
    this.playerSpeed = 1.5;
    this.enemySpeed = 2;
    this.enemyMaxY = 280;
    this.enemyMinY = 80;
};




gameScene.preload = function() {                                   //preload
   //Load images
  this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('dragon', 'assets/dragon.png');
    this.load.image('treasure', 'assets/treasure.png');
};

//Executed once, after assets were loaded
gameScene.create = function() {                                       //create
 //Background
 let bg = this.add.sprite(0,0, 'background'); // Origin default center
 //Change origin to the top-left of the sprite
  bg.setOrigin(0,0);

  //Player
    this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');

  // Scale down
  this.player.setScale(0.5);

};

//Executed on every frame (60 time per second)
gameScene.update = function() {
  if(this.input.activePointer.isDown) {
      //Player walks
     this.player.x += this.playerSpeed;
  }
};
//our game's configuration

let config = {
    type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
    width: 640, // game width
    height: 360, // game height
    scene: gameScene // our newly created scene
};

//create the game, and pass it the configuration
let game = new Phaser.Game(config);