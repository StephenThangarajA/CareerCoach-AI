const geometryMensurationQuestions = [
    {
        question: "What is the sum of the interior angles of a triangle?",
        options: ["90°", "120°", "180°", "360°"],
        correctAnswer: "180°",
        explanation: "The sum of the interior angles of any triangle is always 180°."
    },
    {
        question: "A square has a side length of 5 cm. What is its area?",
        options: ["10 cm²", "15 cm²", "20 cm²", "25 cm²"],
        correctAnswer: "25 cm²",
        explanation: "Area of a square = side² = 5² = 25 cm²."
    },
    {
        question: "What is the perimeter of a rectangle with length 10 cm and width 4 cm?",
        options: ["28 cm", "26 cm", "24 cm", "20 cm"],
        correctAnswer: "28 cm",
        explanation: "Perimeter of rectangle = 2(length + width) = 2(10 + 4) = 28 cm."
    },
    {
        question: "Find the area of a circle with a radius of 7 cm (π = 3.14).",
        options: ["154 cm²", "144 cm²", "164 cm²", "140 cm²"],
        correctAnswer: "154 cm²",
        explanation: "Area of a circle = πr² = 3.14 × 7² = 154 cm²."
    },
    {
        question: "The diagonals of a rhombus are 12 cm and 16 cm. What is its area?",
        options: ["96 cm²", "100 cm²", "120 cm²", "110 cm²"],
        correctAnswer: "96 cm²",
        explanation: "Area of rhombus = (1/2) × d1 × d2 = (1/2) × 12 × 16 = 96 cm²."
    },
    {
        question: "What is the sum of the exterior angles of any polygon?",
        options: ["180°", "270°", "360°", "None"],
        correctAnswer: "360°",
        explanation: "The sum of the exterior angles of any polygon is always 360°."
    },
    {
        question: "A cube has a side length of 4 cm. What is its volume?",
        options: ["64 cm³", "32 cm³", "48 cm³", "16 cm³"],
        correctAnswer: "64 cm³",
        explanation: "Volume of cube = side³ = 4³ = 64 cm³."
    },
    {
        question: "A triangle has sides 3 cm, 4 cm, and 5 cm. What type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Right-angled",
        explanation: "It satisfies the Pythagorean theorem: 3² + 4² = 5², so it's a right-angled triangle."
    },
    {
        question: "A sphere has a radius of 6 cm. What is its surface area? (π = 3.14)",
        options: ["452.16 cm²", "500 cm²", "432 cm²", "470 cm²"],
        correctAnswer: "452.16 cm²",
        explanation: "Surface area of sphere = 4πr² = 4 × 3.14 × 6² = 452.16 cm²."
    },
    {
        question: "Find the lateral surface area of a cylinder with radius 7 cm and height 10 cm. (π = 3.14)",
        options: ["440 cm²", "420 cm²", "410 cm²", "430 cm²"],
        correctAnswer: "440 cm²",
        explanation: "Lateral surface area of cylinder = 2πrh = 2 × 3.14 × 7 × 10 = 440 cm²."
    },
    {
        question: "A cone has a base radius of 5 cm and height of 12 cm. What is its volume? (π = 3.14)",
        options: ["314 cm³", "280 cm³", "290 cm³", "300 cm³"],
        correctAnswer: "314 cm³",
        explanation: "Volume of a cone = (1/3)πr²h = (1/3) × 3.14 × 5² × 12 = 314 cm³."
    },
    {
        question: "A quadrilateral has four equal sides and opposite angles equal. What is it?",
        options: ["Rectangle", "Parallelogram", "Rhombus", "Trapezium"],
        correctAnswer: "Rhombus",
        explanation: "A rhombus has all sides equal and opposite angles equal."
    },
    {
        question: "The base and height of a parallelogram are 8 cm and 6 cm. Find its area.",
        options: ["48 cm²", "42 cm²", "50 cm²", "55 cm²"],
        correctAnswer: "48 cm²",
        explanation: "Area of a parallelogram = base × height = 8 × 6 = 48 cm²."
    },
    {
        question: "What is the sum of the interior angles of a pentagon?",
        options: ["360°", "540°", "720°", "900°"],
        correctAnswer: "540°",
        explanation: "Sum of interior angles of an n-sided polygon = (n-2) × 180 = (5-2) × 180 = 540°."
    },
    {
        question: "A right-angled triangle has legs of 9 cm and 12 cm. Find its hypotenuse.",
        options: ["14 cm", "15 cm", "16 cm", "18 cm"],
        correctAnswer: "15 cm",
        explanation: "Using Pythagoras’ theorem: h² = 9² + 12² → h = √(81 + 144) = √225 = 15 cm."
    },
    {
        question: "The perimeter of a circle is also known as its:",
        options: ["Radius", "Diameter", "Circumference", "Chord"],
        correctAnswer: "Circumference",
        explanation: "The perimeter of a circle is called its circumference."
    },
    {
        question: "A cylinder has a height of 14 cm and a base radius of 3 cm. Find its volume. (π = 3.14)",
        options: ["396 cm³", "394 cm³", "392 cm³", "400 cm³"],
        correctAnswer: "396 cm³",
        explanation: "Volume of a cylinder = πr²h = 3.14 × 3² × 14 = 396 cm³."
    },
    {
        question: "What is the number of diagonals in a hexagon?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "9",
        explanation: "Number of diagonals in an n-sided polygon = n(n-3)/2 = 6(6-3)/2 = 9."
    },
    {
        question: "Find the perimeter of an equilateral triangle with side 9 cm.",
        options: ["18 cm", "27 cm", "24 cm", "30 cm"],
        correctAnswer: "27 cm",
        explanation: "Perimeter of an equilateral triangle = 3 × side = 3 × 9 = 27 cm."
    },
    {
        question: "If a cube has a volume of 125 cm³, what is the length of one side?",
        options: ["3 cm", "4 cm", "5 cm", "6 cm"],
        correctAnswer: "5 cm",
        explanation: "Volume of cube = side³ → side = ∛125 = 5 cm."
    }
];

export default geometryMensurationQuestions;