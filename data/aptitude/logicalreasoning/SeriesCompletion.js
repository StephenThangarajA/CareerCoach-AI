const seriesCompletionQuestions = [
    {
        question: "2, 4, 8, 16, ?",
        options: ["24", "32", "36", "40"],
        correctAnswer: "32",
        explanation: "Each number is multiplied by 2: 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32."
    },
    {
        question: "3, 6, 11, 18, ?",
        options: ["25", "27", "29", "31"],
        correctAnswer: "27",
        explanation: "Each term increases by consecutive odd numbers: +3, +5, +7, +9 → 18 + 9 = 27."
    },
    {
        question: "1, 1, 2, 3, 5, ?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "This is a Fibonacci series: 1, 1, 2, 3, 5, (5+3) = 8."
    },
    {
        question: "5, 10, 20, 40, ?",
        options: ["50", "60", "70", "80"],
        correctAnswer: "80",
        explanation: "Each term is doubled: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40, 40 × 2 = 80."
    },
    {
        question: "121, 144, 169, 196, ?",
        options: ["225", "216", "210", "205"],
        correctAnswer: "225",
        explanation: "These are squares of consecutive numbers: 11², 12², 13², 14², so next is 15² = 225."
    },
    {
        question: "1, 4, 9, 16, 25, ?",
        options: ["30", "35", "36", "40"],
        correctAnswer: "36",
        explanation: "These are squares of natural numbers: 1², 2², 3², 4², 5², so next is 6² = 36."
    },
    {
        question: "100, 95, 85, 70, ?",
        options: ["50", "45", "55", "60"],
        correctAnswer: "50",
        explanation: "Each term decreases by increasing multiples of 5: -5, -10, -15, -20 → 70 - 20 = 50."
    },
    {
        question: "2, 6, 12, 20, ?",
        options: ["28", "30", "32", "36"],
        correctAnswer: "30",
        explanation: "Each term increases by consecutive even numbers: +4, +6, +8, +10 → 20 + 10 = 30."
    },
    {
        question: "3, 9, 27, 81, ?",
        options: ["162", "243", "324", "405"],
        correctAnswer: "243",
        explanation: "Each term is multiplied by 3: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81, 81 × 3 = 243."
    },
    {
        question: "2, 3, 5, 7, 11, ?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "13",
        explanation: "These are prime numbers: 2, 3, 5, 7, 11, so the next prime is 13."
    },
    {
        question: "4, 9, 16, 25, ?",
        options: ["30", "32", "36", "40"],
        correctAnswer: "36",
        explanation: "These are squares of natural numbers: 2², 3², 4², 5², so next is 6² = 36."
    },
    {
        question: "6, 11, 21, 36, ?",
        options: ["51", "56", "61", "66"],
        correctAnswer: "56",
        explanation: "Pattern: +5, +10, +15, +20 → 36 + 20 = 56."
    },
    {
        question: "100, 97, 92, 85, ?",
        options: ["75", "77", "78", "79"],
        correctAnswer: "76",
        explanation: "Each term decreases by consecutive odd numbers: -3, -5, -7, -9 → 85 - 9 = 76."
    },
    {
        question: "12, 24, 48, 96, ?",
        options: ["120", "144", "192", "240"],
        correctAnswer: "192",
        explanation: "Each term is doubled: 12 × 2 = 24, 24 × 2 = 48, 48 × 2 = 96, 96 × 2 = 192."
    },
    {
        question: "1, 8, 27, 64, ?",
        options: ["100", "121", "125", "144"],
        correctAnswer: "125",
        explanation: "These are cubes of natural numbers: 1³, 2³, 3³, 4³, so next is 5³ = 125."
    },
    {
        question: "7, 14, 28, 56, ?",
        options: ["63", "70", "84", "112"],
        correctAnswer: "112",
        explanation: "Each term is multiplied by 2: 7 × 2 = 14, 14 × 2 = 28, 28 × 2 = 56, 56 × 2 = 112."
    },
    {
        question: "50, 45, 40, 35, ?",
        options: ["25", "30", "32", "28"],
        correctAnswer: "30",
        explanation: "Each term decreases by 5: 50 - 5 = 45, 45 - 5 = 40, 40 - 5 = 35, 35 - 5 = 30."
    },
    {
        question: "11, 22, 33, 44, ?",
        options: ["55", "66", "77", "88"],
        correctAnswer: "55",
        explanation: "Each term increases by 11: 11 + 11 = 22, 22 + 11 = 33, 33 + 11 = 44, 44 + 11 = 55."
    },
    {
        question: "17, 34, 68, 136, ?",
        options: ["204", "272", "289", "300"],
        correctAnswer: "272",
        explanation: "Each term is multiplied by 2: 17 × 2 = 34, 34 × 2 = 68, 68 × 2 = 136, 136 × 2 = 272."
    },
    {
        question: "9, 18, 36, 72, ?",
        options: ["108", "144", "126", "162"],
        correctAnswer: "144",
        explanation: "Each term is multiplied by 2: 9 × 2 = 18, 18 × 2 = 36, 36 × 2 = 72, 72 × 2 = 144."
    }
];

export default seriesCompletionQuestions;