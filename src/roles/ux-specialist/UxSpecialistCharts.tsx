import { ResponsiveRadar } from "@nivo/radar";
import React, { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Competency, competencyTranslations } from "../../competency";
import { State } from "../../state";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

interface StateWithName extends State {
  name: string;
}

const categoriesToRender = [
  "graphicsAssessment",
  "prototypingAssessment",
  "uiTheoryAssessment",
  "uiAssessment",
  "dataAnalysisAssessment",
  "researchEvangelistAssessment",
  "conductingResearchAssessment",
  "definingResearchAssessment",
  "campaigningAssessment",
  "contentManagementAssessment",
  "contentStrategyAssessment",
  "contentWritingAssessment",
  "designImplementationAssessment",
  "richInteractionAssessment",
  "codeUxAdvocateAssessment",
];

const categoriesTitles: {
  [key: string]: string;
} = {
  graphicsAssessment: "Graphics",
  prototypingAssessment: "Prototyping",
  uiTheoryAssessment: "UI Theorie",
  uiAssessment: "UI Design",
  dataAnalysisAssessment: "Data Analyze",
  researchEvangelistAssessment: "Evangeliseren UX research",
  conductingResearchAssessment: "Onderzoek uitvoeren",
  definingResearchAssessment: "Onderzoek definiëren",
  campaigningAssessment: "Content campagne",
  contentManagementAssessment: "Content beheer",
  contentStrategyAssessment: "Content strategie",
  contentWritingAssessment: "Content schrijven",
  designImplementationAssessment: "Design implementeren",
  richInteractionAssessment: "Rijke interacties",
  codeUxAdvocateAssessment: "UX developer advocate",
};

function transformStateDataToChartData(states: StateWithName[]) {
  return categoriesToRender.map((category) => {
    const stateValues = states.reduce(
      (result, state) => {
        result[state.name] = ((state as any)[category] as number) + 1;

        return result;
      },
      {} as {
        [key: string]: number;
      }
    );

    return {
      category: categoriesTitles[category],
      ...stateValues,
    };
  });
}

function createNewTeamResult() {
  return { key: uuid(), value: "", name: "" };
}

function decodeTeamResult(result: string): State {
  return JSON.parse(atob(result));
}

export function UxSpecialistCharts(): JSX.Element {
  const state = useSelector((state) => state);

  const [teamResults, setTeamResults] = useState<
    {
      key: string;
      value: string;
      name: string;
    }[]
  >(() => [createNewTeamResult()]);

  const data = useMemo(() => {
    const filteredResults = teamResults.filter(
      (result) => result.value.length > 0
    );
    const teamData: StateWithName[] = filteredResults.map((teamResult) => ({
      ...decodeTeamResult(teamResult.value),
      name: teamResult.name,
    }));
    return transformStateDataToChartData([
      { ...state, name: "own" },
      ...teamData,
    ]);
  }, [state, teamResults]);

  /**
   * Add a new result to the array of results if something is written in the last input name or data
   */
  useEffect(() => {
    const lastResult = teamResults[teamResults.length - 1];
    if (lastResult.value.length > 0 || lastResult.name.length > 0) {
      setTeamResults((currentTeamResults) => [
        ...currentTeamResults,
        createNewTeamResult(),
      ]);
    }
  }, [teamResults]);

  /**
   * Remove non-last empty results
   */
  useEffect(() => {
    const newResults = teamResults.filter(
      (teamResult, i) =>
        teamResult.name.length > 0 ||
        teamResult.value.length > 0 ||
        i === teamResults.length - 1
    );
    if (newResults.length !== teamResults.length) {
      setTeamResults(newResults);
    }
  }, [teamResults]);

  const textboxValue = useMemo(() => btoa(JSON.stringify(state)), []);

  function updateTeamMemberResult(id: string, newResult: string) {
    setTeamResults((currentTeamResults) => {
      return currentTeamResults.map((teamResult) => {
        if (teamResult.key === id) {
          return {
            ...teamResult,
            value: newResult,
          };
        }
        return teamResult;
      });
    });
  }

  function updateTeamMemberName(id: string, newName: string) {
    setTeamResults((currentTeamResults) => {
      return currentTeamResults.map((teamResult) => {
        if (teamResult.key === id) {
          return {
            ...teamResult,
            name: newName,
          };
        }
        return teamResult;
      });
    });
  }

  console.log(data);

  return (
    <div>
      <h1>Resultaat</h1>

      <label htmlFor="ownState">Eigen grafiek data</label>
      <input
        type="text"
        value={textboxValue}
        readOnly
        id="ownState"
        className="w-full select-all"
      />

      <h2>Team Resultaten</h2>
      <p>Voer hier de resultaten van je team in om te vergelijken.</p>
      <div className="flex flex-col space-y-2">
        {teamResults.map((result) => (
          <div className="flex space-x-1" key={result.key}>
            <input
              type="text"
              name="name"
              placeholder="Naam"
              value={result.name}
              onChange={(e) => {
                updateTeamMemberName(result.key, e.target.value);
              }}
            />
            <input
              placeholder="Grafiek data"
              type="text"
              value={result.value}
              onChange={(e) => {
                updateTeamMemberResult(result.key, e.target.value);
              }}
              className="w-full select-all"
            />
          </div>
        ))}
      </div>

      <div
        style={{
          height: 500,
        }}
      >
        <ResponsiveRadar
          data={data}
          keys={[
            "own",
            ...teamResults
              .filter((result) => result.value.length > 0)
              .map((v) => v.name),
          ]}
          indexBy="category"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="cardinalClosed"
          gridLevels={5}
          gridShape="circular"
          isInteractive={true}
          enableDots
          tooltipFormat={(v) => competencyTranslations[(v - 1) as Competency]}
          legends={[
            {
              anchor: "top-left",
              direction: "column",
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
