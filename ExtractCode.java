import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractCode {
    public static void main(String[] args) throws IOException    {
        String text = "In Java, a class can implement multiple interfaces by separating them with commas in the class declaration after the keyword \"implements\". \n\nFor example, suppose we have two interfaces: Shape and Drawable. We can implement both of them in a class called Circle:\n\n```interface Shape {\n    public double area();\n}\n\ninterface Drawable {\n    public void draw();\n}\n\nclass Circle implements Shape, Drawable {\n    private double radius;\n\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n\n    public double area() {\n        return Math.PI * Math.pow(radius, 2);\n    }\n\n    public void draw() {\n        // implementation of drawing logic for Circle\n    }\n}\n```\n\nIn the above code, the Circle class implements the Shape and Drawable interfaces. It provides the required implementation details for both of the interface methods area() and draw(). \n\nNote that if two interfaces contain a method with the same signature, then the implementation only needs to be provided once in the implementing ";

        Pattern pattern = Pattern.compile("```(.*?)```", Pattern.DOTALL);
        Matcher matcher = pattern.matcher(text);

        if (matcher.find()) {
            String javaCode = matcher.group(1);
            javaCode = javaCode.replace("\n", "");
            System.out.println(javaCode);
            Path path = Path.of("/home/shuvo/Desktop/code/node/openai/JavaCode1.java");
            File file = new File(path.toString());
            Files.write(path, javaCode.getBytes());
        } else {
            System.out.println("No Java code found");
        }
    }
}