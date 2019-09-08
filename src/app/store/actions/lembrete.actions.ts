import { Action } from "@ngrx/store";
import { ILembrete } from "src/app/models/lembrete.interface";

export enum ELembreteActions {
  GetLembretesRequest = "[Lembrete] Get Lembretes Request",
  GetLembretesSuccess = "[Lembrete] Get Lembretes Success",
  InsertLembreteRequest = "[Lembrete] Post Lembrete Request",
  InsertLembreteSuccess = "[Lembrete] Post Lembrete Success",
  UpdateLembreteRequest = "[Lembrete] Put Lembrete Request",
  UpdateLembreteSuccess = "[Lembrete] Put Lembrete Success"
}

export class GetLembretesRequest implements Action {
  public readonly type = ELembreteActions.GetLembretesRequest;
}

export class GetLembretesSuccess implements Action {
  public readonly type = ELembreteActions.GetLembretesSuccess;
  constructor(public payload: ILembrete[]) {}
}

export class InsertLembreteRequest implements Action {
  public readonly type = ELembreteActions.InsertLembreteRequest;
  constructor(public payload: ILembrete) {}
}

export class InsertLembreteSuccess implements Action {
  public readonly type = ELembreteActions.InsertLembreteSuccess;
  constructor(public payload: ILembrete) {}
}

export class UpdateLembreteRequest implements Action {
  public readonly type = ELembreteActions.UpdateLembreteRequest;
  constructor(public payload: ILembrete) {}
}

export class UpdateLembreteSuccess implements Action {
  public readonly type = ELembreteActions.UpdateLembreteSuccess;
  constructor(public payload: ILembrete) {}
}

export type LembreteActions =
  | GetLembretesRequest
  | GetLembretesSuccess
  | InsertLembreteRequest
  | InsertLembreteSuccess
  | UpdateLembreteRequest
  | UpdateLembreteSuccess;
