class Floor {
  constructor(y_pos) {
      this.y = y_pos;
      this.fillColor = "#4B2E19"
      this.width = 1000;
      this.height = 30;

  }

  show() {
      fill("#4B2E19");
      rect(0, this.y, this.width, this.height);
  }
}
