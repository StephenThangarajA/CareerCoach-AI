const puzzleQuestions = [
    {
        question: "A farmer has 17 sheep, and all but 9 run away. How many sheep does he have left?",
        options: ["8", "9", "17", "0"],
        correctAnswer: "9",
        explanation: "All but 9 ran away, meaning 9 sheep are still there."
    },
    {
        question: "A clock shows 3:15. What is the angle between the hour and the minute hand?",
        options: ["0°", "7.5°", "15°", "30°"],
        correctAnswer: "7.5°",
        explanation: "Each hour represents 30°. At 3:15, the hour hand moves 7.5° (15 min = 1/4 of 30°)."
    },
    {
        question: "John's mother has three children. The first child is April, the second is May. What is the name of the third child?",
        options: ["June", "July", "John", "August"],
        correctAnswer: "John",
        explanation: "The question states 'John’s mother'—so the third child's name is John."
    },
    {
        question: "A rooster lays an egg on top of a roof. Which side does it roll down?",
        options: ["Left", "Right", "Both sides", "None"],
        correctAnswer: "None",
        explanation: "Roosters don’t lay eggs!"
    },
    {
        question: "How many times can you subtract 5 from 25?",
        options: ["5 times", "Once", "Unlimited times", "None"],
        correctAnswer: "Once",
        explanation: "After subtracting once, 25 becomes 20, so it's no longer 25."
    },
    {
        question: "If you rearrange the letters of ‘CIFAIPC’, you get the name of a:",
        options: ["City", "Ocean", "Country", "Animal"],
        correctAnswer: "Ocean",
        explanation: "Rearranging ‘CIFAIPC’ forms ‘PACIFIC’—the Pacific Ocean."
    },
    {
        question: "Two mothers and two daughters go to a shop. They buy three apples, yet each person gets one apple. How is this possible?",
        options: ["They got extra apples", "One was lost", "There are only three people", "They shared the apples"],
        correctAnswer: "There are only three people",
        explanation: "They are a grandmother, a mother, and a daughter."
    },
    {
        question: "Which number comes next? 2, 6, 12, 20, 30, __?",
        options: ["38", "40", "42", "44"],
        correctAnswer: "42",
        explanation: "The pattern follows (n² + n). Next is (6² + 6) = 42."
    },
    {
        question: "A bat and a ball cost $1.10 together. The bat costs $1 more than the ball. How much does the ball cost?",
        options: ["$0.05", "$0.10", "$0.15", "$0.20"],
        correctAnswer: "$0.05",
        explanation: "If the ball were $0.10, the bat would be $1.10 (wrong). So, ball = $0.05, bat = $1.05."
    },
    {
        question: "I have keys but open no locks. I have space but no room. You can enter but not leave. What am I?",
        options: ["A car", "A house", "A keyboard", "A door"],
        correctAnswer: "A keyboard",
        explanation: "A keyboard has keys, space (bar), and you can enter (Enter key)."
    },
    {
        question: "What comes next in the sequence? J, F, M, A, M, J, J, __?",
        options: ["A", "S", "O", "D"],
        correctAnswer: "A",
        explanation: "These are the first letters of months (January, February, March...). The next is August (A)."
    },
    {
        question: "I have 3 feet but cannot walk. What am I?",
        options: ["A ruler", "A table", "A stool", "A yardstick"],
        correctAnswer: "A yardstick",
        explanation: "A yardstick measures 3 feet but does not walk."
    },
    {
        question: "What is the missing number in the pattern? 1, 1, 2, 3, 5, 8, __?",
        options: ["11", "12", "13", "14"],
        correctAnswer: "13",
        explanation: "This follows the Fibonacci sequence: (5 + 8) = 13."
    },
    {
        question: "Which word is the odd one out? Apple, Banana, Carrot, Grape",
        options: ["Apple", "Banana", "Carrot", "Grape"],
        correctAnswer: "Carrot",
        explanation: "Carrot is a vegetable, the others are fruits."
    },
    {
        question: "Find the missing number: 9, 16, 25, 36, __?",
        options: ["42", "47", "49", "50"],
        correctAnswer: "49",
        explanation: "These are square numbers (3², 4², 5², ...). Next is 7² = 49."
    },
    {
        question: "What comes next? 2, 4, 8, 16, 32, __?",
        options: ["48", "50", "64", "128"],
        correctAnswer: "64",
        explanation: "Each number is doubled. Next is 32 × 2 = 64."
    },
    {
        question: "Which tank will fill first?",
        options: ["Tank A", "Tank B", "Tank C", "Depends on flow"],
        correctAnswer: "Depends on flow",
        explanation: "Without seeing pipe connections, the answer depends on flow."
    },
    {
        question: "If 3 cats catch 3 mice in 3 minutes, how long will it take 100 cats to catch 100 mice?",
        options: ["1 minute", "3 minutes", "10 minutes", "100 minutes"],
        correctAnswer: "3 minutes",
        explanation: "Each cat catches 1 mouse in 3 minutes, so 100 cats still take 3 minutes."
    },
    {
        question: "What is always in front of you but can’t be seen?",
        options: ["The past", "The future", "The present", "A shadow"],
        correctAnswer: "The future",
        explanation: "The future is always ahead, but you cannot see it."
    },
    {
        question: "A cube has 12 edges. If you cut off one corner, how many edges does it now have?",
        options: ["13", "14", "15", "18"],
        correctAnswer: "15",
        explanation: "Cutting a corner adds three new edges, making it 15."
    }
];

export default puzzleQuestions;