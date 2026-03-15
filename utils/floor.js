class Floor {
  constructor(y_pos) {
      this.y = y_pos;
      this.fillColor = "#FF0000"
      this.width = 1000;
      this.height = 30;

  }

  show() {
      fill("#FF0000");
      rect(0, this.y, this.width, this.height);
  }
}
