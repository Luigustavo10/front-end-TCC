import { Itens } from './itens.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root",
})
export class ItensService {
  
  baseUrl =  "http://localhost:3000/itens"
  
  constructor(private snackBar: MatSnackBar, private http : HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(itens: Itens ): Observable<Itens> {
    return this.http.post<Itens>(this.baseUrl, itens)
  }
  read():Observable<Itens[]>{
    return this.http.get<Itens[]>(this.baseUrl)
  }

  readById(id: string): Observable<Itens>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Itens>(url)
  }

  update(itens: Itens): Observable<Itens>{
    const url = `${this.baseUrl}/${itens.id}`
    return this.http.put<Itens>(url, itens)
  }
}
