class Monster extends PIXI.Sprite {
    constructor (x =0, y =0, texture, name = "none", hp = "100", speed = 5){
        super(texture);
        this.anchor.set(0.5);
        this.name = name;
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.speed = speed;
    }

    status() {
        return this.name + " has " + this.hp + " health";
    }

    move() {
        this.x = this.x + this.speed;
        if((this.x > app.view.width - (this.width /2)) || (this.x < (this.width / 2))){
            this.speed = -this.speed;
        }

    }
}