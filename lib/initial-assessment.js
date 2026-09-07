export const INITIAL_ASSESSMENT_THRESHOLD = 20;

export const INITIAL_ASSESSMENT_QUESTIONS = [
  {
    name: "activity",
    options: [
      { value: "privateEmployee", score: 5 },
      { value: "journalist", score: 10 },
      { value: "ngoStaff", score: 10 },
      { value: "student", score: 10 },
      { value: "civilServant", score: 5 },
      { value: "entrepreneur", score: 5 },
      { value: "homemaker", score: 5 },
    ],
  },
  {
    name: "activism",
    options: [
      { value: "yes", score: 10 },
      { value: "no", score: 5 },
    ],
  },
  {
    name: "digitalAttack",
    options: [
      { value: "yes", score: 10 },
      { value: "no", score: 5 },
    ],
  },
];

export function calculateInitialAssessmentScore(answers = {}) {
  return INITIAL_ASSESSMENT_QUESTIONS.reduce((total, question) => {
    const selected = question.options.find(
      ({ value }) => value === answers[question.name]
    );
    return total + (selected?.score || 0);
  }, 0);
}

export function getInitialAssessmentMode(score) {
  return score >= INITIAL_ASSESSMENT_THRESHOLD ? "full" : "simple";
}
