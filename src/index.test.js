import factory from 'factory-girl';
import SplitSurvey from './models/SplitSurvey';

const split_survey = {
  survey_id: 1000,
  survey_uuid: "zzz-yyy-111",
  split_survey_uuid: "yyy-zzz-222",
  questions: "Question text",
  meta: "Meta"
};
factory.define('split-survey', SplitSurvey, split_survey);

test('split survey attribute must match to the split-survey', () => {
  factory.build('split-survey').then(survey => {
  expect(survey.attrs).toBe(split_survey);
});
});
