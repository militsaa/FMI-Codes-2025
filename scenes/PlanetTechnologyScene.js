class PlanetTechnologyScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlanetTechnologyScene' });
  }

  create() {
    this.add.text(400, 50, 'Planet 2', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
    // Example content here

    const backMenuBtn = this.add.text(400, 550, '← Menu', { fontSize: '24px', fill: '#f00' })
      .setOrigin(0.5)
      .setInteractive();

    backMenuBtn.on('pointerdown', () => {
      this.scene.start('MenuScene');
    });
  }
}
