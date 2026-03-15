class Guard {
  constructor(x, y, speed = 2) {
    // Location and Velocity Vectors
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0); 
    
    // Head Radius
    this.head_radius = 10;

    this.speed = speed;
    this.direction = -1 
    // -1 is --->, +1 is <----

    // Information About Bullets
    this.bullets = [];
    this.bulletCooldown = 0;
  }
  update() {
    this.show();
    this.move();
    this.shoot();
  }
  show() { 
    fill("red");
    stroke(0);
  
    ellipse(this.loc.x, this.loc.y, this.head_radius * 2);
    rect(this.loc.x - 5, this.loc.y + 10, 10, 20);
    rect(this.loc.x - 15, this.loc.y + 10, 10, 20); // Left arm
    rect(this.loc.x + 5, this.loc.y + 10, 10, 20);  // Right arm
    rect(this.loc.x - 5, this.loc.y + 30, 5, 20);   // Left leg
    rect(this.loc.x + 0, this.loc.y + 30, 5, 20);   // Right leg
    if(this.direction === -1) {
      fill(0)
      circle(this.loc.x + 5,this.loc.y - 2.5,5)
      rect(this.loc.x - 10, this.loc.y + 20, 50, 5)
      rect(this.loc.x - 10, this.loc.y + 20, 5, 15)
    }
    if (this.direction === 1) {
      fill(0)
      circle(this.loc.x - 5, this.loc.y - 2.5, 5)
      rect(this.loc.x - 40, this.loc.y + 20, 50, 5)
      rect(this.loc.x + 5, this.loc.y + 20, 5, 15)
    }
    noFill();  
  }
  move() {
      this.loc.x += this.speed
      if (this.loc.x >= width - 50 || this.loc.x <= 50) {
        this.speed *= -1
        this.direction *= -1
    }
  }

  shoot() {
    if (this.bulletCooldown <= 0) {
      let bulletX = this.direction === -1 
        ? this.loc.x + 40   // Guard facing left, shoot from right side
        : this.loc.x - 40;  // Guard facing right, shoot from left side

      this.bullets.push(new Bullet(bulletX, this.loc.y + 20, this.direction));
      this.bulletCooldown = 60;
    } else {
      this.bulletCooldown--;
    }

    for (let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].update();
      this.bullets[i].show();

      // Delete bullets if they have traveled over 400 pixels
      if (this.bullets[i].loc.x < 0 || this.bullets[i].loc.x > width || this.bullets[i].elasped_dist >= 500) {
        this.bullets.splice(i, 1);
      }
    }
  }

  hasCollisionWithDoor(door) {
    //if (this.loc.x >= width - 50 || this.loc.x <= 50)

    // If Guard is moving rightward
    console.log(this.loc.y, door.loc.y + door.height)
    if (this.direction == -1) {
      if (this.loc.y + 50 == door.loc.y + door.height && this.loc.x + 60 >= door.loc.x && this.loc.x < door.loc.x) return true
    } else {
      if (this.loc.y + 50 == door.loc.y + door.height && this.loc.x - 25 <= door.loc.x + door.width && this.loc.x + 50 > door.loc.x + door.width) return true
    }
    return false
  }
}
