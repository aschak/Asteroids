

(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.game = params.game;
    this.color = params.color;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    var x = this.pos[0] + this.vel[0];
    var y = this.pos[1] + this.vel[1];

    this.pos = [x,y];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var ourPos = this.pos;
    var otherPos = otherObject.pos;

    var distance = Math.sqrt(Math.pow((ourPos[0] - otherPos[0]), 2)
    + Math.pow((ourPos[1] - otherPos[1]), 2));

    return distance < (parseInt(this.radius) + parseInt(otherObject.radius));
  }


}());
