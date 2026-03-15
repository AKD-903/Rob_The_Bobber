class Rob {
  constructor(x, y, color = "black", direction, speed = 2) {
    this.loc = createVector(x, y);
    this.vel = createVector(0, 0); 
    this.head_radius = 10;
    this.color = color;
    this.direction = direction;

    this.horiziontal_speed = 3
    // Speed For Vertical (Keep this named 'speed!')
    this.speed = speed;
    
    this.radius = 30;
  }

show() {
  
  fill(this.color);
  stroke(0);

  // Head
  
  ellipse(this.loc.x, this.loc.y, this.head_radius * 2);

  // Body
  rect(this.loc.x - 5, this.loc.y + 10, 10, 20);

  // Arms
  rect(this.loc.x - 15, this.loc.y + 10, 10, 20); // Left arm
  rect(this.loc.x + 5, this.loc.y + 10, 10, 20);  // Right arm

  // Legs
  rect(this.loc.x - 5, this.loc.y + 30, 5, 20);   // Left leg
  rect(this.loc.x + 0, this.loc.y + 30, 5, 20);   // Right leg
  
  //border
  noFill();
  // noStroke();
  rect(this.loc.x-30,this.loc.y-10,60,60);
}


  move(left_boundary, right_boundary) {
    // Only change location if these doesn't violate a boundary.
    let x_res = this.loc.x + this.vel.x
    if ((x_res - this.radius > left_boundary) && (x_res + this.radius < right_boundary)) {
      this.loc.add(this.vel);
    }
  }

  // Can set a boundary (so the player cannot go off the map / move beyond a locked door.)
  // Left Boundary is how far and 
  update(left_boundary=0, right_boundary=1000) {
    this.move(left_boundary, right_boundary);
    this.vel.set(0,0);
    this.show();
  }
  
  /** 
  hasCollisionWithBox(box) {
    let robX = this.loc.x;
    let robY = this.loc.y;

    let RectX;
    let RectY;

    // Left of the rectangle
    if (robX < box.loc.x) RectX = box.loc.x;

    // Right of the rectangle
    else if (robX > box.loc.x + box.width) RectX = box.loc.x + box.width;

    // Above the rectangle
    if (robY < box.loc.y) RectY = box.loc.y;

    // Below the rectangle
    else if (robY > box.loc.y + box.height) RectY = box.loc.y + box.height;

    let point = createVector(RectX, RectY)
    let obj_dist = p5.Vector.dist(this.loc, point);

    return obj_dist <= this.radius;
  }
  */

  hasOverlapWithDoor(box) {
    let BoxX;
   
    if (this.loc.x < box.loc.x) BoxX = box.loc.x
    else if (this.loc.x > box.loc.x + box.width) BoxX  = box.loc.x + box.width

    let x_dist = Math.abs(this.loc.x - BoxX)
    if (this.loc.y + 50 == box.loc.y + box.height && x_dist <= this.radius) {
      return true
    } else {
      return false
    }
  }

  hasCollisionWithBullet(bullet) {

    // X-Axis
    if (bullet.loc.x >= this.loc.x - 30 && bullet.loc.x <= this.loc.x + 30) {
      if (bullet.loc.y + 30 == this.loc.y + 50) {
        return true
      }
      
    }
    return false
  }

  hasCollisionsWithLight(camera) {
    // Define light cone points in camera-local space
    let localLight = [
      createVector(0, 0),
      createVector(100, 275),
      createVector(-100, 275),
    ];
  
    // Transform light points to world space using rotation + translation
    let light = localLight.map(v => {
      let rotated = createVector(
        v.x * cos(camera.angle) - v.y * sin(camera.angle),
        v.x * sin(camera.angle) + v.y * cos(camera.angle)
      );
      return p5.Vector.add(rotated, camera.loc);
    });
  
    // Point-in-triangle test
    return this.pointInTriangle(this.loc, light[0], light[1], light[2]);
  }
  
  
  // Helper function for point-in-triangle test
  pointInTriangle(p, a, b, c) {
    const sign = (p1, p2, p3) => {
      return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
    }
  
    let d1 = sign(p, a, b);
    let d2 = sign(p, b, c);
    let d3 = sign(p, c, a);
  
    let has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    let has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);
  
    return !(has_neg && has_pos);
  }
  

    /** 
    // The actual light (not the camera) is slightly offset
    let LightX = camera.loc.x - 60
    let LightY = camera.loc.y + 10

    let corner1 = createVector(LightX, LightY)
    let corner2 = createVector(LightX + camera.width, LightY)
    let corner3 = createVector(LightX, LightY + camera.height)
    let corner4 = createVector(LightX + camera.width, LightY + camera.height)
    let corners = [corner1, corner2, corner3, corner4]

    for (i = 0; i < corners.length; i++) {
      if (corners[i].x >= this.loc.x && corners[i].x <= this.loc.x + 30 && corners[i].y > this.loc.y && corners[i].y < this.loc.y + 50) {
        return true
      }
    }
    return false
    */

    hasCollisionWithCircle(circle) {
      let radius = circle.radius;
      let dist = p5.Vector.dist(this.loc, circle.loc);
      return dist <= radius + 30;
    }
  }
  

   
  
    /** 
    let robX = this.loc.x;
    let robY = this.loc.y;

    // Left of the rectangle
    if (box.loc.x < box.loc.x) robX = box.loc.x;

    // Right of the rectangle
    else if (this.loc.x > box.loc.x + box.radius) robX = box.loc.x + box.radius;

    // Above the rectangle
    if (this.loc.y < box.loc.y) robY = box.loc.y;

    // Below the rectangle
    else if (this.loc.y > box.loc.y + box.radius) robY = box.loc.y + box.radius;


    let obj_dist = p5.Vector.dist(this.loc, robVector);

    return obj_dist <= this.radius;
    */

