const paraJumbleQuestions = [
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. The Wright brothers invented the first successful airplane.",
            "B. It was a major breakthrough in the history of transportation.",
            "C. They successfully flew it in 1903 at Kitty Hawk.",
            "D. This invention paved the way for modern aviation."
        ],
        options: ["A B C D", "A C D B", "C A D B", "B D A C"],
        correctAnswer: "A C D B",
        explanation: "The correct sequence follows a logical flow from invention to its impact."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Trees provide us with oxygen and reduce air pollution.",
            "B. We must take efforts to plant more trees.",
            "C. Deforestation is a major problem that affects the environment.",
            "D. Without trees, global warming will accelerate."
        ],
        options: ["A C D B", "C A B D", "A B C D", "D C A B"],
        correctAnswer: "A C D B",
        explanation: "The paragraph starts with the role of trees, followed by deforestation's impact and the solution."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Exercise is essential for maintaining good health.",
            "B. It helps in reducing stress and improving mental well-being.",
            "C. People who exercise regularly tend to be more active and productive.",
            "D. Therefore, a daily fitness routine is highly recommended."
        ],
        options: ["A B C D", "C A B D", "D A B C", "B C A D"],
        correctAnswer: "A B C D",
        explanation: "The paragraph begins with the importance of exercise and concludes with a recommendation."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Water scarcity is a growing concern worldwide.",
            "B. Many countries are experiencing severe droughts.",
            "C. To combat this, we must adopt water conservation practices.",
            "D. Governments should implement policies to manage water resources efficiently."
        ],
        options: ["A B C D", "D B C A", "B A D C", "C A B D"],
        correctAnswer: "A B C D",
        explanation: "The paragraph follows a logical sequence from problem to solution."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Technology has revolutionized the way we communicate.",
            "B. Smartphones and the internet have made instant communication possible.",
            "C. Social media platforms allow people to connect across the globe.",
            "D. However, excessive use of technology can lead to reduced face-to-face interactions."
        ],
        options: ["A B C D", "A C B D", "D A B C", "B C D A"],
        correctAnswer: "A B C D",
        explanation: "The paragraph introduces technology’s impact before discussing its effects."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. The industrial revolution transformed economies worldwide.",
            "B. It led to urbanization and mass production.",
            "C. Factories replaced traditional handcraft methods.",
            "D. As a result, living standards improved, but pollution increased."
        ],
        options: ["A B C D", "C A B D", "A C B D", "B A D C"],
        correctAnswer: "A C B D",
        explanation: "The paragraph flows from the revolution's impact to its consequences."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Reading improves vocabulary and cognitive skills.",
            "B. It helps individuals develop critical thinking abilities.",
            "C. Regular reading fosters a lifelong habit of learning.",
            "D. Therefore, parents should encourage children to read from an early age."
        ],
        options: ["A B C D", "B C D A", "A C B D", "D A B C"],
        correctAnswer: "A B C D",
        explanation: "The paragraph starts with the benefits of reading and concludes with encouragement."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Climate change is affecting global weather patterns.",
            "B. Rising temperatures lead to more extreme weather events.",
            "C. Scientists emphasize the need for reducing carbon emissions.",
            "D. Governments worldwide are implementing policies to combat climate change."
        ],
        options: ["A B C D", "D C A B", "C A B D", "A D B C"],
        correctAnswer: "A B C D",
        explanation: "The paragraph follows a problem-solution approach."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Traveling broadens one's perspective and understanding.",
            "B. It exposes individuals to new cultures and traditions.",
            "C. People learn to appreciate diversity through travel experiences.",
            "D. This, in turn, fosters global harmony and mutual respect."
        ],
        options: ["A B C D", "C A D B", "B C A D", "D A B C"],
        correctAnswer: "A B C D",
        explanation: "The paragraph follows a logical flow from cause to effect."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. A balanced diet is essential for maintaining good health.",
            "B. It provides necessary nutrients to the body.",
            "C. Proper nutrition helps prevent diseases and boosts immunity.",
            "D. Thus, people should make conscious dietary choices."
        ],
        options: ["A B C D", "D C B A", "C A D B", "B C A D"],
        correctAnswer: "A B C D",
        explanation: "The paragraph follows a logical sequence from diet importance to health benefits."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Mahatma Gandhi is known for his principles of non-violence.",
            "B. He played a crucial role in India's struggle for independence.",
            "C. His leadership inspired millions to fight for freedom peacefully.",
            "D. His legacy continues to influence movements across the world."
        ],
        options: ["A B C D", "A C B D", "B C A D", "C A D B"],
        correctAnswer: "A B C D",
        explanation: "The paragraph starts with Gandhi’s principles, followed by his impact."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. The human brain is the most complex organ in the body.",
            "B. It controls thoughts, emotions, and bodily functions.",
            "C. Scientists are still discovering new aspects of brain function.",
            "D. Studying the brain helps us understand human behavior better."
        ],
        options: ["A B C D", "A C D B", "B A D C", "D C B A"],
        correctAnswer: "A B C D",
        explanation: "The paragraph introduces the brain and then discusses its complexity."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Space exploration has expanded human knowledge significantly.",
            "B. Missions to Mars and the Moon provide valuable insights.",
            "C. Scientists use advanced technology to study outer space.",
            "D. Future missions aim to explore distant planets and galaxies."
        ],
        options: ["A B C D", "A C B D", "C A B D", "B A D C"],
        correctAnswer: "A C B D",
        explanation: "The paragraph follows a logical flow from general to specific advancements."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. The Amazon Rainforest is home to diverse wildlife.",
            "B. Deforestation is a major threat to this ecosystem.",
            "C. It plays a crucial role in maintaining global oxygen levels.",
            "D. Conservation efforts are essential to protect it from destruction."
        ],
        options: ["A C B D", "C A D B", "B D A C", "A B C D"],
        correctAnswer: "A C B D",
        explanation: "The paragraph starts with the rainforest’s significance and ends with conservation."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Digital learning has transformed education.",
            "B. Online courses allow students to learn at their own pace.",
            "C. Virtual classrooms provide access to global knowledge.",
            "D. However, technology should be used responsibly for learning."
        ],
        options: ["A B C D", "A C B D", "C A B D", "B D A C"],
        correctAnswer: "A B C D",
        explanation: "The paragraph starts with digital learning and concludes with responsible usage."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Pollution is a growing environmental concern.",
            "B. Industrial waste and vehicle emissions contribute to air pollution.",
            "C. Governments are taking measures to reduce pollution levels.",
            "D. Adopting sustainable practices can help mitigate its effects."
        ],
        options: ["A B C D", "B A D C", "A C B D", "D C A B"],
        correctAnswer: "A B C D",
        explanation: "The paragraph follows a problem-solution approach."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Artificial Intelligence (AI) is transforming industries worldwide.",
            "B. It is used in healthcare, finance, and automation.",
            "C. AI improves efficiency and decision-making in various sectors.",
            "D. However, ethical concerns regarding AI development remain."
        ],
        options: ["A B C D", "A C B D", "B A D C", "C A B D"],
        correctAnswer: "A B C D",
        explanation: "The paragraph introduces AI, discusses its applications, and ends with concerns."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Exercise strengthens muscles and improves overall fitness.",
            "B. It also boosts mental health by reducing stress levels.",
            "C. Regular physical activity is essential for a healthy lifestyle.",
            "D. Doctors recommend at least 30 minutes of exercise daily."
        ],
        options: ["C A B D", "A B C D", "B D A C", "D C A B"],
        correctAnswer: "C A B D",
        explanation: "The paragraph follows a logical sequence from necessity to recommendations."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Teamwork is essential for achieving success in any field.",
            "B. Effective collaboration leads to innovative solutions.",
            "C. It encourages creativity and improves problem-solving skills.",
            "D. Organizations value employees who can work well in teams."
        ],
        options: ["A B C D", "A C B D", "C A B D", "B A D C"],
        correctAnswer: "A B C D",
        explanation: "The paragraph introduces teamwork, its benefits, and organizational value."
    },
    {
        question: "Rearrange the following sentences to form a coherent paragraph.",
        sentences: [
            "A. Time management is crucial for personal and professional success.",
            "B. Prioritizing tasks helps individuals accomplish more efficiently.",
            "C. Poor time management can lead to stress and missed deadlines.",
            "D. Developing a daily schedule improves productivity and focus."
        ],
        options: ["A B C D", "B C D A", "C A B D", "A C B D"],
        correctAnswer: "A B C D",
        explanation: "The paragraph starts with time management’s importance and ends with solutions."
    }
];

export default paraJumbleQuestions;