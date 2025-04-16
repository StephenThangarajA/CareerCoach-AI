const syllogismQuestions = [
    {
        question: "Statements: All cats are dogs. Some dogs are birds. Conclusions: I. Some cats are birds. II. Some dogs are cats.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "All cats are dogs does not imply that some cats are birds, but it does imply that some dogs are cats."
    },
    {
        question: "Statements: Some apples are mangoes. All mangoes are bananas. Conclusions: I. Some apples are bananas. II. All bananas are mangoes.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only I follows",
        explanation: "Since all mangoes are bananas and some apples are mangoes, some apples must be bananas."
    },
    {
        question: "Statements: All roses are red. Some red are flowers. Conclusions: I. Some roses are flowers. II. All red are roses.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "There is no direct connection between roses and flowers, and not all red things are roses."
    },
    {
        question: "Statements: All men are mortal. Some mortals are doctors. Conclusions: I. Some men are doctors. II. Some doctors are mortal.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "We cannot conclude that some men are doctors, but we can conclude that some doctors are mortal."
    },
    {
        question: "Statements: No car is a bike. All bikes are vehicles. Conclusions: I. Some vehicles are cars. II. No car is a vehicle.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "Cars are not bikes, but that does not mean no car is a vehicle."
    },
    {
        question: "Statements: Some pens are pencils. Some pencils are erasers. Conclusions: I. Some pens are erasers. II. Some erasers are pencils.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some erasers are pencils is directly given, but we cannot say some pens are erasers."
    },
    {
        question: "Statements: Some birds are parrots. All parrots are green. Conclusions: I. Some birds are green. II. Some greens are birds.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Both I and II follow",
        explanation: "Some birds being parrots and all parrots being green imply that some birds are green."
    },
    {
        question: "Statements: Some tables are chairs. No chair is wood. Conclusions: I. Some tables are wood. II. Some chairs are not tables.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "We cannot infer anything about tables and wood, but some chairs are not tables."
    },
    {
        question: "Statements: No fish is a bird. Some birds are reptiles. Conclusions: I. Some reptiles are not birds. II. No fish is a reptile.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "There is no direct relation between reptiles and fish."
    },
    {
        question: "Statements: All lions are tigers. Some tigers are leopards. Conclusions: I. Some lions are leopards. II. Some leopards are tigers.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some leopards are tigers is given, but there is no link between lions and leopards."
    },
    {
        question: "Statements: All players are humans. Some humans are dancers. Conclusions: I. Some players are dancers. II. Some dancers are humans.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "We cannot conclude that some players are dancers, but some dancers are humans."
    },
    {
        question: "Statements: No fruit is a vegetable. Some vegetables are green. Conclusions: I. Some green are not fruits. II. No vegetable is a fruit.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "No vegetable being a fruit is directly given."
    },
    {
        question: "Statements: All stars are planets. No planet is a moon. Conclusions: I. Some stars are moons. II. No star is a moon.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "No star is a moon because all stars are planets, and no planet is a moon."
    },
    {
        question: "Statements: Some squares are rectangles. All rectangles are shapes. Conclusions: I. Some squares are shapes. II. Some shapes are rectangles.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Both I and II follow",
        explanation: "Some squares are rectangles, and all rectangles are shapes, so both conclusions follow."
    },
    {
        question: "Statements: No A is B. All B are C. Conclusions: I. Some C are A. II. No A is C.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "No A is B, and B are C does not mean Some C are A."
    },
    {
        question: "Statements: Some mobiles are tablets. No tablet is a computer. Conclusions: I. Some mobiles are computers. II. Some mobiles are not computers.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some mobiles are not computers is the only valid conclusion."
    },
    {
        question: "Statements: All books are papers. Some papers are pens. Conclusions: I. Some books are pens. II. Some pens are books.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "There is no direct relation between books and pens."
    },
    {
        question: "Statements: All laptops are computers. Some computers are tablets. Conclusions: I. Some laptops are tablets. II. Some tablets are computers.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some tablets are computers is given, but no direct relation between laptops and tablets."
    },
    {
        question: "Statements: No tree is a plant. Some plants are flowers. Conclusions: I. No tree is a flower. II. Some plants are trees.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "There is no direct relation between trees and flowers or trees and plants."
    },
    {
        question: "Statements: All keys are locks. Some locks are doors. Conclusions: I. Some doors are keys. II. Some locks are keys.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Since all keys are locks, it follows that some locks are keys. However, there is no direct connection between doors and keys."
    }
];

export default syllogismQuestions;