var tessel = require('tessel');
// Import the neopixels library
var Neopixels = require('npx');
var accel = require('accel-mma84').use(tessel.port['A']);
// Make an instance of the strip
var npx = new Neopixels(30);

function drip(colour){
       	var blood = npx.newAnimation(30)
        for (var f=0;f<30;f++){
           for(var pix=0;pix<f;pix++){
        	blood.setPixel(pix,colour,f);
           }
        }
	npx.enqueue(blood,10);
	npx.run();
}

var rateInHz = 12.5;
var oldxyz = [0,0,0];
// Initialize the accelerometer.
accel.on('ready', function () {
  accel.setOutputRate( rateInHz, function () {
    // Stream accelerometer data
  accel.on('data', function (xyz) {
     var rgb =[]; 
     for(var i=0;i<3;i++){
       rgb.push(Math.abs(100.0*(xyz[i]-oldxyz[i])));
    	oldxyz[i] = xyz[i];
     }
//     console.log(rgb);
     drip(rgb);
  });
  });
});

accel.on('error', function(err){
  console.log('Error:', err);
});

 

