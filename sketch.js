const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
 polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);  
	engine = Engine.create();
	world = engine.world;

    ground = new Ground(500,580,200,20);
	ground1 = new Ground(900,480,200,20)
	polygon = Bodies.circle(50,500,20);
	
	World.add(world,polygon);
	
	





	slingshot = new SlingShot(polygon,{x:100,y:200});
	box1 = new Box(420,550,40,40)
	box2 = new Box(460,550,40,40)
	box3 = new Box(500,550,40,40)
	box4 = new Box(540,550,40,40)
	box5 = new Box(580,550,40,40)

	box11 = new Box(440,510,40,40)
	box12 = new Box(480,510,40,40)
	box13 = new Box(520,510,40,40)
	box14 = new Box(560,510,40,40)


    box21 = new Box(460,470,40,40)
	box22 = new Box(500,470,40,40)
	box23 = new Box(540,470,40,40)

	box31 = new Box(480,430,40,40)
	box32 = new Box(520,430,40,40)

    box41 = new Box(500,410,40,40)


    box51 = new Box(900,460,40,40)
    box52 = new Box(940,460,40,40)
	box53 = new Box(980,460,40,40)
	box54 = new Box(860,460,40,40)
	box55 = new Box(820,460,40,40)

	box61 = new Box(840,420,40,40)
    box62 = new Box(880,420,40,40)
	box63 = new Box(920,420,40,40)
	box64 = new Box(960,420,40,40)

	box71 = new Box(860,380,40,40)
    box72 = new Box(900,380,40,40)
	box73 = new Box(940,380,40,40)

	box81 = new Box(880,340,40,40)
    box82 = new Box(920,340,40,40)

	box91 = new Box(900,310,40,40)

	Engine.run(engine);
    
}
function draw() {
	background(0);
    
	imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
	
	Engine.update(engine)
	ground.display();
	ground1.display();
	slingshot.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();			

	box11.display();
	box12.display();
	box13.display();
	box14.display();

    box21.display();
	box22.display();
	box23.display();

    box31.display();
	box32.display();
	
	box41.display();

	box51.display();
	box52.display();
	box53.display();
	box54.display();
	box55.display();

	box61.display();
	box62.display();
	box63.display();
	box64.display();

    box71.display();
	box72.display();
	box73.display();

	box81.display();
	box82.display();

	box91.display();


	//image(polygonImg,150,570,60,60)
	
	drawSprites();   
  }
  function mouseDragged(){
	Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	slingshot.fly();
	}




















