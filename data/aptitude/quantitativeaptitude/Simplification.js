const simplificationQuestions = [
    {
      question: "What is the value of 12 + 24 ÷ 6 × 3?",
      options: ["24", "26", "28", "30"],
      correctAnswer: "26",
      explanation: "Using BODMAS: 24 ÷ 6 = 4, then 4 × 3 = 12, then 12 + 12 = 26."
    },
    {
      question: "Simplify: 48 ÷ 8 + 6 × 5",
      options: ["30", "33", "36", "40"],
      correctAnswer: "36",
      explanation: "48 ÷ 8 = 6, then 6 × 5 = 30, then 6 + 30 = 36."
    },
    {
      question: "What is the value of (25 + 5) × 4 ÷ 2?",
      options: ["50", "55", "60", "65"],
      correctAnswer: "60",
      explanation: "(25 + 5) = 30, then 30 × 4 = 120, then 120 ÷ 2 = 60."
    },
    {
      question: "Simplify: 18 × (12 ÷ 6) + 5",
      options: ["41", "35", "40", "45"],
      correctAnswer: "41",
      explanation: "12 ÷ 6 = 2, then 18 × 2 = 36, then 36 + 5 = 41."
    },
    {
      question: "What is the value of 64 ÷ 8 × 2 + 3?",
      options: ["19", "16", "17", "18"],
      correctAnswer: "19",
      explanation: "64 ÷ 8 = 8, then 8 × 2 = 16, then 16 + 3 = 19."
    },
    {
      question: "Simplify: (45 - 5) ÷ 5 + 4 × 2",
      options: ["12", "14", "16", "18"],
      correctAnswer: "14",
      explanation: "(45 - 5) = 40, then 40 ÷ 5 = 8, then 4 × 2 = 8, then 8 + 6 = 14."
    },
    {
      question: "What is the value of 144 ÷ 12 + 7 × 3?",
      options: ["29", "30", "31", "32"],
      correctAnswer: "30",
      explanation: "144 ÷ 12 = 12, then 7 × 3 = 21, then 12 + 18 = 30."
    },
    {
      question: "Simplify: (36 ÷ 6) × (8 ÷ 2)",
      options: ["18", "20", "24", "30"],
      correctAnswer: "24",
      explanation: "36 ÷ 6 = 6, then 8 ÷ 2 = 4, then 6 × 4 = 24."
    },
    {
      question: "What is the value of 15 × 2 - 8 ÷ 4?",
      options: ["26", "27", "28", "30"],
      correctAnswer: "28",
      explanation: "15 × 2 = 30, then 8 ÷ 4 = 2, then 30 - 2 = 28."
    },
    {
      question: "Simplify: (50 ÷ 10) + (30 ÷ 5)",
      options: ["8", "9", "10", "11"],
      correctAnswer: "11",
      explanation: "50 ÷ 10 = 5, 30 ÷ 5 = 6, then 5 + 6 = 11."
    },
    {
      question: "What is the value of 100 - (48 ÷ 6) × 4?",
      options: ["60", "64", "68", "72"],
      correctAnswer: "68",
      explanation: "48 ÷ 6 = 8, then 8 × 4 = 32, then 100 - 32 = 68."
    },
    {
      question: "Simplify: 7 × (16 ÷ 4) - 3",
      options: ["24", "25", "26", "27"],
      correctAnswer: "25",
      explanation: "16 ÷ 4 = 4, then 7 × 4 = 28, then 28 - 3 = 25."
    },
    {
      question: "What is the value of (99 + 1) ÷ 5?",
      options: ["10", "20", "25", "30"],
      correctAnswer: "20",
      explanation: "99 + 1 = 100, then 100 ÷ 5 = 20."
    },
    {
      question: "Simplify: 64 ÷ (8 × 2) + 5",
      options: ["7", "8", "9", "10"],
      correctAnswer: "9",
      explanation: "8 × 2 = 16, then 64 ÷ 16 = 4, then 4 + 5 = 9."
    },
    {
      question: "What is the value of 144 ÷ (12 + 4)?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "9",
      explanation: "12 + 4 = 16, then 144 ÷ 16 = 9."
    },
    {
      question: "Simplify: (40 + 60) ÷ (10 × 2)",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
      explanation: "40 + 60 = 100, then 10 × 2 = 20, then 100 ÷ 20 = 5."
    },
    {
      question: "What is the value of (25 × 4) ÷ (50 ÷ 2)?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
      explanation: "25 × 4 = 100, 50 ÷ 2 = 25, then 100 ÷ 25 = 4."
    },
    {
      question: "Simplify: 90 ÷ (5 × 3) + 2",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
      explanation: "5 × 3 = 15, then 90 ÷ 15 = 6, then 6 + 2 = 8."
    },
    {
      question: "What is the value of (150 ÷ 5) × (3 ÷ 1)?",
      options: ["75", "80", "85", "90"],
      correctAnswer: "90",
      explanation: "150 ÷ 5 = 30, then 3 ÷ 1 = 3, then 30 × 3 = 90."
    },
    {
      question: "Simplify: (121 ÷ 11) × (9 ÷ 3)",
      options: ["30", "33", "36", "39"],
      correctAnswer: "33",
      explanation: "121 ÷ 11 = 11, then 9 ÷ 3 = 3, then 11 × 3 = 33."
    }
  ];
  
export default simplificationQuestions;  