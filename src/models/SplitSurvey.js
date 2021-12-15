class SplitSurvey {
    constructor(attrs = {}) {
    this.attrs = Object.assign({
      survey_id: attrs.survey_id || 1000,
      survey_uuid: attrs.survey_uuid || "zzz-yyy-111",
      split_survey_uuid: attrs.split_survey_uuid || "yyy-zzz-222",
      questions: attrs.questions ||  "Question text",
      meta: attrs.meta || "Meta"
    }, attrs);
  }
}

export default SplitSurvey;