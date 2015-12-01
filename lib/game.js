
(function() {

  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
  };

  Asteroids.Game.DIM_X = 1000; //Game constant might not be assigned
  Asteroids.Game.DIM_Y = 1000;
  Asteroids.Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function() {
    var asteroids = [];

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      asteroids.push(new Asteroids.Asteroid({pos: pos, game: this}));
    }

    return asteroids;
  }

  Game.prototype.randomPosition = function() {
    var posX = Math.random() * Game.DIM_X;
    var posY = Math.random() * Game.DIM_Y;

    return [posX, posY];
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach( function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
      pos[0] = Game.DIM_X + 1;
    } else if (pos[0] > Game.DIM_X) {
      pos[0] = -1;
    }

    if (pos[1] < 0) {
      pos[1] = Game.DIM_Y + 1;
    } else if (pos[1] > Game.DIM_Y) {
      pos[1] = -1;
    }

    return pos;
  };

  Game.prototype.checkCollisions = function() {
    var asteroids = this.asteroids;
    for (var i = 0; i < asteroids.length; i++) {
        var ourAsteroid = asteroids[i]
      for (var j = i + 1; j < asteroids.length; j++) {
        var theirAsteroid = asteroids[j];
        if(ourAsteroid.isCollidedWith(theirAsteroid)) {
          alert("COLLISION");
        }
      }
    }
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

}());
