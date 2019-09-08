import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ILembrete } from "src/app/models/lembrete.interface";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";
import {
  InsertLembreteSuccess,
  InsertLembreteRequest,
  GetLembretesRequest,
  UpdateLembreteRequest
} from "src/app/store/actions/lembrete.actions";
@Component({
  selector: "app-lembrete-dialog",
  templateUrl: "./lembrete-dialog.component.html",
  styleUrls: ["./lembrete-dialog.component.scss"]
})
export class LembreteDialogComponent implements OnInit {
  formularioLembrete: FormGroup;

  prioridades = [
    {
      value: 1,
      descricao: "Baixa"
    },
    {
      value: 2,
      descricao: "Média"
    },
    {
      value: 3,
      descricao: "Alta"
    }
  ];

  ngOnInit() {
    this.createLembreteForm();
  }

  onNoClick(): void {
    this.modalLembrete.close();
  }

  createLembreteForm() {
    if (this.data.lembrete) {
      this.formularioLembrete = this.formBuilder.group({
        prioridade: [this.data.lembrete.prioridade, Validators.required],
        titulo: [
          this.data.lembrete.titulo,
          [Validators.required, Validators.maxLength(25)]
        ],
        conteudo: [this.data.lembrete.conteudo, Validators.required]
      });
    } else {
      this.formularioLembrete = this.formBuilder.group({
        prioridade: ["", Validators.required],
        titulo: ["", [Validators.required, Validators.maxLength(25)]],
        conteudo: ["", Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.data.lembrete) {
      this.store.dispatch(
        new UpdateLembreteRequest({
          id: this.data.lembrete.id,
          ...this.formularioLembrete.value
        })
      );
    } else {
      this.store.dispatch(
        new InsertLembreteRequest(this.formularioLembrete.value)
      );
    }

    this.onNoClick();
  }

  constructor(
    private formBuilder: FormBuilder,
    public modalLembrete: MatDialogRef<LembreteDialogComponent>,
    private store: Store<IAppState>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.createLembreteForm();
  }
}
