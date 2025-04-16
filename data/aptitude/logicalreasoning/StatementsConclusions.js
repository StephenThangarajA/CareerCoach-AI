const statementsConclusionsQuestions = [
    {
        question: "Statement: All mangoes are fruits. Some fruits are apples.\nConclusion: \nI. Some mangoes are apples. \nII. All apples are fruits.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "There is no direct relationship between mangoes and apples. But all apples being fruits is possible."
    },
    {
        question: "Statement: Some books are papers. All papers are pens.\nConclusion:\nI. Some books are pens.\nII. All pens are books.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only I follows",
        explanation: "Some books being pens is possible, but all pens being books is not."
    },
    {
        question: "Statement: No lion is a tiger. Some tigers are cheetahs.\nConclusion:\nI. No lion is a cheetah.\nII. Some cheetahs are not tigers.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "No direct relationship between lions and cheetahs, and we cannot conclude that some cheetahs are not tigers."
    },
    {
        question: "Statement: All pens are pencils. Some pencils are erasers.\nConclusion:\nI. Some erasers are pens.\nII. Some pencils are pens.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some pencils are definitely pens, but we cannot conclude that some erasers are pens."
    },
    {
        question: "Statement: All cars are vehicles. Some vehicles are buses.\nConclusion:\nI. Some buses are cars.\nII. Some vehicles are cars.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some vehicles being cars is correct, but we cannot conclude that some buses are cars."
    },
    {
        question: "Statement: Some doctors are engineers. All engineers are scientists.\nConclusion:\nI. Some doctors are scientists.\nII. All doctors are scientists.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only I follows",
        explanation: "Some doctors being engineers and all engineers being scientists imply that some doctors are scientists."
    },
    {
        question: "Statement: Some players are singers. All singers are actors.\nConclusion:\nI. Some players are actors.\nII. Some actors are players.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Both I and II follow",
        explanation: "Since some players are singers and all singers are actors, both conclusions follow."
    },
    {
        question: "Statement: All flowers are trees. Some trees are plants.\nConclusion:\nI. Some flowers are plants.\nII. All plants are trees.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "No direct relation between flowers and plants. Also, all plants being trees is not guaranteed."
    },
    {
        question: "Statement: All cats are animals. Some animals are dogs.\nConclusion:\nI. Some cats are dogs.\nII. Some animals are cats.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some animals being cats is true, but we cannot conclude that some cats are dogs."
    },
    {
        question: "Statement: Some chairs are tables. All tables are wood.\nConclusion:\nI. Some chairs are wood.\nII. Some wood are tables.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Both I and II follow",
        explanation: "Some wood being tables is true. Some chairs may also be wood since some chairs are tables."
    },
    {
        question: "Statement: Some birds are parrots. All parrots are green.\nConclusion:\nI. Some birds are green.\nII. Some parrots are birds.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Both I and II follow",
        explanation: "Some birds being green is true since some birds are parrots, and all parrots are green."
    },
    {
        question: "Statement: Some mobiles are laptops. No laptop is a computer.\nConclusion:\nI. Some mobiles are computers.\nII. No mobile is a computer.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "There is no direct relation between mobiles and computers."
    },
    {
        question: "Statement: All oranges are fruits. Some fruits are apples.\nConclusion:\nI. Some oranges are apples.\nII. Some fruits are oranges.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some fruits being oranges is correct, but we cannot conclude that some oranges are apples."
    },
    {
        question: "Statement: No books are pencils. All pencils are pens.\nConclusion:\nI. No books are pens.\nII. Some pens are pencils.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some pens are pencils is true, but no books being pens cannot be concluded."
    },
    {
        question: "Statement: Some buses are trains. All trains are vehicles.\nConclusion:\nI. Some buses are vehicles.\nII. All buses are vehicles.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only I follows",
        explanation: "Some buses being vehicles is true since some buses are trains, and all trains are vehicles."
    },
    {
        question: "Statement: Some dogs are cats. No cat is a rat.\nConclusion:\nI. Some dogs are rats.\nII. Some cats are not rats.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some cats are not rats is true, but no relation exists between dogs and rats."
    },
    {
        question: "Statement: All students are intelligent. Some intelligent people are scientists.\nConclusion:\nI. Some students are scientists.\nII. Some scientists are intelligent.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some scientists being intelligent is true, but we cannot conclude that some students are scientists."
    },
    {
        question: "Statement: Some pencils are sharp. All sharp objects are dangerous.\nConclusion:\nI. Some pencils are dangerous.\nII. All dangerous objects are sharp.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only I follows",
        explanation: "Some pencils being dangerous is correct, but not all dangerous objects are necessarily sharp."
    },
    {
        question: "Statement: All musicians are artists. Some artists are painters.\nConclusion:\nI. Some musicians are painters.\nII. Some painters are artists.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Only II follows",
        explanation: "Some painters being artists is true, but we cannot conclude that some musicians are painters."
    },
    {
        question: "Statement: Some cars are bikes. No bike is a truck.\nConclusion:\nI. Some cars are trucks.\nII. Some bikes are not cars.",
        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
        correctAnswer: "Neither I nor II follows",
        explanation: "There is no direct relationship between cars and trucks or between bikes and cars."
    }
];

export default statementsConclusionsQuestions;