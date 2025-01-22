// import React from 'react'

import ProgressIndicators from "./ProgressIndicators";
import SurveyForm from "./SurveyForm";

function SurveySection() {
  return (
    <div className="bg-white mr-5 rounded-md p-5">
      <ProgressIndicators />
      <SurveyForm />
    </div>
  );
}

export default SurveySection;

