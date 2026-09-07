import assert from "node:assert/strict";
import {
  calculateInitialAssessmentScore,
  getInitialAssessmentMode,
} from "../lib/initial-assessment.js";
import { SIMPLE_SURVEY_KEY } from "../lib/constants.js";
import { getSurveyDefinition } from "../lib/survey-definitions.js";

const thresholdScore = calculateInitialAssessmentScore({
  activity: "journalist",
  activism: "no",
  digitalAttack: "no",
});
const simpleScore = calculateInitialAssessmentScore({
  activity: "privateEmployee",
  activism: "no",
  digitalAttack: "no",
});

assert.equal(thresholdScore, 20);
assert.equal(getInitialAssessmentMode(thresholdScore), "full");
assert.equal(simpleScore, 15);
assert.equal(getInitialAssessmentMode(simpleScore), "simple");
const simpleSurvey = getSurveyDefinition("id", SIMPLE_SURVEY_KEY);
assert.equal(simpleSurvey.pages[0].elements.length, 10);
assert.ok(simpleSurvey.pages[0].elements.every(({ correctAnswer }) => correctAnswer === "1"));
console.log("Initial assessment scoring passed");
