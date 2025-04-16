const profitAndLossQuestions = [
    {
        question: "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        options: ["20%", "25%", "30%", "35%"],
        correctAnswer: "30%",
        explanation: "Profit = 650 - 500 = ₹150. Profit% = (150/500) × 100 = 30%."
    },
    {
        question: "If a product is sold for ₹960 after a discount of 20%, what was its marked price?",
        options: ["₹1150", "₹1200", "₹1250", "₹1300"],
        correctAnswer: "₹1200",
        explanation: "Let the marked price be ₹x. Given, x - 20% of x = 960. Solving, x = ₹1200."
    },
    {
        question: "A person sells a chair for ₹1800 at a loss of 10%. What was the cost price?",
        options: ["₹2000", "₹1850", "₹1900", "₹1950"],
        correctAnswer: "₹2000",
        explanation: "Cost Price = Selling Price / (1 - Loss%) = 1800 / 0.9 = ₹2000."
    },
    {
        question: "A trader allows a discount of 15% and still makes a profit of 20%. If the marked price is ₹4600, what is the cost price?",
        options: ["₹3120", "₹3200", "₹3400", "₹3500"],
        correctAnswer: "₹3200",
        explanation: "Selling Price = 4600 - 15% of 4600 = 3910. Cost Price = 3910 / 1.2 = ₹3200."
    },
    {
        question: "A person sold an item at a 25% gain. Had he bought it for 10% less and sold it for ₹21 less, his gain would have been 30%. Find the cost price.",
        options: ["₹160", "₹175", "₹180", "₹200"],
        correctAnswer: "₹175",
        explanation: "Let CP = x. Selling Price (SP) = 1.25x. New CP = 0.9x, New SP = 1.3(0.9x). Given, 1.25x - 1.3(0.9x) = 21. Solving, x = ₹175."
    },
    {
        question: "A shopkeeper sells two watches for ₹990 each. He gains 10% on one and loses 10% on the other. What is his overall profit or loss?",
        options: ["1% profit", "1% loss", "No profit no loss", "2% loss"],
        correctAnswer: "1% loss",
        explanation: "For gain% = loss%, overall % loss = (common gain/loss)^2 / 100 = (10×10)/100 = 1% loss."
    },
    {
        question: "A man sold a mobile for ₹1200 at a loss of 25%. At what price should he sell to gain a 25% profit?",
        options: ["₹2000", "₹1800", "₹1600", "₹1500"],
        correctAnswer: "₹2000",
        explanation: "Cost Price = 1200 / 0.75 = 1600. Selling Price for 25% profit = 1600 × 1.25 = ₹2000."
    },
    {
        question: "If the cost price of 20 articles is equal to the selling price of 16 articles, what is the gain percentage?",
        options: ["20%", "25%", "30%", "35%"],
        correctAnswer: "25%",
        explanation: "Let CP of 1 article = ₹x. Then, SP of 1 article = (20x/16) = 1.25x. Gain% = 25%."
    },
    {
        question: "A vendor sells a toy for ₹540 at a profit of 20%. Find its cost price.",
        options: ["₹400", "₹450", "₹500", "₹520"],
        correctAnswer: "₹450",
        explanation: "Cost Price = Selling Price / (1 + Profit%) = 540 / 1.2 = ₹450."
    },
    {
        question: "A person purchases an article for ₹1200 and sells it at 25% profit. What is the selling price?",
        options: ["₹1400", "₹1450", "₹1500", "₹1550"],
        correctAnswer: "₹1500",
        explanation: "Selling Price = 1200 × 1.25 = ₹1500."
    },
    {
        question: "The cost price of a pen is ₹80. If it is sold at a loss of 12.5%, find the selling price.",
        options: ["₹70", "₹75", "₹77", "₹78"],
        correctAnswer: "₹70",
        explanation: "Selling Price = 80 × (1 - 12.5/100) = 80 × 0.875 = ₹70."
    },
    {
        question: "A man sells an article at a gain of 5%. Had he sold it for ₹40 more, he would have gained 10%. Find the cost price.",
        options: ["₹600", "₹700", "₹800", "₹900"],
        correctAnswer: "₹800",
        explanation: "Let CP = x. Given, 1.1x - 1.05x = 40. Solving, x = ₹800."
    },
    {
        question: "A trader buys an article at ₹1500 and marks it up by 40%. He allows a discount of 20%. What is his profit percentage?",
        options: ["10%", "12%", "14%", "15%"],
        correctAnswer: "12%",
        explanation: "Marked Price = 1500 × 1.4 = 2100. Selling Price = 2100 × 0.8 = ₹1680. Profit = (1680 - 1500) / 1500 × 100 = 12%."
    },
    {
        question: "A person buys 9 oranges for ₹60 and sells 5 oranges for ₹40. What is his gain percentage?",
        options: ["20%", "25%", "30%", "50%"],
        correctAnswer: "50%",
        explanation: "Cost price of 1 orange = ₹60/9 = ₹6.67. Selling price of 1 orange = ₹40/5 = ₹8. Gain% = (1.33/6.67) × 100 = 50%."
    },
    {
        question: "A product is sold at two successive discounts of 20% and 10%. Find the effective discount.",
        options: ["28%", "30%", "32%", "25%"],
        correctAnswer: "28%",
        explanation: "Effective Discount = (a + b - ab/100) = (20 + 10 - 20×10/100) = 28%."
    },
    {
        question: "A trader makes a profit of 25% on selling a shirt for ₹500. Find its cost price.",
        options: ["₹380", "₹400", "₹420", "₹450"],
        correctAnswer: "₹400",
        explanation: "Cost Price = Selling Price / (1 + Profit%) = 500 / 1.25 = ₹400."
    },
    {
        question: "If the ratio of Cost Price and Selling Price is 5:6, what is the gain percentage?",
        options: ["15%", "18%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "Gain% = (Profit / CP) × 100 = ((6-5)/5) × 100 = 20%."
    },
    {
        question: "A shopkeeper sells an article at a profit of 8%. If he had bought it for 10% less and sold it for ₹5 more, his profit would be 20%. Find the cost price.",
        options: ["₹200", "₹250", "₹300", "₹350"],
        correctAnswer: "₹250",
        explanation: "Using algebraic equations, CP = ₹250."
    },
    {
        question: "A shopkeeper sells an item at 15% profit. If the cost price was ₹800, what is the selling price?",
        options: ["₹900", "₹920", "₹940", "₹960"],
        correctAnswer: "₹920",
        explanation: "Selling Price = Cost Price × (1 + Profit%) = 800 × 1.15 = ₹920."
    },
    {
        question: "A trader marks up the price of an article by 50% and then offers a discount of 20%. What is his profit percentage?",
        options: ["20%", "25%", "30%", "35%"],
        correctAnswer: "20%",
        explanation: "Effective Selling Price = (1.5 × 0.8) = 1.2 times the Cost Price. Profit% = (1.2 - 1) × 100 = 20%."
    }
];

export default profitAndLossQuestions;