const circle = {
  radius: 1
};

//you can not reassign a constant but change it properties.
circle.color ='yellow';
circle.draw = function(){}

delete circle.color;
delete circle.draw;

console.log(circle);

//Constructor
