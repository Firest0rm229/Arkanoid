let game = {
    ctx: null,
    platform: null,
    ball: null,
    sprites: {
        background: null,
        ball: null,
        platform: null
    },
    init: function() {
        this.ctx = document.getElementById("mycanvas").getContext("2d");
    },
    preload(callback) {
        let loaded = 0;
        let required = Object.keys(this.sprites).length;

        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = "img/" + key + ".png";
            this.sprites[key].addEventListener("load", () => {
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
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, 0, 0, this.platform.width, this.platform.height, this.platform.x, this.platform.y, this.platform.width, this.platform.height); // Добавьте размеры и координаты для платформы аналогично мячу, если они заданы в объекте платформы
    },
    start: function() {
        this.init();
        this.preload(() => {
            this.run();
        });
    }
};

game.ball = {
    x: 320,
    y: 280,
    width: 20,
    height: 20
};

game.platform = {
    x: 280,
    y: 300,
    width: 104, // Укажите ширину и высоту вашей картинки платформы (в зависимости от вашего спрайта)
    height: 24
};

window.addEventListener("load", () => {
    game.start();
});