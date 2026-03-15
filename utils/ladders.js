class Ladder {
  constructor(x, y) {
    this.loc = createVector(x, y)
    this.height = 200
    this.width = 50

  }

  show() {
    fill(128,128,128)
    noStroke();
    rect(this.loc.x, this.loc.y, this.width, this.height)
    for (let i = 0; i < this.height; i+= 10) {
      fill(255)
      rect(this.loc.x, this.loc.y + i, this.width, 5)
    }

    
    fill(128,128,128)
    rect(this.loc.x,this.loc.y, 10,this.height)
    rect(this.loc.x + 40,this.loc.y, 10,this.height)
  }
}