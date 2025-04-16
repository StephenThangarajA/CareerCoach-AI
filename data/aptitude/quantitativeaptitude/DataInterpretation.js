const dataInterpretationQuestions = [
    {
        question: "If the total population of a city is 1,20,000 and 60% are males, how many females are there?",
        options: ["48,000", "50,000", "52,000", "54,000"],
        correctAnswer: "48,000",
        explanation: "Females = 40% of 1,20,000 = (40/100) × 1,20,000 = 48,000."
    },
    {
        question: "A company's revenue increased from ₹5,00,000 to ₹6,50,000 in a year. What is the percentage increase?",
        options: ["25%", "30%", "35%", "40%"],
        correctAnswer: "30%",
        explanation: "Increase = 6,50,000 - 5,00,000 = 1,50,000. Percentage increase = (1,50,000/5,00,000) × 100 = 30%."
    },
    {
        question: "A store sold 1200 items in January and 1500 in February. What is the percentage increase?",
        options: ["20%", "25%", "30%", "35%"],
        correctAnswer: "25%",
        explanation: "Increase = 1500 - 1200 = 300. Percentage increase = (300/1200) × 100 = 25%."
    },
    {
        question: "In a school, 40% of students play football, 35% play cricket, and the rest play basketball. If there are 800 students, how many play basketball?",
        options: ["200", "250", "300", "350"],
        correctAnswer: "200",
        explanation: "Basketball players = 100% - (40% + 35%) = 25% of 800 = 200."
    },
    {
        question: "A company’s expenditure is ₹80,000 and revenue is ₹1,20,000. What is the profit percentage?",
        options: ["40%", "50%", "60%", "70%"],
        correctAnswer: "50%",
        explanation: "Profit = 1,20,000 - 80,000 = 40,000. Profit % = (40,000/80,000) × 100 = 50%."
    },
    {
        question: "A survey shows that 65% of people prefer tea, 25% prefer coffee, and the rest prefer juice. If 2000 people were surveyed, how many prefer juice?",
        options: ["200", "300", "400", "500"],
        correctAnswer: "200",
        explanation: "Juice = 100% - (65% + 25%) = 10% of 2000 = 200."
    },
    {
        question: "A train covers 450 km in 6 hours. What is the average speed?",
        options: ["60 km/h", "65 km/h", "70 km/h", "75 km/h"],
        correctAnswer: "75 km/h",
        explanation: "Average speed = Distance/Time = 450/6 = 75 km/h."
    },
    {
        question: "A company’s production in four quarters is 500, 600, 700, and 800 units. What is the average production per quarter?",
        options: ["600", "650", "700", "750"],
        correctAnswer: "650",
        explanation: "Average = (500+600+700+800)/4 = 650."
    },
    {
        question: "In a class of 50 students, 30% failed. How many students passed?",
        options: ["30", "32", "34", "35"],
        correctAnswer: "35",
        explanation: "Passed students = 100% - 30% = 70% of 50 = 35."
    },
    {
        question: "A mobile company sold 8000 units in January and 9600 in February. What is the percentage increase?",
        options: ["15%", "18%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "Increase = 9600 - 8000 = 1600. Percentage increase = (1600/8000) × 100 = 20%."
    },
    {
        question: "A pie chart shows 40% of people prefer watching movies, 35% prefer reading, and the rest prefer sports. What percentage prefers sports?",
        options: ["20%", "25%", "30%", "35%"],
        correctAnswer: "25%",
        explanation: "Sports preference = 100% - (40% + 35%) = 25%."
    },
    {
        question: "A shopkeeper marks up prices by 25% and gives a 10% discount. What is the net percentage gain?",
        options: ["10%", "12.5%", "15%", "20%"],
        correctAnswer: "12.5%",
        explanation: "Net gain = (Markup % - Discount % - (Markup × Discount)/100) = (25 - 10 - (25 × 10)/100) = 12.5%."
    },
    {
        question: "A student scored 75 marks out of 100 in Mathematics and 80 out of 120 in Science. What is the overall percentage?",
        options: ["70%", "72%", "75%", "78%"],
        correctAnswer: "72%",
        explanation: "Total marks = 100 + 120 = 220, Total obtained = 75 + 80 = 155, Percentage = (155/220) × 100 = 72%."
    },
    {
        question: "The production of a factory increased from 4000 to 5000 units in a month. What is the percentage increase?",
        options: ["20%", "22%", "25%", "28%"],
        correctAnswer: "25%",
        explanation: "Increase = 5000 - 4000 = 1000, Percentage increase = (1000/4000) × 100 = 25%."
    },
    {
        question: "A factory produces 1200 units daily. How many units are produced in a leap year?",
        options: ["432000", "438000", "440000", "446000"],
        correctAnswer: "439200",
        explanation: "Total units = 1200 × 366 = 439200."
    },
    {
        question: "A bus covers 900 km in 15 hours. What is the average speed?",
        options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
        correctAnswer: "60 km/h",
        explanation: "Speed = Distance/Time = 900/15 = 60 km/h."
    },
    {
        question: "A car's petrol consumption is 12 km per liter. How many liters are needed to cover 720 km?",
        options: ["50", "55", "60", "65"],
        correctAnswer: "60",
        explanation: "Petrol needed = 720/12 = 60 liters."
    },
    {
        question: "A bakery sells 500 cakes daily. How many cakes are sold in a non-leap year?",
        options: ["1,75,000", "1,77,500", "1,80,000", "1,82,500"],
        correctAnswer: "1,82,500",
        explanation: "Total cakes = 500 × 365 = 1,82,500."
    },
    {
        question: "The price of a laptop was ₹50,000 but increased by 12%. What is the new price?",
        options: ["₹54,000", "₹55,000", "₹56,000", "₹58,000"],
        correctAnswer: "₹56,000",
        explanation: "Increase = 12% of 50,000 = 6,000, New price = 50,000 + 6,000 = 56,000."
    },
    {
        question: "A company’s revenue grew from ₹10,00,000 to ₹12,50,000 in a year. What is the percentage growth?",
        options: ["20%", "22%", "25%", "30%"],
        correctAnswer: "25%",
        explanation: "Increase = 12,50,000 - 10,00,000 = 2,50,000, Percentage increase = (2,50,000/10,00,000) × 100 = 25%."
    }
];

export default dataInterpretationQuestions;