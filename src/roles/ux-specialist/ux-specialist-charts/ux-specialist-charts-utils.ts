import {
  categoriesTitles,
  categoriesToRender,
} from "./ux-specialist-charts-meta";
import { v4 as uuid } from "uuid";
import {
  ChartData,
  StateWithName,
  TeamResult,
} from "./ux-specialist-charts.interface";
import { createInitialState, State } from "../../../state";
import { useEffect } from "react";

export const keysToCheck = ["name", "value"];

export function transformStateDataToChartData(
  states: StateWithName[]
): ChartData[] {
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

export function getAverageStateData<T extends Record<string, number>>(
  states: T[]
): T & { name: string } {
  const startState = (Object.keys(states[0]) as (keyof T)[]).reduce(
    (zeroState, key) => {
      // @ts-ignore
      zeroState[key] = 0;
      return zeroState;
    },
    {} as T
  );

  const total = states.reduce((total, item) => {
    (Object.keys(item) as (keyof T)[]).forEach((stateKey) => {
      // @ts-ignore
      total[stateKey] += item[stateKey] / states.length;
    });
    return total;
  }, startState);

  return {
    ...total,
    name: "Gemiddeld",
  };
}

export function isValidTeamResult(result: TeamResult): boolean {
  if (!result.name) {
    return false;
  }
  try {
    JSON.parse(atob(result.value));
    return true;
  } catch (error) {
    return false;
  }
}

export function createNewTeamResult(): TeamResult {
  return { key: uuid(), value: "", name: "" };
}

export function encodeTeamResult(result: State): string {
  return btoa(JSON.stringify(result));
}

export function decodeTeamResult(result: string): State {
  return JSON.parse(atob(result));
}

export function encodedTeamResultsToStates(teamResults: TeamResult[]): State[] {
  return teamResults
    .filter(isValidTeamResult)
    .map((teamResult) => decodeTeamResult(teamResult.value));
}

export function encodedTeamResultsToStatesWithNames(
  teamResults: TeamResult[]
): StateWithName[] {
  return teamResults.filter(isValidTeamResult).map((teamResult) => ({
    ...decodeTeamResult(teamResult.value),
    name: teamResult.name,
  }));
}

export function usePlusOneInputManager<T extends Record<string, any>>(
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>,
  keys: string[],
  newStateItemGenerator: () => T
): void {
  /**
   * Add a new result to the array of results if something is written in the last input name or data
   */
  useEffect(() => {
    const lastResult = state[state.length - 1];
    if (keys.some((key) => !!lastResult[key])) {
      setState((state) => [...state, newStateItemGenerator()]);
    }
  }, [state, keys, newStateItemGenerator, setState]);

  /**
   * Remove non-last empty results
   */
  useEffect(() => {
    const newResults = state.filter(
      (arrayItem, i) =>
        keys.some((key) => !!arrayItem[key]) || i === state.length - 1
    );
    if (newResults.length !== state.length) {
      setState(newResults);
    }
  }, [state, keys, setState]);
}
