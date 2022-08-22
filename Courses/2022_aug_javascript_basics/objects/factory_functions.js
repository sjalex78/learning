const circle = {
  radius: 1,
  location: {
    x: 1
    y:1},
    isVisible: true,
draw: function(){
  console.log ('draw')
}
};
//Factory Function
function createCircle(radius) {
return {
  //radius: radius
  radius,
  draw: function(){
  console.log ('draw')
    }
  };
}

const circle1 =createCircle(1);
console.log(circle1);
//duplicate the methods if you make circle 2!
