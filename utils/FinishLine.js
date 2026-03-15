class FinishLine {
  constructor(x,y) {
    this.loc = createVector(x, y)
    this.radius = 50
    
  }
  show() {
    fill("yellow")
    ellipse(this.loc.x, this.loc.y, this.radius * 2,this.radius * 2)
  }
  
  update() {
    this.show()
  }  
}