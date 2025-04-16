const percentageQuestions = [
    {
      question: "What is 25% of 200?",
      options: ["25", "50", "75", "100"],
      correctAnswer: "50",
      explanation: "25% of 200 = (25/100) × 200 = 50."
    },
    {
      question: "If a number is increased by 20%, then decreased by 20%, what is the net change?",
      options: ["Increase by 4%", "Decrease by 4%", "No change", "Decrease by 8%"],
      correctAnswer: "Decrease by 4%",
      explanation: "Let the number be 100. After a 20% increase: 100 × 1.2 = 120. After a 20% decrease: 120 × 0.8 = 96. Net decrease = 100 - 96 = 4%."
    },
    {
      question: "A student's score increased from 60 to 75. What is the percentage increase?",
      options: ["20%", "25%", "30%", "40%"],
      correctAnswer: "25%",
      explanation: "Increase = 75 - 60 = 15. Percentage increase = (15/60) × 100 = 25%."
    },
    {
      question: "A shopkeeper offers a 10% discount on an item priced at ₹500. What is the final price?",
      options: ["₹400", "₹450", "₹475", "₹480"],
      correctAnswer: "₹450",
      explanation: "Discount = 10% of 500 = ₹50. Final price = 500 - 50 = ₹450."
    },
    {
      question: "A salary increased from ₹5000 to ₹6000. What is the percentage increase?",
      options: ["15%", "18%", "20%", "25%"],
      correctAnswer: "20%",
      explanation: "Increase = 6000 - 5000 = 1000. Percentage increase = (1000/5000) × 100 = 20%."
    },
    {
      question: "A person spends 70% of his income and saves ₹600. What is his income?",
      options: ["₹1800", "₹2000", "₹2200", "₹2400"],
      correctAnswer: "₹2000",
      explanation: "Let income be x. 30% of x = 600 → (30/100) × x = 600 → x = ₹2000."
    },
    {
      question: "If a man spends 40% of his income and saves ₹600, what is his total income?",
      options: ["₹800", "₹900", "₹1000", "₹1200"],
      correctAnswer: "₹1000",
      explanation: "Let income be x. 60% of x = 600 → (60/100) × x = 600 → x = ₹1000."
    },
    {
      question: "A number is increased by 10% and then decreased by 10%. What is the final percentage change?",
      options: ["1% decrease", "1% increase", "2% decrease", "No change"],
      correctAnswer: "1% decrease",
      explanation: "Let the number be 100. After a 10% increase: 100 × 1.1 = 110. After a 10% decrease: 110 × 0.9 = 99. Net decrease = 1%."
    },
    {
      question: "A person gets a 5% salary hike. If the previous salary was ₹20,000, what is the new salary?",
      options: ["₹20,500", "₹21,000", "₹21,500", "₹22,000"],
      correctAnswer: "₹21,000",
      explanation: "5% of ₹20,000 = (5/100) × 20,000 = ₹1,000. New salary = ₹20,000 + ₹1,000 = ₹21,000."
    },
    {
      question: "A price is reduced by 20%. If the new price is ₹400, what was the original price?",
      options: ["₹450", "₹475", "₹500", "₹520"],
      correctAnswer: "₹500",
      explanation: "Let original price be x. After 20% reduction: 80% of x = 400 → (80/100) × x = 400 → x = ₹500."
    },
    {
      question: "A man saves 30% of his income. If his savings are ₹600, what is his total income?",
      options: ["₹1500", "₹2000", "₹1800", "₹2200"],
      correctAnswer: "₹2000",
      explanation: "Let income be x. 30% of x = 600 → (30/100) × x = 600 → x = ₹2000."
    },
    {
      question: "A fruit seller increases the price of apples by 15%. If the original price was ₹80 per kg, what is the new price?",
      options: ["₹85", "₹90", "₹92", "₹95"],
      correctAnswer: "₹92",
      explanation: "New price = 80 + (15/100) × 80 = ₹92."
    },
    {
      question: "If 75% of a number is 90, what is the number?",
      options: ["100", "110", "120", "130"],
      correctAnswer: "120",
      explanation: "Let the number be x. (75/100) × x = 90 → x = 120."
    },
    {
      question: "A price is increased by 40% and then decreased by 20%. What is the final percentage change?",
      options: ["Increase by 10%", "Increase by 12%", "Increase by 15%", "Increase by 16%"],
      correctAnswer: "Increase by 12%",
      explanation: "Let initial price be 100. After 40% increase: 100 × 1.4 = 140. After 20% decrease: 140 × 0.8 = 112. Net increase = 12%."
    },
    {
      question: "The price of sugar is increased by 25%. How much sugar can be bought for ₹200 instead of ₹250?",
      options: ["3 kg", "4 kg", "5 kg", "6 kg"],
      correctAnswer: "4 kg",
      explanation: "Let original price be ₹x per kg. After 25% increase, new price = 1.25x. Old quantity = ₹250/x. New quantity = ₹200/1.25x = 4 kg."
    },
    {
      question: "A product is sold for ₹600 after a 20% discount. What was the original price?",
      options: ["₹700", "₹750", "₹800", "₹850"],
      correctAnswer: "₹750",
      explanation: "Let original price be x. After 20% discount: 80% of x = 600 → (80/100) × x = 600 → x = ₹750."
    },
    {
      question: "A book is sold for ₹360 after a 10% discount. What was the original price?",
      options: ["₹380", "₹400", "₹420", "₹450"],
      correctAnswer: "₹400",
      explanation: "Let original price be x. After 10% discount: 90% of x = 360 → (90/100) × x = 360 → x = ₹400."
    },
    {
      question: "If a number is increased by 25% and then by 20%, what is the overall percentage increase?",
      options: ["40%", "45%", "50%", "55%"],
      correctAnswer: "50%",
      explanation: "Overall increase = 25% + 20% + (25% × 20%) / 100 = 50%."
    },
    {
      question: "If 80% of a number is 64, what is the number?",
      options: ["75", "78", "80", "82"],
      correctAnswer: "80",
      explanation: "Let the number be x. 80% of x = 64 → (80/100) × x = 64 → x = 80."
    },
    {
      question: "A person's salary is first increased by 10% and then decreased by 5%. What is the overall percentage change?",
      options: ["4.5% increase", "4.5% decrease", "5% increase", "5% decrease"],
      correctAnswer: "4.5% increase",
      explanation: "Overall change = (10 - 5 - (10 × 5) / 100) = 4.5% increase."
    }
  ];
  
export default percentageQuestions;   