const speedDistanceQuestions = [
    {
        question: "A car travels 240 km in 4 hours. What is its average speed?",
        options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
        correctAnswer: "60 km/h",
        explanation: "Speed = Distance / Time = 240 km / 4 h = 60 km/h."
    },
    {
        question: "A train is moving at 72 km/h. What is its speed in meters per second?",
        options: ["20 m/s", "25 m/s", "30 m/s", "36 m/s"],
        correctAnswer: "20 m/s",
        explanation: "Speed in m/s = (72 × 1000) / (60 × 60) = 20 m/s."
    },
    {
        question: "If a person walks at 5 km/h, how much time will he take to cover 20 km?",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        correctAnswer: "4 hours",
        explanation: "Time = Distance / Speed = 20 km / 5 km/h = 4 hours."
    },
    {
        question: "A train 200m long crosses a pole in 10 seconds. What is its speed?",
        options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
        correctAnswer: "20 m/s",
        explanation: "Speed = Distance / Time = 200 m / 10 s = 20 m/s."
    },
    {
        question: "A bike covers 180 km in 3 hours and then 120 km in 2 hours. What is the average speed?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correctAnswer: "60 km/h",
        explanation: "Total distance = 180 + 120 = 300 km, Total time = 3 + 2 = 5 h. Average speed = 300 / 5 = 60 km/h."
    },
    {
        question: "A person takes 6 hours to walk 24 km. What is his walking speed?",
        options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
        correctAnswer: "4 km/h",
        explanation: "Speed = Distance / Time = 24 / 6 = 4 km/h."
    },
    {
        question: "A train 100m long crosses a bridge 200m long in 15 seconds. What is its speed?",
        options: ["15 m/s", "18 m/s", "20 m/s", "25 m/s"],
        correctAnswer: "20 m/s",
        explanation: "Total distance = 100m + 200m = 300m. Speed = 300m / 15s = 20 m/s."
    },
    {
        question: "A plane covers 1500 km in 3 hours. What is its speed?",
        options: ["400 km/h", "450 km/h", "500 km/h", "550 km/h"],
        correctAnswer: "500 km/h",
        explanation: "Speed = Distance / Time = 1500 km / 3 h = 500 km/h."
    },
    {
        question: "A car travels at 90 km/h. How far will it travel in 4 hours?",
        options: ["320 km", "360 km", "400 km", "420 km"],
        correctAnswer: "360 km",
        explanation: "Distance = Speed × Time = 90 × 4 = 360 km."
    },
    {
        question: "A boat covers 40 km upstream in 2 hours and returns downstream in 1 hour. What is the speed of the boat in still water?",
        options: ["15 km/h", "20 km/h", "25 km/h", "30 km/h"],
        correctAnswer: "25 km/h",
        explanation: "Upstream speed = 40/2 = 20 km/h, Downstream speed = 40/1 = 40 km/h. Speed in still water = (20 + 40) / 2 = 25 km/h."
    },
    {
        question: "A man walks at 6 km/h. How much distance will he cover in 50 minutes?",
        options: ["4 km", "5 km", "6 km", "7 km"],
        correctAnswer: "5 km",
        explanation: "Distance = Speed × Time = 6 × (50/60) = 5 km."
    },
    {
        question: "Two cars start at the same time from two points 300 km apart towards each other at speeds of 50 km/h and 40 km/h. When will they meet?",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        correctAnswer: "3 hours",
        explanation: "Relative speed = 50 + 40 = 90 km/h. Time = Distance / Speed = 300 / 90 = 3 hours."
    },
    {
        question: "A train moving at 54 km/h crosses a platform in 30 seconds. If the train is 150m long, what is the platform length?",
        options: ["200m", "250m", "300m", "350m"],
        correctAnswer: "200m",
        explanation: "Train speed in m/s = 54 × (5/18) = 15 m/s. Total distance covered = 15 × 30 = 450m. Platform length = 450 - 150 = 200m."
    },
    {
        question: "A cyclist covers 45 km in 3 hours. What is his speed?",
        options: ["10 km/h", "12 km/h", "15 km/h", "18 km/h"],
        correctAnswer: "15 km/h",
        explanation: "Speed = Distance / Time = 45 km / 3 h = 15 km/h."
    },
    {
        question: "A boat's speed in still water is 12 km/h. If the river flows at 4 km/h, what is the boat's speed downstream?",
        options: ["10 km/h", "12 km/h", "14 km/h", "16 km/h"],
        correctAnswer: "16 km/h",
        explanation: "Downstream speed = Boat speed + Stream speed = 12 + 4 = 16 km/h."
    },
    {
        question: "A car covers 180 km in 3 hours. How much time will it take to cover 300 km at the same speed?",
        options: ["4 hours", "5 hours", "6 hours", "7 hours"],
        correctAnswer: "5 hours",
        explanation: "Speed = 180/3 = 60 km/h. Time = Distance / Speed = 300 / 60 = 5 hours."
    },
    {
        question: "A train moving at 108 km/h takes 20 seconds to pass a man. What is its length?",
        options: ["300m", "400m", "500m", "600m"],
        correctAnswer: "600m",
        explanation: "Train speed in m/s = 108 × (5/18) = 30 m/s. Length = Speed × Time = 30 × 20 = 600m."
    },
    {
        question: "A car takes 8 hours to travel 640 km. What is its speed?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        correctAnswer: "80 km/h",
        explanation: "Speed = Distance / Time = 640 / 8 = 80 km/h."
    },
    {
        question: "A man can row 6 km/h in still water. If the river flows at 2 km/h, how much time will he take to row 12 km upstream?",
        options: ["4 hours", "5 hours", "6 hours", "7 hours"],
        correctAnswer: "6 hours",
        explanation: "Upstream speed = 6 - 2 = 4 km/h. Time = Distance / Speed = 12 / 4 = 6 hours."
    },
    {
        question: "A train moving at 90 km/h overtakes a man running at 10 km/h in 8 seconds. What is the length of the train?",
        options: ["100m", "150m", "175m", "200m"],
        correctAnswer: "200m",
        explanation: "Relative speed = 90 - 10 = 80 km/h = (80 × 1000) / 3600 = 22.22 m/s. Distance = Speed × Time = 22.22 × 8 ≈ 200m."
    }
];

export default speedDistanceQuestions;