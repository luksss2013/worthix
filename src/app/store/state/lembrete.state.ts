import { ILembrete } from "../../models/lembrete.interface";

export interface ILembreteState {
  lembretes: ILembrete[];
}

export const initialLembreteState: ILembreteState = {
  lembretes: []
};
