const directionSenseQuestions = [
    {
        question: "A person walks 10 meters north, then turns right and walks 5 meters, then turns right again and walks 10 meters. In which direction is he from the starting point?",
        options: ["East", "West", "North", "South"],
        correctAnswer: "East",
        explanation: "After moving north 10m, then right (east) 5m, and then south 10m, the person is 5m east from the start."
    },
    {
        question: "Ravi walks 20 meters towards the north. He then turns left and walks 10 meters. Then he turns left again and walks 20 meters. Finally, he turns right and walks 5 meters. How far is he from his starting point?",
        options: ["5 meters", "10 meters", "15 meters", "20 meters"],
        correctAnswer: "5 meters",
        explanation: "Ravi moves north (20m), left (west) 10m, south (20m), then right (north) 5m. Net displacement is 5m west."
    },
    {
        question: "A boy walks 15 meters towards the east, then turns right and walks 10 meters, then turns right again and walks 5 meters. In which direction is he facing now?",
        options: ["North", "South", "East", "West"],
        correctAnswer: "West",
        explanation: "After moving east (15m), right (south) 10m, and right (west) 5m, the person is now facing west."
    },
    {
        question: "A man walks 5 meters to the north, then 3 meters east, then 2 meters south, then 3 meters west. How far is he from his starting point?",
        options: ["2 meters", "3 meters", "4 meters", "5 meters"],
        correctAnswer: "3 meters",
        explanation: "Final displacement: (North 5m - South 2m) = 3m, East 3m - West 3m = 0m. Net displacement is 3m north."
    },
    {
        question: "A person walks 30 meters west, then 40 meters south, then 30 meters east. How far is he from his starting point?",
        options: ["10 meters", "20 meters", "30 meters", "40 meters"],
        correctAnswer: "40 meters",
        explanation: "West and east cancel out. Net movement is 40m south from the start."
    },
    {
        question: "A girl moves 8 meters south, then turns left and moves 6 meters, then turns left again and moves 8 meters. In which direction is she from the starting point?",
        options: ["North", "South", "West", "East"],
        correctAnswer: "West",
        explanation: "Moving south (8m), left (east) 6m, left (north) 8m, she is 6m west of the start."
    },
    {
        question: "A boy moves 10 meters west, then turns right and moves 4 meters, then turns right again and moves 10 meters. How far is he from his starting point?",
        options: ["4 meters", "6 meters", "8 meters", "10 meters"],
        correctAnswer: "4 meters",
        explanation: "Final displacement: 10m west - 10m east = 0m, Net south movement = 4m."
    },
    {
        question: "A person moves 5 meters south, then 5 meters west, then 10 meters north. What is his final position with respect to the starting point?",
        options: ["5 meters north-west", "5 meters south-west", "5 meters north-east", "5 meters south-east"],
        correctAnswer: "5 meters north-west",
        explanation: "Net movement: (North 10m - South 5m) = 5m north, and 5m west."
    },
    {
        question: "If you are facing east and turn 90 degrees counterclockwise, which direction will you face?",
        options: ["North", "South", "West", "East"],
        correctAnswer: "North",
        explanation: "Turning 90 degrees counterclockwise from east leads to north."
    },
    {
        question: "If you start facing south and turn 270 degrees clockwise, which direction will you be facing?",
        options: ["North", "West", "East", "South"],
        correctAnswer: "East",
        explanation: "270° clockwise from south moves through west (90°) → north (180°) → east (270°)."
    },
    {
        question: "A person moves 10 meters west, then turns left and moves 15 meters, then turns right and moves 5 meters. How far is he from his starting point?",
        options: ["10 meters", "15 meters", "18 meters", "20 meters"],
        correctAnswer: "18 meters",
        explanation: "Displacement: 15m north, 10m west, 5m east. Net movement: 15m north, 5m west → 18m from start."
    },
    {
        question: "A car travels 12 km north, then 5 km east, then 8 km south. How far is it from the starting point?",
        options: ["5 km", "7 km", "10 km", "12 km"],
        correctAnswer: "7 km",
        explanation: "Net movement: 12 km north - 8 km south = 4 km north, and 5 km east. Distance = sqrt(4² + 5²) = 7 km."
    },
    {
        question: "A person walks 7 meters towards east, then 24 meters south, and then 7 meters west. How far is he from his starting point?",
        options: ["14 meters", "17 meters", "24 meters", "28 meters"],
        correctAnswer: "24 meters",
        explanation: "East-west cancels out. Net movement is 24m south."
    },
    {
        question: "A man is facing north. He turns 135 degrees clockwise. Which direction is he facing now?",
        options: ["South-West", "South-East", "West", "East"],
        correctAnswer: "South-East",
        explanation: "135° clockwise from north moves through east (90°) to southeast (135°)."
    },
    {
        question: "A cyclist goes 12 km south, then 16 km west. How far is he from the starting point?",
        options: ["12 km", "16 km", "20 km", "28 km"],
        correctAnswer: "20 km",
        explanation: "Distance = sqrt(12² + 16²) = sqrt(144 + 256) = 20 km."
    },
    {
        question: "A car moves 30 meters west, then 40 meters north. How far is it from the starting point?",
        options: ["50 meters", "60 meters", "70 meters", "80 meters"],
        correctAnswer: "50 meters",
        explanation: "Distance = sqrt(30² + 40²) = sqrt(900 + 1600) = 50 meters."
    },
    {
        question: "If a person turns 180 degrees counterclockwise from west, which direction will he face?",
        options: ["East", "North", "South", "West"],
        correctAnswer: "East",
        explanation: "180° counterclockwise from west moves through south (90°) to east (180°)."
    },
    {
        question: "A boy moves 6 meters north, then turns right and moves 8 meters, then turns right again and moves 6 meters. How far is he from his starting point?",
        options: ["6 meters", "8 meters", "10 meters", "14 meters"],
        correctAnswer: "8 meters",
        explanation: "Moving north (6m), right (east) 8m, right (south) 6m. He is 8m east of the start."
    },
    {
        question: "A person walks 20 meters east, then 15 meters north, then 20 meters west. How far is he from his starting point?",
        options: ["5 meters", "10 meters", "15 meters", "20 meters"],
        correctAnswer: "15 meters",
        explanation: "East-west cancels out. Net movement is 15m north."
    },
    {
        question: "A man walks 12 meters north, then turns left and walks 9 meters, then turns left again and walks 5 meters. How far is he from the starting point?",
        options: ["5 meters", "7 meters", "10 meters", "13 meters"],
        correctAnswer: "13 meters",
        explanation: "Final displacement: Using Pythagoras theorem, distance = sqrt((12 - 5)² + 9²) = sqrt(7² + 9²) = sqrt(49 + 81) = 13 meters."
    }
];

export default directionSenseQuestions;