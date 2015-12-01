

(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    // setInterval(this.Game.moveObjects.bind(this.Game), 20);
    // setInterval(this.Game.draw.bind(this.Game, this.ctx), 20);
    setInterval(function() {
      // console.log(this)
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this),20);
  }

}());
