//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const myCircle = createCircle(1);

// creating objects
//Constructor Functions

function Circle(radius) {
  this.radius = radius; //this references an empty object
  this.draw = function() {
    console.log ('draw');
  }
}

const circle = new Circle(1);
