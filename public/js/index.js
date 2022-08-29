
class TankWar {
    option;
    normalMaps;
    ctx;
    tank;
    normalWidth;
    normalHeight;
    onkeydown;
    constructor(option) {
        this.option = option;
        this.ctx = null;
        this.normalMaps = normalMaps;
        this.normalWidth = null;
        this.normalHeight = null;
        this.tank = null;
        this.onkeydown = this.keyBoard;
        this.cvs =  document.createElement('canvas');
       
    }

    getBox() {
        const mapBox = document.getElementById(this.option.el);
        return mapBox
    }

    createMap() {
        this.cvs.setAttribute('width', this.option.width)
        this.cvs.setAttribute('height', this.option.height);
        this.ctx = this.cvs.getContext("2d");
        this.ctx.fillStyle = 'blank';
        this.ctx.fillRect(0, 0, this.option.width, this.option.height);
        //绘制地形
        this.drawTerrain();

        this.getBox().appendChild(this.cvs);
    }

    drawTerrain() {

        const width = this.normalWidth;
        const height = this.normalHeight;
        const map = this.normalMaps;
        map.map((row, yAsis) => {
            row.map((item, xAsis) => {
                if (item.type === 0) {
                    this.ctx.fillStyle = 'rgba(0,0,0,0.3)'
                } else if (item.type === 1) {
                    this.ctx.fillStyle = 'rgba(	160,82,45,0.3)'
                } else if (item.type === 2) {
                    this.ctx.fillStyle = 'rgba(	255,250,240,0.3)'
                } else if (item.type === 3) {
                    this.ctx.fillStyle = 'rgba(	255,250,240,0.3)'
                } else {
                    this.ctx.fillStyle = 'rgba(0,0,0,0.3)'
                }
                this.ctx.fillRect(width * xAsis, height * yAsis, width, height);
            })
        })

    }

    drawElf() {

        const width = this.normalWidth;
        const height = this.normalHeight;
        this.ctx.fillStyle = 'rgba(255,0,0,1)'
        this.ctx.fillRect(0, 0, width, height)

    }

    keyBoard(event) {
        const e = event || window.event || arguments.callee.caller.arguments[0];
        
        if(e.keyCode===40){
            this.down(e.keyCode)
        }else if(e.keyCode===38){
            this.up(e.keyCode)
        }else if(e.keyCode===37){
            this.left(e.keyCode)
        }else if(e.keyCode===39){
            this.right(e.keyCode)
        }
    }

    right(event){
        console.log(event)
    }
    left(event){
        console.log(event)
    }
    up(event){
        console.log(event)
    }
    down(event) {
        console.log(event)
    }
    
    drawGun() {
        const width = this.normalWidth / 4;
        const height = this.normalHeight / 4;
    }

    initDrawSize() {
        const terrain = this.normalMaps
        this.normalWidth = this.option.width / terrain[0].length;
        this.normalHeight = this.option.height / terrain.length;
    }
    clearCanvas(){
    
        this.getBox().removeChild(this.cvs);
    }
    init() {
        this.initDrawSize();
        this.createMap();
        this.drawElf();
 
    }
}

