const algebraQuestions = [
    {
        question: "Solve for x: 2x + 5 = 15",
        options: ["5", "10", "7", "3"],
        correctAnswer: "5",
        explanation: "2x + 5 = 15 → 2x = 10 → x = 5."
    },
    {
        question: "If x^2 = 64, what are the possible values of x?",
        options: ["8", "-8", "Both 8 and -8", "None"],
        correctAnswer: "Both 8 and -8",
        explanation: "x^2 = 64 → x = ±8."
    },
    {
        question: "Solve: (x - 3)(x + 4) = 0",
        options: ["x = 3 or x = -4", "x = -3 or x = 4", "x = 3 only", "x = -4 only"],
        correctAnswer: "x = 3 or x = -4",
        explanation: "Using the zero-product property, x - 3 = 0 or x + 4 = 0 → x = 3 or x = -4."
    },
    {
        question: "Factorize: x^2 - 9",
        options: ["(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x - 4)(x + 5)", "None"],
        correctAnswer: "(x - 3)(x + 3)",
        explanation: "x^2 - 9 is a difference of squares: (x - 3)(x + 3)."
    },
    {
        question: "Solve for x: 3x - 7 = 2x + 5",
        options: ["x = 12", "x = -12", "x = 10", "x = -10"],
        correctAnswer: "x = 12",
        explanation: "3x - 7 = 2x + 5 → 3x - 2x = 5 + 7 → x = 12."
    },
    {
        question: "If x + y = 10 and x - y = 4, find x.",
        options: ["7", "8", "9", "6"],
        correctAnswer: "7",
        explanation: "Adding both equations: (x + y) + (x - y) = 10 + 4 → 2x = 14 → x = 7."
    },
    {
        question: "Expand: (x + 2)^2",
        options: ["x^2 + 4x + 4", "x^2 + 2x + 4", "x^2 + 4x + 2", "x^2 + 2x + 2"],
        correctAnswer: "x^2 + 4x + 4",
        explanation: "(x + 2)^2 = x^2 + 4x + 4."
    },
    {
        question: "Solve: x^2 - 5x + 6 = 0",
        options: ["x = 2 or x = 3", "x = -2 or x = -3", "x = 1 or x = 6", "x = 2 only"],
        correctAnswer: "x = 2 or x = 3",
        explanation: "Factorizing: (x - 2)(x - 3) = 0 → x = 2 or x = 3."
    },
    {
        question: "If 3x - 2 = 4x + 5, find x.",
        options: ["-7", "7", "3", "-3"],
        correctAnswer: "-7",
        explanation: "3x - 2 = 4x + 5 → 3x - 4x = 5 + 2 → -x = 7 → x = -7."
    },
    {
        question: "Find the roots of x^2 - 7x + 10 = 0.",
        options: ["x = 2, 5", "x = -2, -5", "x = 3, 4", "x = 1, 6"],
        correctAnswer: "x = 2, 5",
        explanation: "Factorizing: (x - 2)(x - 5) = 0 → x = 2 or x = 5."
    },
    {
        question: "Solve for x: 2(x - 3) = x + 4",
        options: ["10", "8", "5", "6"],
        correctAnswer: "10",
        explanation: "2(x - 3) = x + 4 → 2x - 6 = x + 4 → 2x - x = 10 → x = 10."
    },
    {
        question: "If x^2 - 2x - 15 = 0, find x.",
        options: ["x = 5, -3", "x = 3, -5", "x = -3, -5", "x = 2, -2"],
        correctAnswer: "x = 5, -3",
        explanation: "Factorizing: (x - 5)(x + 3) = 0 → x = 5 or x = -3."
    },
    {
        question: "Solve: 3x + 2y = 12 and x - y = 2",
        options: ["x = 4, y = 2", "x = 3, y = 1", "x = 5, y = 3", "x = 2, y = 1"],
        correctAnswer: "x = 4, y = 2",
        explanation: "Solving by substitution, x = 4 and y = 2."
    },
    {
        question: "If a^2 - b^2 = 16 and a - b = 4, find a + b.",
        options: ["8", "6", "10", "4"],
        correctAnswer: "8",
        explanation: "a^2 - b^2 = (a - b)(a + b) → 16 = 4(a + b) → a + b = 8."
    },
    {
        question: "If 4x + 3 = 19, what is x?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "4x + 3 = 19 → 4x = 16 → x = 4."
    },
    {
        question: "Factorize: x^2 + 6x + 9",
        options: ["(x + 3)(x + 3)", "(x + 2)(x + 5)", "(x + 4)(x + 5)", "(x - 3)(x - 3)"],
        correctAnswer: "(x + 3)(x + 3)",
        explanation: "x^2 + 6x + 9 = (x + 3)(x + 3)."
    },
    {
        question: "Find the value of x: x/3 + 2 = 5",
        options: ["9", "6", "7", "8"],
        correctAnswer: "9",
        explanation: "x/3 + 2 = 5 → x/3 = 3 → x = 9."
    },
    {
        question: "If 2x + 3y = 12 and x = 2, find y.",
        options: ["3", "4", "5", "2"],
        correctAnswer: "3",
        explanation: "2(2) + 3y = 12 → 4 + 3y = 12 → 3y = 8 → y = 3."
    },
    {
        question: "Solve for x: x^2 - 4x = 0",
        options: ["x = 0, 4", "x = 0, -4", "x = 2, -2", "x = 3, -3"],
        correctAnswer: "x = 0, 4",
        explanation: "Factorizing: x(x - 4) = 0 → x = 0 or x = 4."
    },
    {
        question: "Find the sum of roots of the equation x^2 - 5x + 6 = 0",
        options: ["5", "6", "7", "8"],
        correctAnswer: "5",
        explanation: "Sum of roots = -(-5)/1 = 5."
    }
];

export default algebraQuestions;