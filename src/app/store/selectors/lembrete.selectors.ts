import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ILembreteState } from "../state/lembrete.state";

const selectLembretes = (state: IAppState) => state.lembretes;

export const selectLembretesList = createSelector(
  selectLembretes,
  (state: ILembreteState) => state.lembretes
);
