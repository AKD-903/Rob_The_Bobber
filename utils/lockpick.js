class Lockpick {
  constructor() {
    // Initial state variables
    this.lockx = 250;
    this.lockvelocity = 3;
    this.picky_y = 675;
    this.picky_x = random(300, 700)

    this.pickvelocity = 0;
    this.lockStatus = "locked";  // renamed to avoid confusion with the class name
  }

  // Draws the static parts of the lock
  show() {
    strokeWeight(50);
    stroke(0);
    noFill();
    circle(500, 400, 550);

    fill(255, 215, 0);
    strokeWeight(5);
    rect(200, 400, 600, 500);

    fill("brown");
    rect(250, 450, 500, 200);

    // Draw the grey lock component
    fill("grey");
    rect(this.lockx, 450, 50, 200);

    // Draw the pick
    fill(150, 75, 0);
    rect(this.picky_x, this.picky_y, 25, 200);
  }

  // Updates The Moving Parts
  move() {
    // Move Lock Around
    this.lockx += this.lockvelocity;

    // Reverse direction when reaching boundaries
    if (this.lockx >= 700 || this.lockx <= 250) {
      this.lockvelocity *= -1;
    }

    // Move Pick
    this.picky_y += this.pickvelocity;
  }

  // Handles the lock logic
  update() {
    this.show()
    this.move()
    
    // Check if the pick has reached the unlocking position
    if (this.picky_y <= 450) {
      this.pickvelocity = 0;
      this.lockStatus = "picked";
    }
  }
    
  pick_lock() {
    // Check for user interaction (pressed)
    if (this.lockx > (this.picky_x - 15) && this.lockx < (this.picky_x + 25 + 15)) {
      console.log("should be unlocked!")
      this.lockvelocity = 0;
      this.pickvelocity = -2
    } 
  }
}
