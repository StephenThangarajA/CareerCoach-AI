const extraReadingComprehensionQuestions = [
    {
        passage: "The Amazon rainforest is home to millions of species of flora and fauna. It plays a crucial role in regulating the Earth's oxygen and carbon cycles. Deforestation, however, is causing irreparable damage to this ecosystem.",
        question: "What is the primary function of the Amazon rainforest mentioned in the passage?",
        options: ["Providing habitat for humans", "Regulating oxygen and carbon cycles", "Increasing global warming", "Growing agricultural crops"],
        correctAnswer: "Regulating oxygen and carbon cycles",
        explanation: "The passage states that the Amazon rainforest plays a crucial role in oxygen and carbon regulation."
    },
    {
        passage: "Marie Curie was the first woman to win a Nobel Prize. Her groundbreaking research on radioactivity paved the way for advancements in medical treatments and nuclear energy.",
        question: "What was Marie Curie’s major contribution to science?",
        options: ["Inventing the light bulb", "Discovering radioactivity", "Creating the first telescope", "Developing the steam engine"],
        correctAnswer: "Discovering radioactivity",
        explanation: "The passage highlights her research on radioactivity."
    },
    {
        passage: "With the rise of online shopping, traditional retail stores have seen a decline in sales. Many consumers prefer the convenience and variety offered by e-commerce platforms.",
        question: "Why are traditional retail stores experiencing a decline in sales?",
        options: ["People no longer buy products", "Online shopping offers more convenience and variety", "Physical stores do not sell quality goods", "Customers prefer waiting in lines"],
        correctAnswer: "Online shopping offers more convenience and variety",
        explanation: "The passage states that e-commerce provides better convenience and variety."
    },
    {
        passage: "Mount Everest, the highest peak in the world, has attracted thousands of climbers. However, the increased foot traffic has led to concerns about pollution and environmental degradation.",
        question: "What is the main environmental concern about Mount Everest?",
        options: ["Lack of oxygen", "Pollution due to increased tourism", "Dangerous wildlife", "Avalanches"],
        correctAnswer: "Pollution due to increased tourism",
        explanation: "The passage mentions concerns about pollution from increased climbers."
    },
    {
        passage: "Photosynthesis is the process by which plants convert sunlight into energy. This process is essential for producing oxygen and maintaining ecological balance.",
        question: "What is the primary purpose of photosynthesis?",
        options: ["Producing heat", "Generating sunlight", "Converting sunlight into energy", "Absorbing water"],
        correctAnswer: "Converting sunlight into energy",
        explanation: "The passage states that photosynthesis converts sunlight into energy."
    },
    {
        passage: "The Great Wall of China was built to protect against invasions. It stretches over 13,000 miles and is one of the greatest architectural achievements in history.",
        question: "Why was the Great Wall of China built?",
        options: ["To serve as a tourist attraction", "To protect against invasions", "To divide the country", "To improve trade routes"],
        correctAnswer: "To protect against invasions",
        explanation: "The passage mentions that the wall was built for protection against invasions."
    },
    {
        passage: "The Industrial Revolution brought about major technological advancements. It led to the mass production of goods, improved transportation, and the growth of cities.",
        question: "What was one result of the Industrial Revolution?",
        options: ["A decline in cities", "Mass production of goods", "A decrease in technology", "Less transportation development"],
        correctAnswer: "Mass production of goods",
        explanation: "The passage states that mass production was one of the major outcomes."
    },
    {
        passage: "William Shakespeare is widely regarded as one of the greatest writers in English literature. His works include famous plays like 'Romeo and Juliet' and 'Hamlet'.",
        question: "Which of the following is a work by William Shakespeare?",
        options: ["The Great Gatsby", "Hamlet", "Moby Dick", "Pride and Prejudice"],
        correctAnswer: "Hamlet",
        explanation: "The passage lists 'Hamlet' as one of Shakespeare's works."
    },
    {
        passage: "Honeybees play a vital role in pollination, which helps in the reproduction of plants. A decline in bee populations could have severe consequences for agriculture and food production.",
        question: "Why are honeybees important?",
        options: ["They make honey", "They pollinate plants", "They sting humans", "They produce oxygen"],
        correctAnswer: "They pollinate plants",
        explanation: "The passage highlights their role in pollination."
    },
    {
        passage: "Climate change has led to rising sea levels, extreme weather conditions, and the loss of biodiversity. Scientists emphasize the need for immediate action to combat these effects.",
        question: "What is one effect of climate change mentioned in the passage?",
        options: ["Decreasing sea levels", "Milder weather conditions", "Loss of biodiversity", "Reduced global temperatures"],
        correctAnswer: "Loss of biodiversity",
        explanation: "The passage states that climate change is causing a loss of biodiversity."
    },
    {
        passage: "The Wright brothers, Orville and Wilbur, successfully flew the first powered aircraft in 1903. Their invention paved the way for modern aviation.",
        question: "What was the Wright brothers' major contribution?",
        options: ["Inventing the steam engine", "Developing the first powered flight", "Creating the telephone", "Building the first car"],
        correctAnswer: "Developing the first powered flight",
        explanation: "The passage states that the Wright brothers successfully flew the first powered aircraft."
    },
    {
        passage: "Electric cars are becoming more popular as people look for eco-friendly alternatives to gasoline-powered vehicles. These cars reduce carbon emissions and dependence on fossil fuels.",
        question: "Why are electric cars gaining popularity?",
        options: ["They are more expensive", "They reduce carbon emissions", "They use more fuel", "They increase air pollution"],
        correctAnswer: "They reduce carbon emissions",
        explanation: "The passage highlights that electric cars are popular because they help reduce carbon emissions."
    },
    {
        passage: "Albert Einstein developed the theory of relativity, which changed the way scientists understand space, time, and gravity. His equation, E=mc², is one of the most famous in physics.",
        question: "What did Albert Einstein develop?",
        options: ["The theory of relativity", "The laws of motion", "The periodic table", "The steam engine"],
        correctAnswer: "The theory of relativity",
        explanation: "The passage states that Einstein developed the theory of relativity."
    },
    {
        passage: "The Internet has transformed communication by making it faster and more convenient. It allows people to send emails, video chat, and access information instantly.",
        question: "How has the Internet changed communication?",
        options: ["It has slowed down communication", "It has made communication faster and more convenient", "It has replaced all other forms of communication", "It has stopped people from writing letters"],
        correctAnswer: "It has made communication faster and more convenient",
        explanation: "The passage states that the Internet has improved communication speed and convenience."
    },
    {
        passage: "Recycling helps reduce waste and conserve natural resources. By reusing materials like paper, plastic, and metal, we can reduce pollution and save energy.",
        question: "What is one benefit of recycling?",
        options: ["It increases pollution", "It helps conserve natural resources", "It wastes energy", "It increases waste production"],
        correctAnswer: "It helps conserve natural resources",
        explanation: "The passage highlights that recycling helps conserve natural resources and reduce pollution."
    },
    {
        passage: "Neil Armstrong became the first person to walk on the moon in 1969. His famous words, 'That's one small step for man, one giant leap for mankind,' became iconic.",
        question: "What historic event is Neil Armstrong known for?",
        options: ["Discovering America", "Walking on the moon", "Inventing the telescope", "Exploring Antarctica"],
        correctAnswer: "Walking on the moon",
        explanation: "The passage states that Neil Armstrong was the first person to walk on the moon in 1969."
    },
    {
        passage: "The water cycle describes how water moves through the environment. It includes processes like evaporation, condensation, and precipitation, which help maintain Earth's water supply.",
        question: "What is one process involved in the water cycle?",
        options: ["Combustion", "Evaporation", "Melting of metal", "Magnetism"],
        correctAnswer: "Evaporation",
        explanation: "The passage states that evaporation is part of the water cycle."
    },
    {
        passage: "Thomas Edison invented the practical electric light bulb, which changed the way people lived. His invention led to widespread use of electricity for lighting homes and businesses.",
        question: "What did Thomas Edison invent?",
        options: ["The telephone", "The practical electric light bulb", "The printing press", "The steam engine"],
        correctAnswer: "The practical electric light bulb",
        explanation: "The passage states that Edison invented the practical electric light bulb."
    },
    {
        passage: "The invention of the printing press by Johannes Gutenberg revolutionized the spread of knowledge. It enabled the mass production of books, making information more accessible to people.",
        question: "What was the main impact of the printing press?",
        options: ["It improved handwriting", "It enabled mass production of books", "It slowed down the spread of knowledge", "It replaced libraries"],
        correctAnswer: "It enabled mass production of books",
        explanation: "The passage highlights that the printing press allowed books to be mass-produced and made knowledge more accessible."
    },
    {
        passage: "Global warming refers to the increase in Earth's average temperature due to human activities like burning fossil fuels. It has led to rising sea levels and extreme weather patterns.",
        question: "What is one cause of global warming?",
        options: ["Burning fossil fuels", "Planting more trees", "Reducing carbon emissions", "Drinking clean water"],
        correctAnswer: "Burning fossil fuels",
        explanation: "The passage states that human activities like burning fossil fuels contribute to global warming."
    }
];

export default extraReadingComprehensionQuestions;