import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ILembrete } from "../models/lembrete.interface";

@Injectable()
export class LembreteService {
  lembreteEndpoint: string = `${environment.apiBaseUrl}/lembrete`;

  constructor(private http: HttpClient) {}

  //Retorna todos lembretes
  getAll(): Observable<ILembrete[]> {
    return this.http.get<ILembrete[]>(
      `${this.lembreteEndpoint}?_sort=id&_order=desc`
    );
  }

  //Insere um lembrete e retorna
  insert(lembrete: ILembrete): Observable<ILembrete> {
    return this.http.post<ILembrete>(this.lembreteEndpoint, lembrete);
  }

  //Altera um lembrete e retorna
  update(lembrete: ILembrete): Observable<ILembrete> {
    return this.http.put<ILembrete>(
      `${this.lembreteEndpoint}/${lembrete.id}`,
      lembrete
    );
  }
}
