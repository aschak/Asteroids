

(function() {

  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(attributes) {
    // var vel = Asteroids.Util.randomVec();

    attributes.color = Asteroid.COLOR;
    attributes.radius = Asteroid.RADIUS;
    attributes.vel = Asteroids.Util.randomVec();

    Asteroids.MovingObject.call(this, attributes);
      // {pos: {[21, 32]} , vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR});

    };

  Asteroids.Asteroid.COLOR = "#123456";
  Asteroids.Asteroid.RADIUS = "5";


  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);


}());
