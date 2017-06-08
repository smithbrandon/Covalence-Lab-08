var Shape = function (width, height) {
    this.height = height;
    this.width = width;
    this.radius = height / 2;
    this.name = "Shape";
    this.div = document.createElement('div');
    this.div.style.backgroundColor = 'white';
    this.div.className = 'shape';
    this.div.style.width = width + 'px';
    this.div.style.height = height + 'px';
    this.div.style.left = Math.floor(Math.random() * (600 - width)) + 'px';
    this.div.style.top = Math.floor(Math.random() * (600 - height)) + 'px';
    document.getElementById('pad').appendChild(this.div);
    this.div.addEventListener('click', function () {
        this.describe();
    }.bind(this));
    this.div.addEventListener('dblclick', function(){
        this.div.remove();
    }.bind(this));
}
Shape.prototype.describe = function () {
    document.getElementById('name').innerHTML = this.name;
    document.getElementById('wid').innerHTML = this.width;
    document.getElementById('hei').innerHTML = this.height;
    document.getElementById('rad').innerHTML = this.radius;
    document.getElementById('area').innerHTML = this.area();
    document.getElementById('peri').innerHTML = this.perimeter();
}

Shape.prototype.area = function () {
    return this.height * this.width;
}
Shape.prototype.perimeter = function () {
    return this.height * 2 + this.width * 2;
}

var Rectangle = function (width, height) {
    Shape.call(this, width, height);
    this.name = 'Rectangle';
    this.radius = "Undefined"
    this.div.style.backgroundColor = 'green';
    this.div.className = 'shape rectangle';

}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var Square = function (height) {
    Rectangle.call(this, height, height);
    this.name = 'Square';
    this.radius = "Undefined"
    this.div.style.backgroundColor = 'red';
    this.div.style.width = this.width + 'px';
    this.div.className = 'shape square';
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var Circle = function (radius) {
    Shape.call(this, radius*2, radius*2);
    this.name = 'Circle';
    this.div.style.backgroundColor = 'purple';
    this.div.className += ' circle';
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.contstructor = Circle;

Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.height / 2, 2);
}
Circle.prototype.perimeter = function () {
    return 2 * Math.PI * (this.height / 2);
}

var Triangle = function (height) {
    Shape.call(this, height, height);
    this.name = 'Triangle';
    this.div.className += ' triangle';
    this.div.style.width = '0px';
    this.div.style.height = '0px';
    this.radius = "Undefined";
    this.div.style.backgroundColor = 'transparent';
    this.div.style.borderRightWidth = this.height + 'px';
    this.div.style.borderBottomWidth = this.height + 'px';

}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.area = function () {
    return (this.height * this.height) / 2;
}
Triangle.prototype.perimeter = function () {
    return 2 * this.height + (Math.sqrt(2 * Math.pow(this.height, 2)))
}

document.getElementById('rect').addEventListener('click', function () {
    var wid = document.getElementById('rectangleW').value;
    var hei = document.getElementById('rectangleH').value;
    new Rectangle(wid, hei);
})

document.getElementById('sq').addEventListener('click', function () {
    var hei = document.getElementById('square').value;
    new Square(hei);
})
document.getElementById('cir').addEventListener('click', function () {
    var rad = (document.getElementById('circle').value/2);
    new Circle(rad);
})
document.getElementById('tri').addEventListener('click', function () {
    var hei = document.getElementById('triangle').value;
    new Triangle(hei);
})