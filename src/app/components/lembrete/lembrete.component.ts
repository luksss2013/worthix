import { Component, ViewChild, OnInit } from "@angular/core";
import { ILembrete } from "src/app/models/lembrete.interface";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog
} from "@angular/material";
import { LembreteDialogComponent } from "./dialog/lembrete-dialog.component";
import { IAppState } from "src/app/store/state/app.state";
import { Store } from "@ngrx/store";
import { selectLembretesList } from "src/app/store/selectors/lembrete.selectors";
import { GetLembretesRequest } from "src/app/store/actions/lembrete.actions";

@Component({
  selector: "app-lembrete",
  templateUrl: "./lembrete.component.html",
  styleUrls: ["./lembrete.component.scss"]
})
export class LembreteComponent implements OnInit {
  public displayedColumns: string[] = [
    "prioridade",
    "titulo",
    "conteudo",
    "action"
  ];
  public lembretesDataSource = new MatTableDataSource<ILembrete>();
  private lembretes$ = this.store.select(selectLembretesList);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private store: Store<IAppState>) {}

  ngOnInit() {
    this.getAllLembretes();
    this.lembretesDataSource.paginator = this.paginator;
  }

  filtrarConteudo(conteudo: string): void {
    this.lembretesDataSource.filter = conteudo.trim().toLocaleLowerCase();

    if (this.lembretesDataSource.paginator) {
      this.lembretesDataSource.paginator.firstPage();
    }
  }

  openDialog(lembrete?): void {
    this.dialog.open(LembreteDialogComponent, {
      width: "250px",
      data: { lembrete }
    });
  }

  getAllLembretes(): void {
    this.store.dispatch(new GetLembretesRequest());

    this.lembretes$.subscribe(lembretes => {
      this.lembretesDataSource.data = lembretes as ILembrete[];
    });
  }
}
