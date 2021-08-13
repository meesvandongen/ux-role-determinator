import { v4 as uuid } from "uuid";
import {
  ChartData,
  StateWithName,
  TeamResult,
} from "./ux-specialist-charts.interface";
import { useEffect } from "react";
import { AssessmentState } from "../../../state/assessment.types";

export const keysToCheck = ["name", "value"];

export function transformStateDataToChartData(
  states: Record<string, number | string>[],
  categories: string[],
  categoriesTitles: Record<string, string>
): ChartData[] {
  return categories.map((category) => {
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
      // @ts-expect-error: While this is not entirely type-safe inside this function, the output can be seen as type-safe.
      zeroState[key] = 0;
      return zeroState;
    },
    {} as T
  );

  const total = states.reduce((total, item) => {
    (Object.keys(item) as (keyof T)[]).forEach((stateKey) => {
      // @ts-expect-error: While this is not entirely type-safe inside this function, the output can be seen as type-safe.
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

export function encodeTeamResult(result: AssessmentState['uxSpecialist']): string {
  return btoa(JSON.stringify(result));
}

export function decodeTeamResult(result: string): AssessmentState['uxSpecialist'] {
  return JSON.parse(atob(result));
}

export function encodedTeamResultsToStates(teamResults: TeamResult[]): AssessmentState['uxSpecialist'][] {
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

export function combineStateVariablesIntoCategories(
  state: AssessmentState["uxSpecialist"]
) {
  const visualInteractionDesigner =
    state.graphics * 0.25 +
    state.prototyping * 0.25 +
    state.uiTheory * 0.25 +
    state.ui * 0.25;

  const userResearcher =
    state.dataAnalysis * 0.25 +
    state.researchEvangelist * 0.25 +
    state.conductingResearch * 0.25 +
    state.definingResearch * 0.25;

  const uxWriter =
    state.campaigning * 0.25 +
    state.contentManagement * 0.25 +
    state.contentStrategy * 0.25 +
    state.contentWriting * 0.25;

  const creativeDeveloper =
    state.designImplementation * 0.33 +
    state.richInteraction * 0.33 +
    state.codeUxAdvocate * 0.33;
  return {
    visualInteractionDesigner,
    userResearcher,
    uxWriter,
    creativeDeveloper,
  };
}
