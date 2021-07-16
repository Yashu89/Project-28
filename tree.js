class Tree
{
	constructor(x,y)
	{
		//x=x;
		//y=y;
		this.width=450;
		this.height=600;
		this.thickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(x, y, this.width, this.thickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, y-this.height/2, this.thickness, this.height, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(x+this.width/2, y-this.height/2, this.thickness, this.height, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}

}