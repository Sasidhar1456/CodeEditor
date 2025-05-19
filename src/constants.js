export const LANGUAGE_VERSIONS = {
    python: "3.10.0",
    javascript: "18.15.0",
    typescript: "5.0.3",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
}

export const CODE_SNIPPETS = {
  python: `num1 = int(input("Enter your 1st number: "))\nnum2 = int(input("Enter your 2nd number: "))\nprint("Sum of two numbers is", num1 + num2)`,
  javascript: `const num1 = parseInt(prompt("Enter your 1st number: "));\nconst num2 = parseInt(prompt("Enter your 2nd number: "));\nconsole.log("Sum of two numbers is", num1 + num2);`,
  typescript: `const num1: number = parseInt(prompt("Enter your 1st number: ")!);\nconst num2: number = parseInt(prompt("Enter your 2nd number: ")!);\nconsole.log("Sum of two numbers is", num1 + num2);`,
  java: `import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter your 1st number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter your 2nd number: ");\n    int num2 = scanner.nextInt();\n    System.out.println("Sum of two numbers is " + (num1 + num2));\n  }\n}`,
  csharp: `using System;\n\nclass Program {\n  static void Main() {\n    Console.Write("Enter your 1st number: ");\n    int num1 = int.Parse(Console.ReadLine());\n    Console.Write("Enter your 2nd number: ");\n    int num2 = int.Parse(Console.ReadLine());\n    Console.WriteLine("Sum of two numbers is " + (num1 + num2));\n  }\n}`,
  php: `<?php\n$first = readline("Enter your 1st number: ");\n$second = readline("Enter your 2nd number: ");\necho "Sum of two numbers is " . ($first + $second);\n?>`,
}