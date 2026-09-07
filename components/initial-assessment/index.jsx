import { useState } from "react";
import { useRouter } from "next/router";
import { STORAGE_KEYS } from "../../lib/constants";
import {
  calculateInitialAssessmentScore,
  getInitialAssessmentMode,
  INITIAL_ASSESSMENT_QUESTIONS,
} from "../../lib/initial-assessment";
import { getTranslations } from "../../lib/i18n";

export default function InitialAssessment({ onComplete }) {
  const { locale } = useRouter();
  const t = getTranslations(locale);
  const [answers, setAnswers] = useState({});
  const [attempted, setAttempted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setAttempted(true);

    const missingQuestion = INITIAL_ASSESSMENT_QUESTIONS.find(
      (question) => !answers[question.name]
    );
    if (missingQuestion) {
      document.getElementById(`assessment-${missingQuestion.name}`)?.focus();
      return;
    }

    const score = calculateInitialAssessmentScore(answers);
    const result = { score, mode: getInitialAssessmentMode(score) };
    sessionStorage.setItem(STORAGE_KEYS.INITIAL_ASSESSMENT, JSON.stringify(result));
    onComplete(result);
  }

  return (
    <div className="relative flex content-center justify-center text-[#283A5B]">
      <div className="container mx-auto max-w-8xl px-4 pt-10 xl:px-48">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="pb-3 text-4xl font-semibold md:pb-5 md:text-5xl">
            <span className="aksen">{t.assessment.headingAccent}</span>{" "}
            {t.assessment.heading}
          </h1>
          <p className="text-base font-light md:text-lg">{t.assessment.description}</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {INITIAL_ASSESSMENT_QUESTIONS.map((question, questionIndex) => {
              const copy = t.assessment.questions[question.name];
              const hasError = attempted && !answers[question.name];
              const questionTitleId = `assessment-${question.name}-title`;
              const errorId = `assessment-${question.name}-error`;

              return (
                <fieldset
                  key={question.name}
                  id={`assessment-${question.name}`}
                  tabIndex={-1}
                  aria-labelledby={questionTitleId}
                  aria-describedby={hasError ? errorId : undefined}
                  aria-invalid={hasError}
                  aria-required="true"
                  className="min-w-0 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
                >
                  <div id={questionTitleId} className="mb-0 text-left text-lg font-semibold leading-snug md:text-xl">
                    {questionIndex + 1}. {copy.title}
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {question.options.map((option) => {
                      const inputId = `${question.name}-${option.value}`;
                      const selected = answers[question.name] === option.value;

                      return (
                        <label
                          key={option.value}
                          htmlFor={inputId}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-base transition-colors md:text-lg ${
                            selected
                              ? "border-[#A91F24] bg-[#A91F24]/10"
                              : "border-gray-200 hover:border-[#A91F24]"
                          }`}
                        >
                          <input
                            id={inputId}
                            name={question.name}
                            type="radio"
                            value={option.value}
                            checked={selected}
                            onChange={(event) =>
                              setAnswers((current) => ({
                                ...current,
                                [question.name]: event.target.value,
                              }))
                            }
                            className="h-5 w-5 shrink-0 accent-[#A91F24]"
                          />
                          <span>{copy.options[option.value]}</span>
                        </label>
                      );
                    })}
                  </div>
                  {hasError && (
                    <p id={errorId} role="alert" className="mt-3 text-sm text-[#A91F24]">
                      {t.assessment.required}
                    </p>
                  )}
                </fieldset>
              );
            })}

            <button
              type="submit"
              className="mb-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#A91F24] px-6 py-3 text-lg leading-6 text-white shadow hover:bg-[#8A191D]"
            >
              {t.assessment.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
