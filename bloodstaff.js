// Import the neopixels library
var Neopixels = require('npx');

// Make an instance of the strip
var npx = new Neopixels(30);

function drip(){
	for (var pix=0;pix<30;pix++){
	   var blood = npx.newAnimation(1)
	   blood.setAll([0,0,0xf]);
	   blood.setPixel(pix, [100,g,b],f)
	   npx.enqueue(blood,500);
	}
	npx.run();
}

drip();
 

