class Door {
  constructor(x, y) {
    this.loc = createVector(x, y)
    this.locked_fillColor = color(169,169,169);
    this.opened_fillColor = color(0, 255, 0);
    this.height = 170
    this.width = 50
    this.status = "locked"
  }
  show() {
      if (this.status == "locked") {
        fill(this.locked_fillColor);
        noStroke();
        rect(this.loc.x, this.loc.y, this.width, this.height)
      } else if (this.status == "unlocked") {
        fill(this.opened_fillColor);
        noStroke();
        rect(this.loc.x, this.loc.y, this.width, this.height)
      }
  }
}