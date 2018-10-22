/*
canvasID

canvasID = 0 - Intro
canvasID = 1 - MainMenu
canvasID = 2 - gameEasy
canvasID = 3 - gameHard
*/

var canvasID;

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadgameEasy();
	preloadgameHard();
}

function setup()
{
	setupIntro();
	setupMainMenu();
	setupgameEasy();
	setupgameHard();

	canvasID = 0;
}

function draw()
{
	if (canvasID == 0)
	{
		drawIntro();
	}
	if (canvasID == 1)
	{
		drawMainMenu();
	}
	if (canvasID == 2)
	{
		drawgameEasy();
	}
	if (canvasID == 3)
	{
		drawgameHard();
	}
}
