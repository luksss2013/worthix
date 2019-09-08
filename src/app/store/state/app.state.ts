import { RouterReducerState } from "@ngrx/router-store";
import { ILembreteState, initialLembreteState } from "./lembrete.state";

export interface IAppState {
  router?: RouterReducerState;
  lembretes: ILembreteState;
}

export const initialAppState: IAppState = {
  lembretes: initialLembreteState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
