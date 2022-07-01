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
      <div className="grid min-h-screen grid-cols-1 grid-rows-[auto,auto] gap-y-8 gap-x-16 md:grid-cols-2 md:grid-rows-none">
        <div className="prose row-start-2 mx-auto self-center p-4 md:row-start-auto md:mr-0 md:px-24">
          {title}
          {description}
          <a
            href="#vragenlijst"
            className="mt-8 inline-block w-[16rem] max-w-full rounded bg-blue-600 px-3 py-1.5 text-center text-blue-50 no-underline hover:bg-blue-500"
          >
            Start
          </a>
        </div>
        <div className="p-4">
          <div className="row-start-1 h-full min-h-[400px] w-full bg-gradient-radial from-blue-50 to-blue-200 md:row-start-auto">
            <IconCanvas>{three}</IconCanvas>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(17,11,25)] text-purple-50" id="vragenlijst">
        <div className="grid gap-y-32 py-32 px-4">{questions}</div>
      </div>
    </div>
  );
}
