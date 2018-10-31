// declare bgm variable
var bgm;

function preload()
{
	// load sound file into variable bgm
	bgm = loadSound("https://saltysalt11242.github.io/p5jstutorial/p5jsTutorial4.1/sounds/Undertale_Megalovania.mp3");

}

function setup()
{
	createCanvas(800,600);

	// play music during setup so that it doesn't loop infinitely
	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for music goes to Toby Fox",10,40);


}
