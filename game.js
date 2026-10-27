let game = {
    ctx: null,
    spirites: {
        background: null,
        ball: null,
        platvorm: null  
    },
    init: function() {
        this.ctx = document.getElementById('mycanvas').getContext('2d');
    },
    preload(callback) {
        let loaded = 0;
        let required = Object.keys(this.spirites).length;

        for (let key in this.spirites) {
            this.spirites[key] = new Image();
            this.spirites[key].src = "img/" + key + ".png";
            this.spirites[key].addEventListener("load", () => {
                ++loaded;
                if (loaded >= required) {
                    callback();
                }
            });
        }
    },
    run() {
        window.requestAnimationFrame(() => {
            this.render();
        });
    },
    render() {
        this.ctx.drawImage(this.spirites.background, 0, 0);
        this.ctx.drawImage(this.spirites.ball, 0, 0);
        this.ctx.drawImage(this.spirites.platvorm, 0, 0);
    },
    start: function() {
        this.init();
        this.preload(() => {
            this.run();
        });
    }
};

window.addEventListener('load', () => {
    game.start();
});
