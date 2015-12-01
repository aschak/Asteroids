

(function() {

  if(typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate() { }

    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function() {
    var xRev = Math.random() > 0.5 ? 1 : -1;
    var vx = Math.random() * 5 * xRev;
    var yRev = Math.random > 0.5 ? 1 : -1;
    var vy = Math.random() * 5 * yRev;
    return [vx, vy];
  }


}());
