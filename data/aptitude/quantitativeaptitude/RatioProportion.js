const ratiopropotionquestions = [
  {
    question: "The ratio of two numbers is 3:5. If their sum is 80, what is the larger number?",
    options: ["30", "40", "50", "60"],
    correctAnswer: "50",
    explanation: "Let the numbers be 3x and 5x. Given 3x + 5x = 80 → 8x = 80 → x = 10. So, larger number = 5 × 10 = 50."
  },
  {
    question: "If A:B = 2:3 and B:C = 4:5, what is A:C?",
    options: ["8:15", "2:5", "4:5", "5:8"],
    correctAnswer: "8:15",
    explanation: "A:B = 2:3, B:C = 4:5 → Multiply A:B by 4 and B:C by 3 to make B common: (8:12) and (12:15). Thus, A:C = 8:15."
  },
  {
    question: "The salaries of A and B are in the ratio 5:7. If A gets ₹10,000, how much does B get?",
    options: ["₹12,000", "₹14,000", "₹16,000", "₹18,000"],
    correctAnswer: "₹14,000",
    explanation: "Let A's salary be 5x and B's salary be 7x. Given 5x = 10,000 → x = 2,000. So, B's salary = 7 × 2,000 = ₹14,000."
  },
  {
    question: "If the ratio of the ages of A and B is 4:7 and A is 24 years old, what is B’s age?",
    options: ["35 years", "42 years", "48 years", "56 years"],
    correctAnswer: "42 years",
    explanation: "Let A’s age be 4x and B’s age be 7x. Given 4x = 24 → x = 6. So, B's age = 7 × 6 = 42 years."
  },
  {
    question: "A and B divide ₹4000 in the ratio 3:5. How much does A get?",
    options: ["₹1000", "₹1200", "₹1500", "₹1800"],
    correctAnswer: "₹1500",
    explanation: "Total parts = 3+5 = 8. A’s share = (3/8) × 4000 = ₹1500."
  },
  {
    question: "If x:y = 4:9 and y:z = 3:5, what is x:z?",
    options: ["4:15", "12:45", "12:25", "4:9"],
    correctAnswer: "4:15",
    explanation: "Multiply x:y (4:9) by 3 and y:z (3:5) by 9 to make y common: (12:27) and (27:45). Thus, x:z = 12:45 → 4:15."
  },
  {
    question: "A sum of ₹720 is divided among A, B, and C in the ratio 2:3:4. How much does B get?",
    options: ["₹120", "₹180", "₹240", "₹320"],
    correctAnswer: "₹240",
    explanation: "Total parts = 2+3+4 = 9. B’s share = (3/9) × 720 = ₹240."
  },
  {
    question: "If a:b = 5:8 and b:c = 4:7, what is a:c?",
    options: ["20:56", "5:14", "10:21", "20:35"],
    correctAnswer: "5:14",
    explanation: "Multiply a:b (5:8) by 4 and b:c (4:7) by 8 to make b common: (20:32) and (32:56). Thus, a:c = 20:56 → 5:14."
  },
  {
    question: "The ratio of boys to girls in a school is 3:4. If there are 360 boys, how many girls are there?",
    options: ["320", "420", "480", "560"],
    correctAnswer: "480",
    explanation: "Let boys = 3x and girls = 4x. Given 3x = 360 → x = 120. So, girls = 4 × 120 = 480."
  },
  {
    question: "Two numbers are in the ratio 5:9. If the sum of their squares is 1060, what are the numbers?",
    options: ["5, 9", "10, 18", "15, 27", "20, 36"],
    correctAnswer: "10, 18",
    explanation: "Let the numbers be 5x and 9x. Given (5x)² + (9x)² = 1060 → 25x² + 81x² = 1060 → 106x² = 1060 → x² = 10 → x = √10."
  },
  {
    question: "If the price of a commodity increases by 25%, by what percent should consumption be reduced so that the total expense remains the same?",
    options: ["20%", "25%", "30%", "35%"],
    correctAnswer: "20%",
    explanation: "Required reduction = (Increase / (100 + Increase)) × 100 = (25/125) × 100 = 20%."
  },
  {
    question: "The income of A and B is in the ratio 3:4. If A’s income is increased by 25% and B’s by 20%, what will be the new ratio?",
    options: ["15:24", "5:6", "9:10", "18:25"],
    correctAnswer: "15:24",
    explanation: "A's new income = 3x × 1.25 = 3.75x, B's new income = 4x × 1.2 = 4.8x → Ratio = 15:24."
  },
  {
    question: "If a:b = 3:4 and b:c = 2:5, what is a:b:c?",
    options: ["3:4:5", "6:8:10", "6:8:20", "3:8:10"],
    correctAnswer: "6:8:20",
    explanation: "Multiply a:b (3:4) by 2 and b:c (2:5) by 4 to make b common: (6:8) and (8:20). Thus, a:b:c = 6:8:20."
  },
  {
    question: "A’s salary is 20% more than B’s. By what percent is B’s salary less than A’s?",
    options: ["16.67%", "20%", "25%", "30%"],
    correctAnswer: "16.67%",
    explanation: "Required percentage = (Difference / A's salary) × 100 = (20/120) × 100 = 16.67%."
  },
  {
    question: "In a class, the number of boys and girls are in the ratio 3:2. If the total number of students is 100, how many are boys?",
    options: ["30", "40", "50", "60"],
    correctAnswer: "60",
    explanation: "Total parts = 3+2 = 5. Boys = (3/5) × 100 = 60."
  },
  {
    question: "A mixture contains milk and water in the ratio 5:3. If 16 liters of water is added, the ratio becomes 5:4. What was the initial quantity of milk?",
    options: ["40 liters", "50 liters", "60 liters", "70 liters"],
    correctAnswer: "40 liters",
    explanation: "Let milk = 5x, water = 3x. After adding 16L, new ratio = 5:(3x+16). Solving, x = 8, so milk = 5 × 8 = 40L."
  },
  {
    question: "The ratio of the number of apples to oranges in a basket is 7:9. If there are 126 apples, how many oranges are there?",
    options: ["144", "162", "180", "198"],
    correctAnswer: "162",
    explanation: "Let apples = 7x and oranges = 9x. Given 7x = 126 → x = 18. So, oranges = 9 × 18 = 162."
  },
  {
    question: "A train covers 360 km in 4 hours. Another train covers 450 km in 5 hours. What is the ratio of their speeds?",
    options: ["4:5", "5:6", "6:5", "8:9"],
    correctAnswer: "6:5",
    explanation: "Speed of first train = 360/4 = 90 km/hr. Speed of second train = 450/5 = 90 km/hr. Ratio = 90:75 = 6:5."
  },
  {
    question: "The sum of two numbers is 98, and their ratio is 5:9. What is the smaller number?",
    options: ["30", "35", "40", "45"],
    correctAnswer: "35",
    explanation: "Let numbers be 5x and 9x. Given 5x + 9x = 98 → 14x = 98 → x = 7. Smaller number = 5 × 7 = 35."
  },
  {
    question: "If A:B = 3:4 and B:C = 7:9, what is A:B:C?",
    options: ["21:28:36", "3:7:9", "9:12:16", "12:15:20"],
    correctAnswer: "21:28:36",
    explanation: "Multiply A:B (3:4) by 7 and B:C (7:9) by 4 to make B common: (21:28) and (28:36). Thus, A:B:C = 21:28:36."
  }
];

export default ratiopropotionquestions;