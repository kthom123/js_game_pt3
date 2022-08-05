/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas3');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

class Enemy {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
    }
    update(){
        this.x++;
        this.y++;
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};
const enemy1 = new Enemy();

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.update();
    enemy1.draw();
    requestAnimationFrame(animate);
}
animate();
