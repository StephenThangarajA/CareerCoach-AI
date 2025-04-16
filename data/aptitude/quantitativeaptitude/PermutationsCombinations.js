const permutationCombinationQuestions = [
    {
        question: "In how many ways can the letters of the word 'APPLE' be arranged?",
        options: ["60", "120", "240", "360"],
        correctAnswer: "60",
        explanation: "Total letters = 5, where 'P' repeats twice. Formula = 5! / 2! = 120 / 2 = 60."
    },
    {
        question: "How many ways can 3 books be arranged on a shelf from a collection of 6 books?",
        options: ["60", "120", "240", "720"],
        correctAnswer: "120",
        explanation: "Arrangement order matters, so use permutations: P(6,3) = 6! / (6-3)! = (6×5×4) = 120."
    },
    {
        question: "A committee of 4 people is to be formed from a group of 10. How many ways can this be done?",
        options: ["120", "210", "252", "300"],
        correctAnswer: "210",
        explanation: "Since order doesn’t matter, use combinations: C(10,4) = 10! / (4!(10-4)!) = 210."
    },
    {
        question: "In how many ways can the letters of 'MISSISSIPPI' be arranged?",
        options: ["34,650", "36,650", "37,650", "40,000"],
        correctAnswer: "34,650",
        explanation: "Total letters = 11, with M=1, I=4, S=4, P=2. Formula: 11! / (1!4!4!2!) = 34,650."
    },
    {
        question: "In how many ways can a president, vice president, and secretary be chosen from 10 people?",
        options: ["120", "210", "720", "1000"],
        correctAnswer: "720",
        explanation: "Order matters, so use permutations: P(10,3) = 10! / 7! = 10 × 9 × 8 = 720."
    },
    {
        question: "How many 3-digit numbers can be formed using digits 1,2,3,4,5 without repetition?",
        options: ["30", "60", "120", "150"],
        correctAnswer: "60",
        explanation: "First digit: 5 choices, second: 4 choices, third: 3 choices. 5 × 4 × 3 = 60."
    },
    {
        question: "How many different ways can 5 people sit in a row?",
        options: ["24", "60", "120", "240"],
        correctAnswer: "120",
        explanation: "Since all 5 must be arranged, use permutations: 5! = 5 × 4 × 3 × 2 × 1 = 120."
    },
    {
        question: "How many ways can a team of 3 students be selected from a class of 8?",
        options: ["28", "56", "72", "80"],
        correctAnswer: "56",
        explanation: "Order doesn’t matter, so use combinations: C(8,3) = 8! / (3!(8-3)!) = 56."
    },
    {
        question: "A password consists of 4 letters chosen from A, B, C, D, E, F. If repetition is allowed, how many passwords are possible?",
        options: ["120", "360", "1296", "1290"],
        correctAnswer: "1296",
        explanation: "Each letter has 6 choices, and repetition is allowed: 6^4 = 1296."
    },
    {
        question: "A person has 8 shirts and 4 trousers. In how many ways can he dress up?",
        options: ["16", "24", "32", "40"],
        correctAnswer: "32",
        explanation: "Each shirt can be paired with any trouser: 8 × 4 = 32."
    },
    {
        question: "How many different 4-letter words can be formed from 'COMPUTER' without repetition?",
        options: ["840", "1680", "2520", "5040"],
        correctAnswer: "1680",
        explanation: "8P4 = 8! / (8-4)! = 8×7×6×5 = 1680."
    },
    {
        question: "How many ways can you select 3 flowers from 5 different types?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "10",
        explanation: "Order doesn’t matter, so use combinations: C(5,3) = 5! / (3!(5-3)!) = 10."
    },
    {
        question: "In how many ways can a group of 4 students be chosen from 10 for a project?",
        options: ["120", "210", "252", "300"],
        correctAnswer: "210",
        explanation: "Since order doesn’t matter, use combinations: C(10,4) = 210."
    },
    {
        question: "How many ways can a student select 2 subjects from 5 optional courses?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "10",
        explanation: "Order doesn’t matter, so use combinations: C(5,2) = 5! / (2!(5-2)!) = 10."
    },
    {
        question: "A team of 6 players is to be selected from 10 boys and 5 girls. How many ways can this be done if at least 2 girls are included?",
        options: ["750", "1050", "1200", "1500"],
        correctAnswer: "1050",
        explanation: "Use combination cases: C(5,2) × C(10,4) + C(5,3) × C(10,3) + C(5,4) × C(10,2) = 1050."
    },
    {
        question: "In how many ways can a 5-digit number be formed using 1,2,3,4,5,6,7 without repetition?",
        options: ["2520", "3024", "3600", "5040"],
        correctAnswer: "2520",
        explanation: "7P5 = 7! / (7-5)! = 7×6×5×4×3 = 2520."
    },
    {
        question: "A school has 5 teachers and 8 students. How many ways can a committee of 2 teachers and 3 students be formed?",
        options: ["112", "160", "200", "240"],
        correctAnswer: "160",
        explanation: "Use combinations: C(5,2) × C(8,3) = 10 × 56 = 160."
    },
    {
        question: "A box contains 10 white and 8 black balls. How many ways can 4 balls be selected if at least one is black?",
        options: ["820", "960", "1120", "1260"],
        correctAnswer: "1120",
        explanation: "Total C(18,4) = 3060, only white C(10,4) = 210. So valid cases = 3060 - 210 = 1120."
    },
    {
        question: "In how many ways can 4 people be seated around a circular table?",
        options: ["6", "12", "18", "24"],
        correctAnswer: "6",
        explanation: "Circular permutation formula: (n-1)! = (4-1)! = 3! = 6."
    },
    {
        question: "How many ways can 5 different paintings be arranged on a wall?",
        options: ["60", "120", "240", "360"],
        correctAnswer: "120",
        explanation: "Since order matters, use permutations: 5! = 120."
    }
];

export default permutationCombinationQuestions;