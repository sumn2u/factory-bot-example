import factory from 'factory-girl';
import SplitSurvey from './models/SplitSurvey';

factory.define('split-survey', SplitSurvey, {
  survey_id: 1000,
  survey_uuid: "zzz-yyy-111",
  split_survey_uuid: "yyy-zzz-222",
  questions: "Question text",
  meta: "Meta"
});

factory.build('split-survey').then(split_survey => {
  console.log(split_survey);
  // => SplitSurvey {
  //   attrs: {
  //     survey_id: 1000,
  //     survey_uuid: 'zzz-yyy-111',
  //     split_survey_uuid: 'yyy-zzz-222',
  //     questions: 'Question text',
  //     meta: 'Meta'
  //   }
  // }
});