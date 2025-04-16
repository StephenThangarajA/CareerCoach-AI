const seatingArrangementQuestions = [
    {
        question: "Six friends A, B, C, D, E, and F are sitting in a row. B is sitting to the immediate right of A, and C is sitting to the immediate left of A. Who is sitting in the middle?",
        options: ["A", "B", "C", "D"],
        correctAnswer: "A",
        explanation: "Since B is to the right and C is to the left of A, A must be in the middle."
    },
    {
        question: "Eight people are sitting in a circular arrangement. If A is sitting opposite B and C is sitting to the immediate right of A, who is sitting to the immediate left of A?",
        options: ["D", "E", "F", "G"],
        correctAnswer: "D",
        explanation: "A is sitting opposite B, so if C is to A’s right, then D is to A’s left."
    },
    {
        question: "In a linear arrangement, P is sitting third from the left, and Q is sitting second from the right. If there are six people in total, who is sitting in the middle?",
        options: ["P", "Q", "R", "S"],
        correctAnswer: "R",
        explanation: "Since there are six people, the middle positions are the third and fourth. If P is third from the left and Q is second from the right, the middle person must be R."
    },
    {
        question: "Four people are sitting in a row. If W is to the left of X and Y is to the right of X, who is sitting at the extreme right?",
        options: ["W", "X", "Y", "Z"],
        correctAnswer: "Z",
        explanation: "If W is to the left of X and Y is to the right, Z must be the last on the right."
    },
    {
        question: "Five people are sitting in a circular arrangement. If A is between B and C, and D is sitting opposite A, who is sitting to the right of D?",
        options: ["A", "B", "C", "E"],
        correctAnswer: "E",
        explanation: "If A is between B and C, and D is opposite A, the person to D’s right is E."
    },
    {
        question: "Seven people are sitting in a row. If X is sitting second from the left and Y is sitting second from the right, how many people are between X and Y?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "Since X is second from the left and Y is second from the right, there are three people between them."
    },
    {
        question: "Eight people are sitting around a circular table. If P is sitting to the left of Q and R is sitting to the right of Q, who is sitting opposite P?",
        options: ["Q", "R", "S", "T"],
        correctAnswer: "S",
        explanation: "If P is to the left of Q and R is to the right, the person directly opposite P in a circular arrangement is S."
    },
    {
        question: "Five people are sitting in a straight line. If A is sitting at one end and C is sitting in the middle, who is sitting between A and C?",
        options: ["B", "D", "E", "F"],
        correctAnswer: "B",
        explanation: "Since C is in the middle and A is at the end, the person sitting between them is B."
    },
    {
        question: "Six people are sitting in a row facing north. If P is sitting to the left of Q, and R is sitting to the right of Q, who is sitting at the extreme left?",
        options: ["P", "Q", "R", "S"],
        correctAnswer: "P",
        explanation: "If P is to the left of Q and R is to the right, P must be at the extreme left."
    },
    {
        question: "A group of five friends sits around a circular table. If A is to the immediate right of B and C is to the immediate left of A, who is sitting to the right of C?",
        options: ["A", "B", "D", "E"],
        correctAnswer: "D",
        explanation: "If A is right of B and C is left of A, then D must be sitting to the right of C."
    },
    {
        question: "In a row of ten people, P is sitting at position 4 and Q at position 7. How many people are sitting between them?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The number of people between position 4 and position 7 is 2."
    },
    {
        question: "If five people are sitting in a circle and everyone faces the center, who is to the immediate left of the person sitting opposite A?",
        options: ["B", "C", "D", "E"],
        correctAnswer: "C",
        explanation: "If A is opposite a person, the immediate left of that person in a circular arrangement is C."
    },
    {
        question: "Seven people are seated in a row facing north. Who is sitting second from the right if X is at the extreme left and Y is at the extreme right?",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C",
        explanation: "If X is at the left and Y is at the right, the second person from the right is C."
    },
    {
        question: "If eight people are sitting in a circular arrangement and facing inward, who sits opposite the person at position 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "6",
        explanation: "In an 8-person circular arrangement, the person opposite position 2 is position 6."
    },
    {
        question: "In a group of six friends sitting in a straight line, A is at one end and B is third from the left. Who is sitting at the extreme right?",
        options: ["C", "D", "E", "F"],
        correctAnswer: "F",
        explanation: "Since A is at the leftmost position, the extreme rightmost position is occupied by F."
    },
    {
        question: "If five people are seated in a row and P is between Q and R, who is sitting at the extreme left?",
        options: ["P", "Q", "R", "S"],
        correctAnswer: "Q",
        explanation: "If P is between Q and R, then Q is at the extreme left."
    },
    {
        question: "In a circular seating arrangement of seven people, who is sitting to the immediate right of the person sitting opposite A?",
        options: ["B", "C", "D", "E"],
        correctAnswer: "C",
        explanation: "If A is opposite someone, the person to their right is C."
    },
    {
        question: "If nine people are seated in a row, and P is third from the left while Q is second from the right, how many people are sitting between them?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "In a 9-person row, with P at position 3 and Q at position 8, four people are between them."
    },
    {
        question: "Six people are seated in a row facing south. If A is sitting to the right of B, who is sitting at the extreme left?",
        options: ["A", "B", "C", "D"],
        correctAnswer: "B",
        explanation: "Since A is to the right of B, B must be at the extreme left."
    },
    {
        question: "Eight people—A, B, C, D, E, F, G, and H—are sitting around a circular table facing the center. If A is sitting to the immediate left of B and D is sitting opposite A, who is sitting to the immediate right of D?",
        options: ["E", "F", "G", "H"],
        correctAnswer: "F",
        explanation: "If A is to the left of B and D is opposite A, then the person sitting to the right of D is F."
    }
];

export default seatingArrangementQuestions;