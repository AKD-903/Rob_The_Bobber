class Camera {
    constructor(x, y, speed = 0.005) {
      this.loc = createVector(x, y);  // Location of the camera
      this.angle = 1.5 * PI
      this.speed = speed
      this.width = 120
      this.height = 200
    }
  
    update() {
      this.angle += this.speed;
      if (this.angle > 2.5 * PI || this.angle < 1.5 * PI) {
        this.speed *= -1
      }
      this.show()
    }
  
    show() {
      // Translate the origin around this point
      push(); 
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);

      noStroke();
      fill(253,251,211)
      // rect(-60, 25, this.width, this.height) // Light
      triangle(0, 0, 100, 275, -100, 275) // Light

      fill(1);
      rect(-10, 25, 20, 10); // Extra part

      fill(200);
      rect(-25, -25, 50, 50); // Main

      fill(0)
      ellipse(0, 0, 20, 20); // Lens
      
      fill ("red")
      circle(-23, 23, 8) // Light
      pop();
    }
  }