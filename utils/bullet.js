class Bullet {
    constructor(x, y, direction) {
      this.loc = createVector(x, y);
      this.direction = -direction; // store the direction (+1 or -1)
      this.speed = 5;
      this.elasped_dist = 0
    }
  
    update() {
      this.loc.x += this.speed * this.direction; // move left or right
      this.elasped_dist += this.speed
    }
    
    show() {
      fill(0);
      noStroke();
      circle(this.loc.x, this.loc.y, 10);
    }

    hasCollisionWithDoor(door) {
      // X-axis matches
      if (this.loc.x >= door.loc.x && this.loc.x <= door.loc.x + door.width) {
        // Y-Axis matches (bullet and door are one the same floor)
        //console.log(this.loc.y)
        //console.log(door.loc.y + door.)
        if (this.loc.y + 30 == door.loc.y + door.height) {
          return true
        }
      }
      return false
    }
  }