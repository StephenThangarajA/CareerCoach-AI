const simpleAndCompoundInterestQuestions = [
    {
        question: "What is the simple interest on ₹5000 at 6% per annum for 3 years?",
        options: ["₹800", "₹900", "₹1000", "₹1200"],
        correctAnswer: "₹900",
        explanation: "SI = (P × R × T) / 100 = (5000 × 6 × 3) / 100 = ₹900."
    },
    {
        question: "If the compound interest on ₹4000 for 2 years at 5% per annum is ₹410, what is the amount?",
        options: ["₹4410", "₹4210", "₹4310", "₹4400"],
        correctAnswer: "₹4410",
        explanation: "A = P(1 + R/100)^T = 4000(1.05)^2 = ₹4410."
    },
    {
        question: "A sum of ₹8000 is invested at a simple interest rate of 10% per annum for 5 years. Find the total interest earned.",
        options: ["₹3500", "₹4000", "₹4500", "₹5000"],
        correctAnswer: "₹4000",
        explanation: "SI = (8000 × 10 × 5) / 100 = ₹4000."
    },
    {
        question: "At what rate of interest per annum will ₹5000 amount to ₹6050 in 3 years at simple interest?",
        options: ["6%", "7%", "8%", "9%"],
        correctAnswer: "7%",
        explanation: "SI = ₹6050 - ₹5000 = ₹1050, R = (SI × 100) / (P × T) = (1050 × 100) / (5000 × 3) = 7%."
    },
    {
        question: "The compound interest on ₹10,000 at 12% per annum for 2 years is?",
        options: ["₹2520", "₹2650", "₹2700", "₹2720"],
        correctAnswer: "₹2520",
        explanation: "CI = P(1 + R/100)^T - P = 10000(1.12)^2 - 10000 = ₹2520."
    },
    {
        question: "A sum of ₹5000 is compounded annually at a rate of 8% for 3 years. What will be the amount?",
        options: ["₹6000", "₹6272", "₹6200", "₹6400"],
        correctAnswer: "₹6272",
        explanation: "A = P(1 + R/100)^T = 5000(1.08)^3 = ₹6272."
    },
    {
        question: "If ₹12,000 is invested at 10% p.a. simple interest for 4 years, find the total interest earned.",
        options: ["₹4800", "₹5000", "₹5200", "₹5400"],
        correctAnswer: "₹4800",
        explanation: "SI = (12000 × 10 × 4) / 100 = ₹4800."
    },
    {
        question: "A sum becomes 2.25 times itself in 2 years at compound interest. Find the rate of interest.",
        options: ["25%", "50%", "40%", "45%"],
        correctAnswer: "50%",
        explanation: "A/P = (1 + R/100)^T → 2.25 = (1 + R/100)^2 → R = 50%."
    },
    {
        question: "A sum of ₹2500 is compounded half-yearly at 8% p.a. Find the amount after 1 year.",
        options: ["₹2704", "₹2750", "₹2800", "₹2850"],
        correctAnswer: "₹2704",
        explanation: "A = P(1 + R/2/100)^(2T) = 2500(1.04)^2 = ₹2704."
    },
    {
        question: "A sum of ₹4000 at simple interest amounts to ₹4600 in 4 years. Find the rate of interest per annum.",
        options: ["3%", "4%", "5%", "6%"],
        correctAnswer: "5%",
        explanation: "SI = ₹4600 - ₹4000 = ₹600, R = (SI × 100) / (P × T) = (600 × 100) / (4000 × 4) = 5%."
    },
    {
        question: "Find the compound interest on ₹6400 for 2 years at 5% per annum.",
        options: ["₹640", "₹660", "₹656", "₹672"],
        correctAnswer: "₹656",
        explanation: "CI = P(1 + R/100)^T - P = 6400(1.05)^2 - 6400 = ₹656."
    },
    {
        question: "At what rate of compound interest will ₹5000 amount to ₹6050 in 2 years?",
        options: ["8%", "9%", "10%", "11%"],
        correctAnswer: "10%",
        explanation: "A = P(1 + R/100)^T → 6050 = 5000(1 + R/100)^2 → R = 10%."
    },
    {
        question: "A sum of ₹2000 becomes ₹2420 in 2 years at compound interest. Find the rate of interest per annum.",
        options: ["8%", "9%", "10%", "11%"],
        correctAnswer: "10%",
        explanation: "A = P(1 + R/100)^T → 2420 = 2000(1 + R/100)^2 → R = 10%."
    },
    {
        question: "The difference between simple interest and compound interest on ₹10,000 at 10% p.a. for 2 years is?",
        options: ["₹10", "₹50", "₹100", "₹200"],
        correctAnswer: "₹100",
        explanation: "Difference = CI - SI = (10000(1.1)^2 - 10000) - (10000 × 10 × 2 / 100) = ₹100."
    },
    {
        question: "If the difference between compound interest and simple interest on a sum at 10% for 2 years is ₹25, find the sum.",
        options: ["₹1000", "₹2000", "₹2500", "₹3000"],
        correctAnswer: "₹2500",
        explanation: "Difference = P(R/100)^2 = P(10/100)^2 → 25 = P(1/100) → P = ₹2500."
    },
    {
        question: "The compound interest on ₹5000 for 3 years at 5% per annum is?",
        options: ["₹776", "₹789", "₹800", "₹820"],
        correctAnswer: "₹789",
        explanation: "A = 5000(1.05)^3, CI = A - P = ₹789."
    },
    {
        question: "A sum becomes ₹2025 in 2 years at 5% p.a. compound interest. Find the principal amount.",
        options: ["₹1800", "₹1850", "₹1900", "₹1950"],
        correctAnswer: "₹1900",
        explanation: "P = A / (1 + R/100)^T = 2025 / (1.05)^2 = ₹1900."
    },
    {
        question: "A sum of ₹6000 amounts to ₹6720 in 2 years at compound interest. Find the rate of interest per annum.",
        options: ["8%", "9%", "10%", "11%"],
        correctAnswer: "10%",
        explanation: "A = P(1 + R/100)^T → 6720 = 6000(1 + R/100)^2 → R = 10%."
    },
    {
        question: "At what rate of interest per annum will ₹4000 amount to ₹4840 in 2 years at compound interest?",
        options: ["8%", "9%", "10%", "11%"],
        correctAnswer: "10%",
        explanation: "A = P(1 + R/100)^T → 4840 = 4000(1 + R/100)^2 → R = 10%."
    },
    {
        question: "A sum of ₹5000 is invested at 12% per annum compound interest, compounded annually. What will be the amount after 3 years?",
        options: ["₹6820", "₹7024", "₹7500", "₹7800"],
        correctAnswer: "₹7024",
        explanation: "A = P(1 + R/100)^T = 5000(1.12)^3 = ₹7024."
    }
];

export default simpleAndCompoundInterestQuestions;