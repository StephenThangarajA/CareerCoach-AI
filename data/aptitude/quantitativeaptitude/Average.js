const averagequestions = [
    {
        question: "The average of five numbers is 60. If one number is excluded, the average becomes 50. What is the excluded number?",
        options: ["80", "90", "100", "110"],
        correctAnswer: "100",
        explanation: "Total sum of five numbers = 60 × 5 = 300. Total sum after removing one number = 50 × 4 = 200. Excluded number = 300 - 200 = 100."
    },
    {
        question: "The average age of 30 students in a class is 15 years. When the teacher's age is included, the average increases by 1 year. What is the teacher's age?",
        options: ["41", "45", "46", "50"],
        correctAnswer: "46",
        explanation: "Total age of students = 30 × 15 = 450. New total = 31 × 16 = 496. Teacher's age = 496 - 450 = 46."
    },
    {
        question: "The average of three numbers is 40. If two numbers are 35 and 45, what is the third number?",
        options: ["30", "35", "40", "50"],
        correctAnswer: "40",
        explanation: "Sum of three numbers = 40 × 3 = 120. Third number = 120 - (35 + 45) = 40."
    },
    {
        question: "The average weight of 8 people increases by 2 kg when a new person joins them. If the initial average was 65 kg, what is the weight of the new person?",
        options: ["78 kg", "81 kg", "79 kg", "82 kg"],
        correctAnswer: "81 kg",
        explanation: "New total weight = (65 × 8) + x = 67 × 9. Solving for x, we get 81 kg."
    },
    {
        question: "The average of 7 consecutive odd numbers is 63. What is the largest number?",
        options: ["71", "73", "75", "77"],
        correctAnswer: "75",
        explanation: "The middle number is the average (63). Largest number = 63 + 6 = 75."
    },
    {
        question: "The average of first 10 natural numbers is:",
        options: ["5", "5.5", "6", "6.5"],
        correctAnswer: "5.5",
        explanation: "Sum of first 10 natural numbers = (10 × 11) / 2 = 55. Average = 55 / 10 = 5.5."
    },
    {
        question: "The average temperature of Monday, Tuesday, and Wednesday is 30°C. The average temperature of Tuesday, Wednesday, and Thursday is 32°C. If Monday's temperature is 28°C, what is Thursday's temperature?",
        options: ["30°C", "32°C", "34°C", "36°C"],
        correctAnswer: "36°C",
        explanation: "M + T + W = 90, T + W + Th = 96. Subtracting gives Th - M = 6, so Th = 28 + 6 = 36°C."
    },
    {
        question: "The average score of 20 students in a test is 75. The highest score is 98, and the lowest score is 50. What is the average score of the remaining 18 students?",
        options: ["74.5", "75", "76", "77"],
        correctAnswer: "76",
        explanation: "Total score = 75 × 20 = 1500. Removing highest and lowest scores: (1500 - 98 - 50) / 18 = 76."
    },
    {
        question: "The average of five consecutive even numbers is 38. What is the smallest number?",
        options: ["34", "36", "38", "40"],
        correctAnswer: "34",
        explanation: "Middle number = 38. Smallest = 38 - 4 = 34."
    },
    {
        question: "The average height of 12 boys in a class is 150 cm. If one boy leaves and the average reduces to 148 cm, what was the height of the boy who left?",
        options: ["170 cm", "172 cm", "174 cm", "176 cm"],
        correctAnswer: "174 cm",
        explanation: "Total height = 150 × 12 = 1800. New total = 148 × 11 = 1628. Height of the boy who left = 1800 - 1628 = 174 cm."
    },
    {
        question: "The average of a batsman in 20 matches is 35. How many runs should he score in the next match to increase the average to 37?",
        options: ["77", "79", "81", "83"],
        correctAnswer: "81",
        explanation: "Total runs = 35 × 20 = 700. New total = 37 × 21 = 777. Required runs = 777 - 700 = 81."
    },
    {
        question: "A cricketer has a batting average of 54 in 50 innings. If his highest score is removed, his average drops to 52. What is his highest score?",
        options: ["140", "150", "160", "170"],
        correctAnswer: "160",
        explanation: "Total runs = 54 × 50 = 2700. New total = 52 × 49 = 2548. Highest score = 2700 - 2548 = 160."
    },
    {
        question: "The average salary of 15 employees in a company is $5000. If the salary of the manager is included, the average increases to $5200. What is the manager’s salary?",
        options: ["$5600", "$6000", "$6500", "$7000"],
        correctAnswer: "$8000",
        explanation: "Total salary of 15 employees = 15 × 5000 = 75000. New total = 16 × 5200 = 83200. Manager’s salary = 83200 - 75000 = 8000."
    },
    {
        question: "The average of six numbers is 42. If one number is removed, the average of the remaining five becomes 40. What is the removed number?",
        options: ["48", "50", "52", "54"],
        correctAnswer: "52",
        explanation: "Total of 6 numbers = 6 × 42 = 252. Total after removal = 5 × 40 = 200. Removed number = 252 - 200 = 52."
    },
    {
        question: "The average age of a family of 5 members is 25 years. If a baby is born, what will be the new average age after 5 years?",
        options: ["25", "26", "27", "28"],
        correctAnswer: "25",
        explanation: "Total age of 5 members = 125. After 5 years, total age = 150 + 5 (baby) = 155. New average = 155 / 6 = 25."
    },
    {
        question: "A class has 40 students with an average age of 16. A 20-year-old student joins. What is the new average?",
        options: ["16", "16.1", "16.2", "16.5"],
        correctAnswer: "16.1",
        explanation: "Total age = 40 × 16 = 640. New total = 640 + 20 = 660. New average = 660 / 41 ≈ 16.1."
    },
    {
        question: "A batsman scores 100 runs, increasing his average from 30 to 32. How many innings had he played before this match?",
        options: ["45", "50", "55", "60"],
        correctAnswer: "50",
        explanation: "Let previous innings be x. (30x + 100) / (x+1) = 32. Solving gives x = 50."
    },
    {
        question: "The average of 20 numbers is 45. If the average of the first 10 numbers is 40 and the average of the last 10 numbers is 50, what is the 10th number?",
        options: ["42", "45", "48", "50"],
        correctAnswer: "45",
        explanation: "Total sum = 900. First 10 numbers = 400. Last 10 numbers = 500. 10th number = 900 - (400+500) = 45."
    },
    {
        question: "The average marks of 10 students in a mathematics test is 72. If the highest and lowest scores of 95 and 40 are removed, what is the new average?",
        options: ["70", "71", "72", "73"],
        correctAnswer: "71",
        explanation: "Total marks = 10 × 72 = 720. After removing 95 and 40, new total = 720 - 95 - 40 = 585. New average = 585 / 8 = 71."
    },
    {
        question: "A car travels 120 km at a speed of 40 km/h and another 180 km at a speed of 60 km/h. What is the average speed for the entire journey?",
        options: ["48 km/h", "50 km/h", "52 km/h", "54 km/h"],
        correctAnswer: "50 km/h",
        explanation: "Total time = (120/40) + (180/60) = 3 + 3 = 6 hours. Total distance = 120 + 180 = 300 km. Average speed = 300 / 6 = 50 km/h."
    }    
];

export default averagequestions;