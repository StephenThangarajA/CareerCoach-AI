const bloodRelationQuestions = [
    {
      question: "Pointing to a man, Sarah said, 'He is the only son of my mother's father.' How is the man related to Sarah?",
      options: ["Father", "Uncle", "Brother", "Grandfather"],
      correctAnswer: "Uncle",
      explanation: "Sarah's mother's father is her grandfather. His only son would be Sarah's uncle."
    },
    {
      question: "A is the father of B, but B is not his son. What is B’s relation to A?",
      options: ["Daughter", "Nephew", "Niece", "Cousin"],
      correctAnswer: "Daughter",
      explanation: "If B is not A's son, B must be A's daughter."
    },
    {
      question: "Introducing a man, a woman said, 'He is the husband of my mother’s only daughter.' How is the man related to the woman?",
      options: ["Father", "Uncle", "Brother", "Husband"],
      correctAnswer: "Father",
      explanation: "The woman's mother's only daughter is herself, so the man is her husband, making him her father."
    },
    {
      question: "If A is B’s mother and C is A’s father, what is C’s relation to B?",
      options: ["Grandfather", "Father", "Uncle", "Brother"],
      correctAnswer: "Grandfather",
      explanation: "C is A’s father, and A is B’s mother, so C is B’s grandfather."
    },
    {
      question: "Pointing to a photograph, Alex said, 'She is the daughter of my father’s only son.' How is the girl related to Alex?",
      options: ["Sister", "Niece", "Daughter", "Cousin"],
      correctAnswer: "Daughter",
      explanation: "Alex's father's only son is Alex himself, so the girl is Alex's daughter."
    },
    {
      question: "A man says, 'My wife’s father’s only daughter is my wife.' How is the man related to the woman?",
      options: ["Brother", "Father", "Husband", "Cousin"],
      correctAnswer: "Husband",
      explanation: "His wife's father’s only daughter is his wife, so he is her husband."
    },
    {
      question: "John is the brother of Lisa. Lisa is the mother of Steve. How is John related to Steve?",
      options: ["Father", "Uncle", "Brother", "Grandfather"],
      correctAnswer: "Uncle",
      explanation: "John is Lisa’s brother, and Lisa is Steve’s mother. So, John is Steve’s uncle."
    },
    {
      question: "A is B's sister. B is C's mother. How is A related to C?",
      options: ["Aunt", "Mother", "Sister", "Cousin"],
      correctAnswer: "Aunt",
      explanation: "A is B’s sister, and B is C’s mother. So, A is C’s aunt."
    },
    {
      question: "A man introduces a woman as the daughter of the only son of his father. How is the woman related to the man?",
      options: ["Sister", "Mother", "Daughter", "Wife"],
      correctAnswer: "Daughter",
      explanation: "The only son of his father is the man himself, so the woman is his daughter."
    },
    {
      question: "If P is the father of Q and Q is the mother of R, how is P related to R?",
      options: ["Father", "Uncle", "Grandfather", "Brother"],
      correctAnswer: "Grandfather",
      explanation: "P is Q’s father, and Q is R’s mother, so P is R’s grandfather."
    },
    {
      question: "Pointing to a woman, Tom said, 'She is the daughter-in-law of my mother’s only son.' How is the woman related to Tom?",
      options: ["Sister", "Daughter", "Wife", "Mother"],
      correctAnswer: "Wife",
      explanation: "Tom's mother's only son is Tom himself. His daughter-in-law would be his wife."
    },
    {
      question: "If A is the son of B and B is the sister of C, how is C related to A?",
      options: ["Uncle", "Father", "Brother", "Grandfather"],
      correctAnswer: "Uncle",
      explanation: "C is B’s sibling, and B is A’s mother. So, C is A’s uncle."
    },
    {
      question: "A’s mother is B’s sister. B has a daughter named C. How is C related to A?",
      options: ["Sister", "Cousin", "Aunt", "Niece"],
      correctAnswer: "Cousin",
      explanation: "A’s mother and B are siblings. B’s daughter C is A’s cousin."
    },
    {
      question: "If X is Y's brother, Y is Z's father, and Z is W's mother, how is X related to W?",
      options: ["Grandfather", "Uncle", "Brother", "Father"],
      correctAnswer: "Great-Uncle",
      explanation: "X is Y’s brother, Y is Z’s father, Z is W’s mother. So, X is W’s great-uncle."
    },
    {
      question: "A is B’s father, and C is A’s brother. What is C’s relation to B?",
      options: ["Uncle", "Brother", "Cousin", "Grandfather"],
      correctAnswer: "Uncle",
      explanation: "C is A’s brother, and A is B’s father, so C is B’s uncle."
    },
    {
      question: "If A is the daughter of B and B is the sister of C, how is C related to A?",
      options: ["Uncle", "Father", "Brother", "Grandfather"],
      correctAnswer: "Uncle",
      explanation: "C is B’s sibling, and B is A’s mother. So, C is A’s uncle."
    },
    {
      question: "If P is the father of Q and Q is the mother of R, how is P related to R?",
      options: ["Father", "Uncle", "Grandfather", "Brother"],
      correctAnswer: "Grandfather",
      explanation: "P is Q’s father, and Q is R’s mother, so P is R’s grandfather."
    },
    {
      question: "Tom said to Peter, 'Your mother’s husband’s sister is my aunt.' How is Peter related to Tom?",
      options: ["Father", "Cousin", "Brother", "Uncle"],
      correctAnswer: "Brother",
      explanation: "Peter’s mother’s husband is Peter’s father. His father’s sister is his aunt, and she is also Tom’s aunt. So, Tom and Peter are brothers."
    },
    {
      question: "A woman says, 'My father’s only son’s wife is my mother.' How is the woman related to the man?",
      options: ["Daughter", "Mother", "Sister", "Wife"],
      correctAnswer: "Daughter",
      explanation: "The woman's father's only son is the woman's father himself, so his wife is her mother. Therefore, she is his daughter."
    },
    {
      question: "Introducing a boy, a girl said, 'He is the son of my grandfather's only son.' How is the boy related to the girl?",
      options: ["Brother", "Cousin", "Uncle", "Nephew"],
      correctAnswer: "Brother",
      explanation: "The girl's grandfather's only son is her father. So, the boy is her father's son, making him her brother."
    }
  ];
  
export default bloodRelationQuestions;  