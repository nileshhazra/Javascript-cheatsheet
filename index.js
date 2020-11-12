// Factory Function
function createCirlce(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
  }

const circle = createCirlce(1);
circle.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);
another.draw();
