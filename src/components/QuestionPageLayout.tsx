import React from "react";
import { IconCanvas } from "./IconCanvas";

interface QuestionPageLayoutProps {
  questions: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  three: React.ReactNode;
}

export function QuestionPageLayout({
  description,
  questions,
  three,
  title,
}: QuestionPageLayoutProps): JSX.Element {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 h-screen">
        <div className="prose self-center mx-auto md:mr-0 px-24 row-start-2 md:row-start-auto">
          {title}
          {description}
          <a
            href="#vragenlijst"
            className="bg-blue-600 text-blue-50 px-3 py-1.5 w-[16rem] rounded max-w-full mt-8 inline-block text-center no-underline hover:bg-blue-500"
          >
            Start
          </a>
        </div>
        <div className="w-full h-full min-h-[400px] from-blue-50 to-blue-200 bg-gradient-radial row-start-1 md:row-start-auto border-y-8 border-r-8 border-white">
          <IconCanvas>{three}</IconCanvas>
        </div>
      </div>
      <div className="bg-[rgb(17,11,25)] text-purple-50" id="vragenlijst">
        <div className="grid-cols-[1fr,auto,1fr] grid items-center gap-y-12 gap-x-8 py-32">
          {questions}
        </div>
      </div>
    </div>
  );
}
