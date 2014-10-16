function setup()
{
	createCanvas(800,800)
	background(0);
}

function draw()
{
	background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

	drawDonut(255, 164, 164,100,200);
	drawDonut(164,172,255,200,400);
	drawDonut(164, 255, 229,400,200);
	drawDonut(255,242,164,600,400);
}

function drawDonut(r,g,b, X, Y )

{

	//d1
	fill(r,g,b);
	ellipse(X, Y, 200, 200);
	fill(0);
	ellipse(X, Y, 120, 120);

}