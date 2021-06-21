import React, { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Competency, competencyTranslations } from "../../../competency";
import type { TeamResult } from "./ux-specialist-charts.interface";
import {
  combineStateVariablesIntoCategories,
  createNewTeamResult,
  encodedTeamResultsToStates,
  encodedTeamResultsToStatesWithNames,
  encodeTeamResult,
  getAverageStateData,
  isValidTeamResult,
  keysToCheck,
  transformStateDataToChartData,
  usePlusOneInputManager,
} from "./ux-specialist-charts-utils";
import { CustomRadar } from "../../../components/CustomRadar";
import { State } from "../../../state";
import {
  categoriesTitles,
  categoriesToRender,
  combinedCategoriesTitles,
  combinedCategoriesToRender,
} from "./ux-specialist-charts-meta";

interface UxTeamResultsProps {
  teamResults: TeamResult[];
  setTeamResults: React.Dispatch<React.SetStateAction<TeamResult[]>>;
}

export function UxTeamResults({
  teamResults,
  setTeamResults,
}: UxTeamResultsProps): JSX.Element {
  usePlusOneInputManager(
    teamResults,
    setTeamResults,
    keysToCheck,
    createNewTeamResult
  );

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

  return (
    <>
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
    </>
  );
}

export function UxSpecialistCharts(): JSX.Element {
  const state = useSelector((state) => state);

  const [teamResults, setTeamResults] = useState<TeamResult[]>(() => [
    createNewTeamResult(),
  ]);

  const data = useMemo(() => {
    const ownData = { ...state, name: "Eigen grafiek data" };
    const teamData = encodedTeamResultsToStatesWithNames(teamResults);

    return transformStateDataToChartData(
      [ownData, ...teamData],
      categoriesToRender,
      categoriesTitles
    );
  }, [state, teamResults]);

  const averageData = useMemo(() => {
    const allResults: State[] = [
      state,
      ...encodedTeamResultsToStates(teamResults),
    ];
    const averageStateData = getAverageStateData(allResults);
    return transformStateDataToChartData(
      [averageStateData],
      categoriesToRender,
      categoriesTitles
    );
  }, [state, teamResults]);

  const combinedResults = useMemo(() => {
    const ownData = {
      ...combineStateVariablesIntoCategories(state),
      name: "Eigen grafiek data",
    };
    const teamData = encodedTeamResultsToStatesWithNames(teamResults).map(
      (teamResult) => ({
        ...combineStateVariablesIntoCategories(teamResult),
        name: teamResult.name,
      })
    );

    return transformStateDataToChartData(
      [ownData, ...teamData],
      combinedCategoriesToRender,
      combinedCategoriesTitles
    );
  }, [state, teamResults]);

  const textboxValue = useMemo(() => encodeTeamResult(state), [state]);

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

      <UxTeamResults
        setTeamResults={setTeamResults}
        teamResults={teamResults}
      />

      <h2>Gecombineerde resultaten per persoon</h2>
      <div className="h-[300px]">
        <CustomRadar
          data={combinedResults}
          keys={[
            "Eigen grafiek data",
            ...teamResults.filter(isValidTeamResult).map((v) => v.name),
          ]}
          indexBy="category"
        />
      </div>

      <h2>Resultaten per persoon</h2>
      <div className="h-[500px]">
        <CustomRadar
          data={data}
          keys={[
            "Eigen grafiek data",
            ...teamResults.filter(isValidTeamResult).map((v) => v.name),
          ]}
          indexBy="category"
          tooltipFormat={(v) => competencyTranslations[(v - 1) as Competency]}
        />
      </div>

      <h2>Gemiddelde resultaten team</h2>
      <div className="h-[500px]">
        <CustomRadar
          data={averageData}
          keys={["Gemiddeld"]}
          indexBy="category"
        />
      </div>
    </div>
  );
}
