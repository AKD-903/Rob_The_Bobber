class Laser {
    constructor(x, y) {
      this.loc = createVector(x, y)
      this.height = 170
      this.width = 30
      this.active = 1
    }
    
    show() {
      if (this.active == 1) {
        noStroke()
        fill(255, 255, 0)
        rect(this.loc.x, this.loc.y, this.width, this.height, 20, 20, 20, 20)
      } else {
        noStroke()
        fill(0, 255, 0)
        rect(this.loc.x, this.loc.y, this.width, this.height, 20, 20, 20, 20)
      }
    }
    update() {
      this.show()
    }
    
}

class LaserGate {
  constructor(x, y) {
    // Flash-time is how long it takes to switch between on (yellow) and off (green)
    
    // Number of Lasers
    this.num_lasers = random(3, 5)
    
    // How long the lasers have been up.
    this.active_time = 0
    
    // How long they can be up before they become deactivited
    this.allowed_time = random(7, 10)
    
    // Whether The LaserGate is Active
    this.is_active = 1
    
    this.loc = createVector(x, y)
    
    // Lasers in LaserGate
    this.lasers = []
    this.width = 0
    this.height = 170
    for (let i=0; i < this.num_lasers; i++) {
      // Create New Laser in Laser-Gate
      let x_pos = this.loc.x + (i * 50)
      let y_pos = this.loc.y
      this.lasers.push(new Laser(x_pos, y_pos))

      // Make the total width of LaserGate (this.width) longer (because we have another laser)
      this.width += 50
    }
  }
  show() {
    for (let i=0; i < this.lasers.length; i++) {
      this.lasers[i].update()
      this.lasers[i].active = this.is_active
    }
  }
  update() {
    // Deactiviate Lasers if they've been up for too long.
    this.active_time += 1 / frameRate()
    if (this.active_time >= this.allowed_time) {
      this.active_time = 0
      this.is_active *= -1
    }
    
      
    this.show()
  }
}