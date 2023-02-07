import { Itens } from './../itens.model';
import { ItensService } from "./../itens.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-itens-create",
  templateUrl: "./itens-create.component.html",
  styleUrls: ["./itens-create.component.css"],
})
export class ItensCreateComponent implements OnInit {
 
 itens: Itens = {
  name: '',
 quantidade: 0
 }
  constructor(private ItensService: ItensService,
    private router : Router) {}

  ngOnInit(): void {
  }

  createItens(): void{
this.ItensService.create(this.itens).subscribe(() => {
this.ItensService.showMessage('Item Salvo')
this.router.navigate(['/Itens'])
  })
}

  cancel(): void {
    this.router.navigate(['/Itens'])

}
}
