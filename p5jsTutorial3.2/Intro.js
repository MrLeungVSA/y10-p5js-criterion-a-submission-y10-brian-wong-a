

function preloadIntro()
{
}

function setupIntro()
{
}

function drawIntro()
{
	createCanvas(700,500);

	background (125,125,125);

	fill (50,50,50);

	text("This is the Intro Page\n\nClick Anywhere to Continue",250,250);

	if (mouseIsPressed)
	{
		canvasID = 1
	}
}
