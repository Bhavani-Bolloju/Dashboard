// import React from 'react'
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import SurveySection from "../features/SurveySection";

function DashBoard() {
  return (
    <div className="grid grid-cols-layout grid-rows-layout w-[1400px] m-auto bg-gray-200 gap-y-8 gap-x-5 items-start">
      <Header />
      <Sidebar />
      <SurveySection />
    </div>
  );
}

export default DashBoard;

