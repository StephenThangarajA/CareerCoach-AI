const causeAndEffectQuestions = [
    {
        question: "Statement 1: The government has announced a decrease in fuel prices.\nStatement 2: The transportation cost of goods has reduced.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A decrease in fuel prices lowers transportation costs."
    },
    {
        question: "Statement 1: There has been a sharp increase in air pollution in the city.\nStatement 2: The number of people suffering from respiratory diseases has risen.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Higher pollution levels contribute to respiratory diseases."
    },
    {
        question: "Statement 1: A large number of students failed the final exam.\nStatement 2: The exam was unexpectedly difficult this year.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 2 is the cause and Statement 1 is its effect",
        explanation: "A difficult exam led to higher failure rates."
    },
    {
        question: "Statement 1: Many multinational companies are setting up offices in the city.\nStatement 2: Employment opportunities have significantly increased.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "New companies create more job opportunities."
    },
    {
        question: "Statement 1: The prices of essential commodities have skyrocketed.\nStatement 2: The government has announced a subsidy on essential goods.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Rising prices prompted the government to provide subsidies."
    },
    {
        question: "Statement 1: The city experienced heavy rainfall for a week.\nStatement 2: Many low-lying areas were flooded.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Continuous rainfall caused floods in low-lying areas."
    },
    {
        question: "Statement 1: A new express highway was inaugurated last month.\nStatement 2: Travel time between two major cities has been reduced.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A new highway shortens travel time."
    },
    {
        question: "Statement 1: The stock market crashed suddenly.\nStatement 2: Many investors suffered heavy losses.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A stock market crash leads to financial losses for investors."
    },
    {
        question: "Statement 1: The government has increased the tax on imported goods.\nStatement 2: The prices of imported items have risen sharply.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Higher import taxes lead to increased prices."
    },
    {
        question: "Statement 1: There is a severe water shortage in the city.\nStatement 2: The government has imposed water usage restrictions.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Water shortage led to restrictions on usage."
    },
    {
        question: "Statement 1: The government has made online tax filing mandatory.\nStatement 2: More people are filing their taxes on time.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Mandatory online filing has encouraged timely tax payments."
    },
    {
        question: "Statement 1: The local train services were disrupted for several hours.\nStatement 2: Many office workers reached their workplaces late.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Train disruptions caused delays for office workers."
    },
    {
        question: "Statement 1: The price of crude oil in the international market has increased significantly.\nStatement 2: The price of petrol and diesel has risen in the country.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Higher crude oil prices result in increased fuel prices."
    },
    {
        question: "Statement 1: The education department has launched a scholarship program for students from low-income families.\nStatement 2: More students from underprivileged backgrounds are enrolling in higher education.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Scholarships help underprivileged students pursue higher education."
    },
    {
        question: "Statement 1: The government has banned single-use plastic bags.\nStatement 2: The demand for biodegradable bags has increased.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A ban on plastic bags leads to higher demand for eco-friendly alternatives."
    },
    {
        question: "Statement 1: A well-known food company recalled its products from the market due to contamination concerns.\nStatement 2: Consumers stopped purchasing products of that brand.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A product recall due to contamination affects consumer trust."
    },
    {
        question: "Statement 1: There was a power outage in the entire city for five hours.\nStatement 2: Many small businesses suffered losses due to disrupted operations.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A prolonged power outage disrupts business operations, causing financial losses."
    },
    {
        question: "Statement 1: The national football team won an international tournament after two decades.\nStatement 2: A grand celebration was organized for the team’s victory.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Winning a tournament led to a grand celebration."
    },
    {
        question: "Statement 1: The heavy snowfall blocked roads in the northern region of the country.\nStatement 2: Many travelers were stranded and had to be rescued.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "Snowfall blocking roads led to travelers getting stranded."
    },
    {
        question: "Statement 1: A new shopping mall opened in the city center with attractive offers.\nStatement 2: The traffic congestion in the city center has increased significantly.",
        options: ["Statement 1 is the cause and Statement 2 is its effect", "Statement 2 is the cause and Statement 1 is its effect", "Both statements are independent causes", "Both statements are effects of independent causes"],
        correctAnswer: "Statement 1 is the cause and Statement 2 is its effect",
        explanation: "A popular shopping mall attracts more visitors, increasing traffic congestion."
    }
];

export default causeAndEffectQuestions;