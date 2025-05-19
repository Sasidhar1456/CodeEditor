export const LANGUAGE_VERSIONS = {
    python: "3.10.0",
    javascript: "18.15.0",
    typescript: "5.0.3",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
}

export const CODE_SNIPPETS = {
  python: `num1 = int(input(" "))\nnum2 = int(input(" "))\nprint(f"The sum of {num1} and {num2} is {num1 + num2}")`,

  javascript: `const num1 = parseInt(prompt(" "));\nconst num2 = parseInt(prompt(" "));\nconsole.log(\`The sum of \${num1} and \${num2} is \${num1 + num2}\`);`,

  typescript: `const num1: number = parseInt(prompt(" ")!);\nconst num2: number = parseInt(prompt(" ")!);\nconsole.log(\`The sum of \${num1} and \${num2} is \${num1 + num2}\`);`,

  java: `import java.util.Scanner;\n\npublic class Main {\n public static void main(String[] args) {\n Scanner scanner = new Scanner(System.in);\n System.out.print(" ");\n int num1 = scanner.nextInt();\n System.out.print(" ");\n int num2 = scanner.nextInt();\n System.out.println("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));\n }\n}`,

  csharp: `using System;\n\nclass Program {\n static void Main() {\n Console.Write(" ");\n int num1 = int.Parse(Console.ReadLine());\n Console.Write(" ");\n int num2 = int.Parse(Console.ReadLine());\n Console.WriteLine("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));\n }\n}`,

  php: `<?php\n$first = readline(" ");\n$second = readline(" ");\necho "The sum of " . $first . " and " . $second . " is " . ($first + $second);\n?>`,
};
