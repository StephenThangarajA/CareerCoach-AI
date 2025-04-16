const probabilityQuestions = [
    {
        question: "A bag contains 4 red, 5 blue, and 6 green balls. What is the probability of drawing a red ball?",
        options: ["2/5", "4/15", "1/3", "3/5"],
        correctAnswer: "4/15",
        explanation: "Total balls = 4 + 5 + 6 = 15. Probability of red = 4/15."
    },
    {
        question: "A fair die is rolled. What is the probability of getting an even number?",
        options: ["1/2", "1/3", "2/3", "1/6"],
        correctAnswer: "1/2",
        explanation: "Even numbers on a die: 2, 4, 6. Probability = 3/6 = 1/2."
    },
    {
        question: "A card is drawn from a standard deck of 52 cards. What is the probability of drawing a heart?",
        options: ["1/4", "1/13", "1/2", "1/3"],
        correctAnswer: "1/4",
        explanation: "There are 13 hearts in 52 cards. Probability = 13/52 = 1/4."
    },
    {
        question: "What is the probability of getting a sum of 7 when rolling two dice?",
        options: ["1/6", "1/8", "1/12", "1/9"],
        correctAnswer: "1/6",
        explanation: "Pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Probability = 6/36 = 1/6."
    },
    {
        question: "A coin is tossed twice. What is the probability of getting at least one heads?",
        options: ["1/2", "3/4", "1/4", "1/3"],
        correctAnswer: "3/4",
        explanation: "Total outcomes: (HH, HT, TH, TT). Only TT fails. Probability = 3/4."
    },
    {
        question: "Two cards are drawn from a deck of 52 without replacement. What is the probability that both are aces?",
        options: ["1/221", "1/13", "1/26", "1/17"],
        correctAnswer: "1/221",
        explanation: "P(first ace) = 4/52, P(second ace) = 3/51. Total = (4/52) × (3/51) = 1/221."
    },
    {
        question: "A box contains 3 red, 4 blue, and 5 yellow balls. What is the probability of drawing a blue or yellow ball?",
        options: ["1/2", "3/4", "2/3", "1/3"],
        correctAnswer: "3/4",
        explanation: "P(blue or yellow) = (4+5)/12 = 9/12 = 3/4."
    },
    {
        question: "A class has 5 boys and 7 girls. A student is randomly selected. What is the probability of selecting a boy?",
        options: ["5/12", "7/12", "1/2", "2/3"],
        correctAnswer: "5/12",
        explanation: "Total students = 5+7 = 12. Probability of a boy = 5/12."
    },
    {
        question: "Two fair dice are rolled. What is the probability of getting doubles?",
        options: ["1/6", "1/12", "1/9", "1/36"],
        correctAnswer: "1/6",
        explanation: "Doubles: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6). Probability = 6/36 = 1/6."
    },
    {
        question: "A bag contains 6 white and 4 black balls. Two balls are drawn randomly. What is the probability that both are white?",
        options: ["5/9", "1/3", "1/2", "1/6"],
        correctAnswer: "1/3",
        explanation: "P(first white) = 6/10, P(second white) = 5/9. Total = (6/10) × (5/9) = 1/3."
    },
    {
        question: "A card is drawn from a deck. What is the probability that it is a king or a queen?",
        options: ["1/13", "2/13", "1/26", "1/6"],
        correctAnswer: "2/13",
        explanation: "Kings = 4, Queens = 4. Probability = (4+4)/52 = 2/13."
    },
    {
        question: "A bag contains 5 red, 7 blue, and 8 green balls. What is the probability of NOT drawing a red ball?",
        options: ["2/3", "3/4", "1/3", "5/8"],
        correctAnswer: "3/4",
        explanation: "P(not red) = (7+8)/20 = 15/20 = 3/4."
    },
    {
        question: "What is the probability of drawing a number less than 4 from a fair six-sided die?",
        options: ["1/3", "1/2", "2/3", "5/6"],
        correctAnswer: "1/2",
        explanation: "Numbers less than 4: 1, 2, 3. Probability = 3/6 = 1/2."
    },
    {
        question: "If two fair coins are tossed, what is the probability of getting exactly one head?",
        options: ["1/2", "1/3", "1/4", "3/4"],
        correctAnswer: "1/2",
        explanation: "Possible outcomes: (HH, HT, TH, TT). Favorable: (HT, TH). Probability = 2/4 = 1/2."
    },
    {
        question: "A box has 3 defective and 7 non-defective items. If one item is chosen, what is the probability it is defective?",
        options: ["1/3", "3/10", "2/5", "7/10"],
        correctAnswer: "3/10",
        explanation: "Total items = 10. Probability of defective = 3/10."
    },
    {
        question: "A fair die is rolled twice. What is the probability that the first roll is a 4 and the second is a 5?",
        options: ["1/6", "1/36", "1/12", "1/18"],
        correctAnswer: "1/36",
        explanation: "P(4 first) = 1/6, P(5 second) = 1/6. Total = (1/6) × (1/6) = 1/36."
    },
    {
        question: "A family has two children. What is the probability that both are boys if each child has an equal chance of being a boy or a girl?",
        options: ["1/4", "1/2", "1/3", "3/4"],
        correctAnswer: "1/4",
        explanation: "Possible outcomes: (BB, BG, GB, GG). Probability of BB = 1/4."
    },
    {
        question: "A bag has 10 balls numbered 1 to 10. What is the probability of picking a multiple of 3?",
        options: ["1/2", "1/3", "1/4", "2/5"],
        correctAnswer: "2/5",
        explanation: "Multiples of 3: {3,6,9}. Probability = 3/10 = 3/10."
    },
    {
        question: "A number is randomly chosen from 1 to 20. What is the probability that it is a prime number?",
        options: ["1/2", "2/5", "3/10", "1/3"],
        correctAnswer: "2/5",
        explanation: "Prime numbers: {2,3,5,7,11,13,17,19} (8 in total). Probability = 8/20 = 2/5."
    },
    {
        question: "A jar contains 3 red, 5 blue, and 2 green marbles. If one marble is drawn at random, what is the probability that it is NOT blue?",
        options: ["1/2", "3/5", "2/5", "4/5"],
        correctAnswer: "3/5",
        explanation: "Total marbles = 3 + 5 + 2 = 10. Non-blue marbles = 3 (red) + 2 (green) = 5. Probability = 5/10 = 1/2."
    }
];

export default probabilityQuestions;