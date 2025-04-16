const numberSystemQuestions = [
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2",
      explanation: "2 is the smallest and the only even prime number."
    },
    {
      question: "What is the largest two-digit prime number?",
      options: ["89", "97", "91", "99"],
      correctAnswer: "97",
      explanation: "97 is the largest prime number below 100."
    },
    {
      question: "What is the sum of the first five prime numbers?",
      options: ["26", "28", "30", "32"],
      correctAnswer: "28",
      explanation: "The first five prime numbers are 2, 3, 5, 7, and 11. Their sum is 28."
    },
    {
      question: "What is the unit digit of 7^45?",
      options: ["3", "7", "9", "5"],
      correctAnswer: "3",
      explanation: "The unit digits of 7 cycle as 7, 9, 3, 1. 45 mod 4 = 1, so the unit digit is 3."
    },
    {
      question: "How many factors does 36 have?",
      options: ["6", "8", "9", "12"],
      correctAnswer: "9",
      explanation: "The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36."
    },
    {
      question: "What is the remainder when 1234 is divided by 5?",
      options: ["0", "1", "2", "4"],
      correctAnswer: "4",
      explanation: "The last digit of 1234 is 4. Any number ending in 4 gives remainder 4 when divided by 5."
    },
    {
      question: "What is the sum of the digits of 567?",
      options: ["18", "19", "17", "16"],
      correctAnswer: "18",
      explanation: "5 + 6 + 7 = 18."
    },
    {
      question: "Find the LCM of 12 and 18?",
      options: ["36", "48", "54", "72"],
      correctAnswer: "36",
      explanation: "LCM of 12 and 18 is 36."
    },
    {
      question: "Find the HCF of 24 and 36?",
      options: ["6", "12", "18", "24"],
      correctAnswer: "12",
      explanation: "HCF of 24 and 36 is 12."
    },
    {
      question: "Which number is a perfect square?",
      options: ["81", "88", "91", "99"],
      correctAnswer: "81",
      explanation: "81 is 9 squared."
    },
    {
      question: "What is the remainder when 1001 is divided by 11?",
      options: ["0", "1", "9", "10"],
      correctAnswer: "0",
      explanation: "1001 is divisible by 11."
    },
    {
      question: "How many prime numbers are there between 1 and 10?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4",
      explanation: "The primes are 2, 3, 5, and 7."
    },
    {
      question: "What is the sum of first 50 natural numbers?",
      options: ["1275", "1225", "1325", "1425"],
      correctAnswer: "1275",
      explanation: "Sum of first n numbers is n(n+1)/2. So, 50(51)/2 = 1275."
    },
    {
      question: "What is the cube root of 512?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8",
      explanation: "8³ = 512."
    },
    {
      question: "What is the last digit of 4^100?",
      options: ["0", "2", "4", "6"],
      correctAnswer: "6",
      explanation: "The unit digit of powers of 4 alternates between 4 and 6. Even powers end in 6."
    },
    {
      question: "Find the missing number: 5, 10, 20, 40, ?",
      options: ["60", "70", "80", "90"],
      correctAnswer: "80",
      explanation: "Each number is multiplied by 2."
    },
    {
      question: "Which number is divisible by 6?",
      options: ["24", "25", "27", "29"],
      correctAnswer: "24",
      explanation: "A number is divisible by 6 if it is divisible by both 2 and 3."
    },
    {
      question: "Find the next number in the sequence: 1, 3, 6, 10, 15, ?",
      options: ["20", "21", "22", "24"],
      correctAnswer: "21",
      explanation: "These are triangular numbers: n(n+1)/2."
    },
    {
      question: "What is the sum of the first 20 even numbers?",
      options: ["420", "440", "400", "460"],
      correctAnswer: "420",
      explanation: "Sum of first n even numbers is n(n+1). So, 20(21) = 420."
    },
    {
      question: "What is the largest three-digit number divisible by 7?",
      options: ["994", "997", "999", "980"],
      correctAnswer: "994",
      explanation: "The largest three-digit number is 999. 999 mod 7 = 5, so the nearest multiple is 994."
    }
  ];
  
export default numberSystemQuestions;  