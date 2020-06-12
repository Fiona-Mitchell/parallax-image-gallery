// html setup
var itemsHTMLColletion = document.getElementsByClassName('parallax-item');
var itemsArray = Array.from(itemsHTMLColletion);


var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0
  }
};

// This is an input set up
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;



// This is an output set up
var output = {
  x: {
  start: -150,
  end: 150,
  current: 0,
},
  y: {
    start: -150,
    end: 150,
    current: 0,
  },
};

// This is output set up
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;



var handleMouseMove = function (event) {
  // mouse x input
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
// mouse y input
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

// connect input to ouput

// output x
output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)

// output y
output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)

//apply output to html
itemsArray.forEach(function(item, k){
    var depth = parseFloat(item.dataset.depth, 10);
    var itemOutput = {
      x: output.x.current - (output.x.current * depth)
    }
    console.log(k, 'depth', depth)
    item.style.transform = 'translate('+output.x.current+'px, '+output.y.current+'px)';
});


// console.log('output.x.current', output.x.current)
// console.log('fractionY', input.mouseY.fraction)}
}

var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;

  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}



window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)
