class Mango {
  constructor(x, y, r) {
    this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("images/mango.png");
		this.body = Bodies.circle(this.x, this.y, this.r, {isStataic: true, restitution: 0, friction: 1});
		World.add(world, this.body);
	}

	display() {
		var mangoPos = this.body.position;
		push();
		translate(mangoPos.x, mangoPos.y);
		imageMode(CENTER);
		image(this.image, 0, 0, this.r*2, this.r*2)
		pop();
  }
}