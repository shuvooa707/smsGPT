interface Shape {
    public double area();
}

interface Drawable {
    public void draw();
}

class Circle implements Shape, Drawable {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double area() {        
        return Math.PI * Math.pow(radius, 2);    
    }

    public void draw() {        
        // implementation of drawing logic for Circle    
    }
}

public class JavaCode1 {
    public static void main(String[] args) {
        Circle circle = new Circle(7.7);
        circle.area();
    }
}