import { State } from "../state/root-state";

declare module "react-redux" {
  export function useSelector<TState, TSelected>(
    selector: (state: State) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}
