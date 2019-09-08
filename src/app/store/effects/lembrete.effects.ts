import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import {
  GetLembretesRequest,
  ELembreteActions,
  GetLembretesSuccess,
  InsertLembreteRequest,
  InsertLembreteSuccess,
  UpdateLembreteRequest,
  UpdateLembreteSuccess
} from "../actions/lembrete.actions";
import { switchMap, map } from "rxjs/operators";
import { LembreteService } from "../../services/lembrete.service";
import { ILembrete } from "src/app/models/lembrete.interface";
import { of } from "rxjs";

//Quando a ação correspondente for despachada, os Effects interceptarão
//e em caso de sucesso irão alterar a store através dos reducers
@Injectable()
export class LembreteEffects {
  @Effect()
  getLembretes$ = this.actions$.pipe(
    ofType<GetLembretesRequest>(ELembreteActions.GetLembretesRequest),
    switchMap(() => this.lembreteService.getAll()),
    switchMap((lembretes: ILembrete[]) =>
      of(new GetLembretesSuccess(lembretes))
    )
  );

  @Effect()
  insertLembrete$ = this.actions$.pipe(
    ofType<InsertLembreteRequest>(ELembreteActions.InsertLembreteRequest),
    switchMap(action => this.lembreteService.insert(action.payload)),
    map((lembrete: ILembrete) => new InsertLembreteSuccess(lembrete))
  );

  @Effect()
  updateLembrete$ = this.actions$.pipe(
    ofType<UpdateLembreteRequest>(ELembreteActions.UpdateLembreteRequest),
    switchMap(action => this.lembreteService.update(action.payload)),
    map((lembrete: ILembrete) => new UpdateLembreteSuccess(lembrete))
  );

  constructor(
    private lembreteService: LembreteService,
    private actions$: Actions
  ) {}
}
