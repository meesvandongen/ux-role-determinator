import { ResponsiveRadar } from "@nivo/radar";
import React, { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Competency, competencyTranslations } from "../../../competency";
import type {
  TeamResult,
} from "./ux-specialist-charts.interface";
import {
  createNewTeamResult,
  encodedTeamResultsToStatesWithNames,
  encodeTeamResult,
  isValidTeamResult,
  keysToCheck,
  transformStateDataToChartData,
  usePlusOneInputManager,
} from "./ux-specialist-charts-utils";

export function UxSpecialistCharts(): JSX.Element {
  const state = useSelector((state) => state);

  const [teamResults, setTeamResults] = useState<TeamResult[]>(() => [
    createNewTeamResult(),
  ]);

  const data = useMemo(() => {
    const ownData = { ...state, name: "Eigen grafiek data" };
    const teamData = encodedTeamResultsToStatesWithNames(teamResults);

    return transformStateDataToChartData([ownData, ...teamData]);
  }, [state, teamResults]);

  usePlusOneInputManager(
    teamResults,
    setTeamResults,
    keysToCheck,
    createNewTeamResult
  );

  const textboxValue = useMemo(() => encodeTeamResult(state), [state]);

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
            "Eigen grafiek data",
            ...teamResults.filter(isValidTeamResult).map((v) => v.name),
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
