const errorDetectionQuestions = [
    {
        sentence: "She go to the market every Sunday.",
        question: "Identify the error in the sentence.",
        options: [ "She go", "to the market", "every Sunday", "No error"],
        correctAnswer: "She go",
        explanation: "'She' is singular, so the verb should be 'goes' instead of 'go'."
    },
    {
        sentence: "The furniture in my house are very expensive.",
        question: "Identify the error in the sentence.",
        options: ["The furniture", "in my house", "are very expensive", "No error"],
        correctAnswer: "are very expensive",
        explanation: "'Furniture' is an uncountable noun, so the verb should be 'is' instead of 'are'."
    },
    {
        sentence: "Neither of the girls were late for the class.",
        question: "Identify the error in the sentence.",
        options: [ "Neither of the girls", "were late", "for the class", "No error"],
        correctAnswer: "were late",
        explanation: "'Neither' is singular, so the verb should be 'was' instead of 'were'."
    },
    {
        sentence: "If I was you, I would accept the offer.",
        question: "Identify the error in the sentence.",
        options: [ "If I was",  "you, I would",  "accept the offer",  "No error"],
        correctAnswer: "If I was",
        explanation: "In conditional sentences, 'was' should be replaced with 'were'."
    },
    {
        sentence: "The teacher, along with his students, are going to the museum.",
        question: "Identify the error in the sentence.",
        options: [ "The teacher", "along with his students", "are going to the museum", "No error"],
        correctAnswer: "are going to the museum",
        explanation: "The subject 'teacher' is singular, so the verb should be 'is' instead of 'are'."
    },
    {
        sentence: "One of my friend is coming to visit me.",
        question: "Identify the error in the sentence.",
        options: [ "One of my friend", "is coming", "to visit me", "No error"],
        correctAnswer: "One of my friend",
        explanation: "'One of' should be followed by a plural noun, so it should be 'One of my friends'."
    },
    {
        sentence: "He was so tired that he layed down on the bed immediately.",
        question: "Identify the error in the sentence.",
        options: [ "He was so tired", "that he layed", "down on the bed", "No error"],
        correctAnswer: "that he layed",
        explanation: "'Layed' is incorrect; the correct past tense of 'lie' is 'lay'."
    },
    {
        sentence: "She is senior than me in experience.",
        question: "Identify the error in the sentence.",
        options: [ "She is", "senior than me", "in experience", "No error"],
        correctAnswer: "senior than me",
        explanation: "'Senior' is followed by 'to' instead of 'than'. The correct phrase is 'senior to me'."
    },
    {
        sentence: "The team are playing really well this season.",
        question: "Identify the error in the sentence.",
        options: [ "The team", "are playing", "really well this season", "No error"],
        correctAnswer: "are playing",
        explanation: "'Team' is a collective noun and is singular, so it should be 'is playing'."
    },
    {
        sentence: "Many a student have participated in the competition.",
        question: "Identify the error in the sentence.",
        options: [ "Many a student", "have participated", "in the competition", "No error"],
        correctAnswer: "have participated",
        explanation: "'Many a' is followed by a singular noun and singular verb, so it should be 'has participated'."
    },
    {
        sentence: "I prefer coffee than tea.",
        question: "Identify the error in the sentence.",
        options: [ "I prefer", "coffee than", "tea", "No error"],
        correctAnswer: "coffee than",
        explanation: "'Prefer' is followed by 'to', not 'than'. The correct phrase is 'prefer coffee to tea'."
    },
    {
        sentence: "He told to me that he was busy.",
        question: "Identify the error in the sentence.",
        options: [ "He told to me", "that he was", "busy", "No error"],
        correctAnswer: "He told to me",
        explanation: "'Told' is not followed by 'to'. The correct phrase is 'He told me'."
    },
    {
        sentence: "The sceneries of Switzerland are breathtaking.",
        question: "Identify the error in the sentence.",
        options: [ "The sceneries", "of Switzerland", "are breathtaking", "No error"],
        correctAnswer: "The sceneries",
        explanation: "'Scenery' is an uncountable noun and does not have a plural form."
    },
    {
        sentence: "The flight will land at 10:00 PM in the night.",
        question: "Identify the error in the sentence.",
        options: [ "The flight will land", "at 10:00 PM", "in the night", "No error"],
        correctAnswer: "in the night",
        explanation: "We say 'at night' instead of 'in the night'."
    },
    {
        sentence: "She is one of the best dancer in the school.",
        question: "Identify the error in the sentence.",
        options: [ "She is one of", "the best dancer", "in the school", "No error"],
        correctAnswer: "the best dancer",
        explanation: "It should be 'the best dancers' since 'one of' is followed by a plural noun."
    },
    {
        sentence: "Unless you do not work hard, you will not succeed.",
        question: "Identify the error in the sentence.",
        options: [ "Unless you do not", "work hard", "you will not succeed", "No error"],
        correctAnswer: "Unless you do not",
        explanation: "'Unless' already implies a negative condition, so 'not' should be removed."
    },
    {
        sentence: "The meeting will be held on next Monday.",
        question: "Identify the error in the sentence.",
        options: [ "The meeting", "will be held on", "next Monday", "No error"],
        correctAnswer: "will be held on",
        explanation: "'On' should not be used before 'next Monday'."
    },
    {
        sentence: "The dog is very aggressive and it may bites you.",
        question: "Identify the error in the sentence.",
        options: [ "The dog is", "very aggressive", "and it may bites you", "No error"],
        correctAnswer: "and it may bites you",
        explanation: "After 'may', the base form of the verb should be used, so 'bites' should be 'bite'."
    },
    {
        sentence: "She is more intelligent than any girl in the class.",
        question: "Identify the error in the sentence.",
        options: [ "She is", "more intelligent than", "any girl in the class", "No error"],
        correctAnswer: "any girl in the class",
        explanation: "It should be 'any other girl' to avoid self-comparison."
    },
    {
        sentence: "He has ordered for a cup of coffee.",
        question: "Identify the error in the sentence.",
        options: [ "He has", "ordered for", "a cup of coffee", "No error"],
        correctAnswer: "ordered for",
        explanation: "'Order' is not followed by 'for'. The correct phrase is 'ordered a cup of coffee'."
    }
];

export default errorDetectionQuestions;