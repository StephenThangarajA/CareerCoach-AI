const sentenceCorrectionQuestions = [
    {
        sentence: "She don't like ice cream.",
        question: "Which of the following correctly replaces the sentence?",
        options: ["She doesn’t likes ice cream.", "She doesn’t like ice cream.", "She didn’t liked ice cream.", "She don’t like ice cream."],
        correctAnswer: "She doesn’t like ice cream.",
        explanation: "The correct verb form is 'doesn't like' instead of 'don’t like'."
    },
    {
        sentence: "The team have won the championship.",
        question: "What is the correct version of this sentence?",
        options: ["The team has won the championship.", "The team have win the championship.", "The team has win the championship.", "The team have been winning the championship."],
        correctAnswer: "The team has won the championship.",
        explanation: "'Team' is a singular collective noun, so 'has' should be used instead of 'have'."
    },
    {
        sentence: "Neither of the answers are correct.",
        question: "Which correction makes this sentence grammatically correct?",
        options: ["Neither of the answers is correct.", "Neither of the answers were correct.", "Neither of the answers was correct.", "Neither of the answers be correct."],
        correctAnswer: "Neither of the answers is correct.",
        explanation: "'Neither' is singular, so it should take 'is' instead of 'are'."
    },
    {
        sentence: "My sister and me went to the mall.",
        question: "What is the correct version of this sentence?",
        options: ["My sister and me went to the mall.", "My sister and I went to the mall.", "Me and my sister went to the mall.", "My sister and I goes to the mall."],
        correctAnswer: "My sister and I went to the mall.",
        explanation: "The subject pronoun 'I' should be used instead of 'me'."
    },
    {
        sentence: "The teacher gave us a homeworks.",
        question: "What is the correct sentence?",
        options: ["The teacher gave us homeworks.", "The teacher gave us a homework.", "The teacher gave us homework.", "The teacher gave us an homeworks."],
        correctAnswer: "The teacher gave us homework.",
        explanation: "'Homework' is an uncountable noun, so 'a' or 'homeworks' is incorrect."
    },
    {
        sentence: "Each of the students were given a book.",
        question: "What is the correct form of the sentence?",
        options: ["Each of the students was given a book.", "Each of the students were given a book.", "Each of the students had been given a book.", "Each of the students are given a book."],
        correctAnswer: "Each of the students was given a book.",
        explanation: "'Each' is singular, so it should be followed by 'was' instead of 'were'."
    },
    {
        sentence: "She is more smarter than her brother.",
        question: "Which sentence is correct?",
        options: ["She is more smarter than her brother.", "She is smarter than her brother.", "She is much smarter than her brother.", "She is smartest than her brother."],
        correctAnswer: "She is smarter than her brother.",
        explanation: "'More' is unnecessary because 'smarter' is already a comparative adjective."
    },
    {
        sentence: "He didn't knew about the test.",
        question: "What is the correct sentence?",
        options: ["He didn’t knew about the test.", "He doesn’t knew about the test.", "He didn’t know about the test.", "He didn’t knows about the test."],
        correctAnswer: "He didn’t know about the test.",
        explanation: "The past simple form should be 'know' after 'didn't'."
    },
    {
        sentence: "She enjoys to swim every morning.",
        question: "What is the correct sentence?",
        options: ["She enjoys swimming every morning.", "She enjoy to swim every morning.", "She enjoys to swimming every morning.", "She enjoy swimming every morning."],
        correctAnswer: "She enjoys swimming every morning.",
        explanation: "'Enjoys' should be followed by a gerund (swimming) instead of an infinitive (to swim)."
    },
    {
        sentence: "The child was happy because her mother bought she a gift.",
        question: "Which correction makes the sentence grammatically correct?",
        options: ["The child was happy because her mother bought her a gift.", "The child was happy because her mother buy she a gift.", "The child was happy because her mother bought she an gift.", "The child was happy because her mother buy her a gift."],
        correctAnswer: "The child was happy because her mother bought her a gift.",
        explanation: "'She' should be replaced with 'her' as the indirect object."
    },
    {
        sentence: "We was going to the park when it started raining.",
        question: "Which sentence is correct?",
        options: ["We was going to the park when it started raining.", "We were going to the park when it started raining.", "We are going to the park when it started raining.", "We has going to the park when it started raining."],
        correctAnswer: "We were going to the park when it started raining.",
        explanation: "'We' is plural and should take 'were' instead of 'was'."
    },
    {
        sentence: "I have went to the store already.",
        question: "What is the correct sentence?",
        options: ["I have gone to the store already.", "I have went to the store already.", "I has gone to the store already.", "I went to the store already."],
        correctAnswer: "I have gone to the store already.",
        explanation: "'Have' should be followed by the past participle 'gone' instead of 'went'."
    },
    {
        sentence: "There is five apples on the table.",
        question: "Which sentence is correct?",
        options: ["There is five apples on the table.", "There are five apples on the table.", "There has five apples on the table.", "There have five apples on the table."],
        correctAnswer: "There are five apples on the table.",
        explanation: "Since 'apples' is plural, 'are' should be used instead of 'is'."
    },
    {
        sentence: "Me and John went to the park.",
        question: "Which correction is needed?",
        options: ["John and me went to the park.", "John and I went to the park.", "Me and John was going to the park.", "Me and John go to the park."],
        correctAnswer: "John and I went to the park.",
        explanation: "The subject pronoun 'I' should be used instead of 'me'."
    },
    {
        sentence: "He works hardly to support his family.",
        question: "What is the correct sentence?",
        options: ["He works hardly to support his family.", "He works hard to support his family.", "He work hardly to support his family.", "He worked hardly to support his family."],
        correctAnswer: "He works hard to support his family.",
        explanation: "'Hardly' means 'almost not at all', so 'hard' is the correct word choice."
    },
    {
        sentence: "She is very unique in her style.",
        question: "Which correction is needed?",
        options: ["She is unique in her style.", "She is most unique in her style.", "She is very much unique in her style.", "She is very unique in her style."],
        correctAnswer: "She is unique in her style.",
        explanation: "'Unique' is an absolute adjective and should not be modified by 'very'."
    },
    {
        sentence: "She didn't knew the answer to the question.",
        question: "What is the correct sentence?",
        options: ["She didn't knew the answer to the question.", "She doesn’t knew the answer to the question.", "She didn’t know the answer to the question.", "She don’t knew the answer to the question."],
        correctAnswer: "She didn’t know the answer to the question.",
        explanation: "After 'did', the base form of the verb ('know') should be used, not the past tense ('knew')."
    },
    {
        sentence: "Neither of the students were prepared for the exam.",
        question: "What is the correct sentence?",
        options: [ "Neither of the students was prepared for the exam.", "Neither of the students were prepared for the exam.", "Neither of the students are prepared for the exam.", "Neither of the students have prepared for the exam."],
        correctAnswer: "Neither of the students was prepared for the exam.",
        explanation: "'Neither' is singular, so the singular verb 'was' should be used instead of 'were'."
    },
    {
        sentence: "The team are playing their best today.",
        question: "What is the correct sentence?",
        options: [ "The team are playing their best today.", "The team is playing their best today.", "The team is playing its best today.", "The team are playing it's best today."],
        correctAnswer: "The team is playing its best today.",
        explanation: "'Team' is a collective noun and is treated as singular, so 'is' and 'its' should be used."
    },
    {
        sentence: "Each of the boys have completed their assignments.",
        question: "What is the correct sentence?",
        options: [ "Each of the boys have completed their assignments.", "Each of the boys has completed his assignment.", "Each of the boys has completed their assignment.", "Each of the boys have completed his assignments."],
        correctAnswer: "Each of the boys has completed his assignment.",
        explanation: "'Each' is singular, so it should be followed by 'has' instead of 'have'. Also, 'his' agrees with 'each'."
    }
];

export default sentenceCorrectionQuestions;