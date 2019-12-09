import { Button } from "../entities/Button.js";

export class BonusLevelSelect extends Phaser.Scene {
    constructor(PhaserGame)
    {
        super({key:"bonuslvl-select"});
        this.PhaserGame = PhaserGame;
    }

    create()
    {
        this.add.image(600, 300, 'bg').setDisplaySize(1200, 600);

        this.lvl1Button = new Button(this, 300, 300, 'lvl1Button', () => {
            this.scene.start('bonuslevel-1');
        }).setScale(4).setInteractive();

        this.lvl3Button = new Button(this, 700, 300, 'lvl3Button', () => {
            this.scene.start('bonuslevel-3');
        }).setScale(4).setInteractive();

        window.document.title = "A Western Story - Campaign";
    }
}