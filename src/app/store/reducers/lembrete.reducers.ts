import { initialLembreteState } from "../state/lembrete.state";
import { LembreteActions, ELembreteActions } from "../actions/lembrete.actions";
import { ILembreteState } from "../state/lembrete.state";

export const lembreteReducers = (
  state = initialLembreteState,
  action: LembreteActions
): ILembreteState => {
  switch (action.type) {
    case ELembreteActions.GetLembretesSuccess: {
      return {
        ...state,
        lembretes: action.payload
      };
    }
    case ELembreteActions.InsertLembreteSuccess: {
      return {
        ...state,
        lembretes: [action.payload, ...state.lembretes]
      };
    }
    case ELembreteActions.UpdateLembreteSuccess: {
      return {
        ...state,
        lembretes: state.lembretes.map(lembrete =>
          lembrete.id == action.payload.id ? action.payload : lembrete
        )
      };
    }
    default: {
      return state;
    }
  }
};
