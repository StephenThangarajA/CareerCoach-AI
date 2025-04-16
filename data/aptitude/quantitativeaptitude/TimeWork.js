const timeAndWorkQuestions = [
    {
        question: "A can complete a work in 10 days, and B can complete it in 15 days. How long will they take together?",
        options: ["5 days", "6 days", "7 days", "8 days"],
        correctAnswer: "6 days",
        explanation: "A’s 1-day work = 1/10, B’s 1-day work = 1/15. Together, (1/10 + 1/15) = 1/6. So, they complete in 6 days."
    },
    {
        question: "If 6 workers can complete a task in 10 days, how many days will 4 workers take?",
        options: ["12 days", "15 days", "18 days", "20 days"],
        correctAnswer: "15 days",
        explanation: "Work = workers × days. (6×10) = (4×x) → x = 15 days."
    },
    {
        question: "A can do a work in 8 days. B can do the same work in 16 days. How much work will both do together in 4 days?",
        options: ["Half", "One-third", "Two-thirds", "Three-fourths"],
        correctAnswer: "Three-fourths",
        explanation: "A’s 1-day work = 1/8, B’s 1-day work = 1/16. Together in 4 days: 4 × (1/8 + 1/16) = 3/4."
    },
    {
        question: "If 12 men complete a task in 30 days, how long will 18 men take?",
        options: ["10 days", "15 days", "20 days", "25 days"],
        correctAnswer: "20 days",
        explanation: "Work = Men × Days. (12×30) = (18×x) → x = 20 days."
    },
    {
        question: "A and B together can complete a work in 6 days. A alone takes 9 days. How long will B alone take?",
        options: ["12 days", "15 days", "18 days", "20 days"],
        correctAnswer: "18 days",
        explanation: "A + B = 1/6, A = 1/9. So, B = (1/6 - 1/9) = 1/18."
    },
    {
        question: "If a group of 5 workers completes a task in 40 days, how many workers are required to complete the task in 25 days?",
        options: ["6", "7", "8", "10"],
        correctAnswer: "8",
        explanation: "(5 × 40) = (x × 25), x = 8."
    },
    {
        question: "A and B can do a work in 12 days, B and C in 15 days, and C and A in 20 days. How long will all three take together?",
        options: ["8 days", "10 days", "12 days", "15 days"],
        correctAnswer: "10 days",
        explanation: "Adding (A+B), (B+C), (C+A) and dividing by 2, we get (A+B+C) = 1/10."
    },
    {
        question: "If A does half of a job in 6 days, how long will he take to complete the whole job?",
        options: ["10 days", "12 days", "14 days", "16 days"],
        correctAnswer: "12 days",
        explanation: "If half work is done in 6 days, full work will take 6 × 2 = 12 days."
    },
    {
        question: "A and B can do a work in 4 days. B alone takes 12 days. How long will A take alone?",
        options: ["4 days", "5 days", "6 days", "8 days"],
        correctAnswer: "6 days",
        explanation: "A + B = 1/4, B = 1/12. So, A = (1/4 - 1/12) = 1/6."
    },
    {
        question: "If 15 men complete a work in 30 days, how many men will complete it in 10 days?",
        options: ["30", "35", "40", "45"],
        correctAnswer: "45",
        explanation: "(15×30) = (x×10), x = 45."
    },
    {
        question: "A tank fills in 6 hours. Due to leakage, it takes 8 hours. How long will the leak take to empty the full tank?",
        options: ["12 hours", "18 hours", "24 hours", "30 hours"],
        correctAnswer: "24 hours",
        explanation: "Tank fills in 6 hours → 1/6 per hour. Effective filling rate = 1/8. Leak empties 1/6 - 1/8 = 1/24."
    },
    {
        question: "A pipe fills a tank in 4 hours, and another empties it in 6 hours. If both work together, how long will it take?",
        options: ["10 hours", "12 hours", "15 hours", "20 hours"],
        correctAnswer: "12 hours",
        explanation: "Filling rate = 1/4, Emptying rate = 1/6. Net rate = 1/4 - 1/6 = 1/12."
    },
    {
        question: "A can do a work in 5 days, B in 10 days, and C in 15 days. How long will they take together?",
        options: ["2 days", "3 days", "4 days", "5 days"],
        correctAnswer: "3 days",
        explanation: "Total work per day = (1/5 + 1/10 + 1/15) = 1/3."
    },
    {
        question: "If A is twice as efficient as B and B can do the work in 12 days, how long will A alone take?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        correctAnswer: "6 days",
        explanation: "A does twice the work of B, so A’s time = 12/2 = 6 days."
    },
    {
        question: "A contractor hires 10 men to complete a task in 15 days. How many more men should he hire to complete it in 10 days?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "5",
        explanation: "(10 × 15) = (x × 10), x = 15. So, 5 more needed."
    },
    {
        question: "A works 3 times as fast as B. Together, they finish a work in 6 days. How long will A alone take?",
        options: ["8 days", "9 days", "10 days", "12 days"],
        correctAnswer: "8 days",
        explanation: "A = 3x, B = x. (3x + x) × 6 = 1 → x = 1/24. A = 1/8."
    },
    {
        question: "A and B together can complete a job in 8 days. A alone takes 12 days. How long will B alone take?",
        options: ["16 days", "18 days", "20 days", "24 days"],
        correctAnswer: "24 days",
        explanation: "A+B = 1/8, A = 1/12. So, B = (1/8 - 1/12) = 1/24."
    },
    {
        question: "If a man can complete a work in 10 days working 8 hours per day, how many days will he take working 5 hours per day?",
        options: ["12", "14", "16", "18"],
        correctAnswer: "16",
        explanation: "Total work = 10×8 = 80 hours. New days = 80/5 = 16."
    },
    {
        question: "A can do a work in 20 days, B in 25 days. How many days will they take working alternately starting with A?",
        options: ["21 days", "22 days", "23 days", "24 days"],
        correctAnswer: "22 days",
        explanation: "Alternate work → total per 2 days = (1/20 + 1/25)."
    },
    {
        question: "A can complete a task in 15 days, while B can complete the same task in 10 days. If they work together but B leaves after 5 days, how long will A take to complete the remaining work?",
        options: ["5 days", "6 days", "7 days", "8 days"],
        correctAnswer: "5 days",
        explanation: "A’s 1-day work = 1/15, B’s 1-day work = 1/10. Work done in 5 days = 5 × (1/15 + 1/10) = 5 × (1/6) = 5/6. Remaining work = 1 - 5/6 = 1/6. A alone takes (1/6) ÷ (1/15) = 5 days."
    }
];

export default timeAndWorkQuestions;