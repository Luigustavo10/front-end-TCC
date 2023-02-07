import { Itens } from './../itens.model';
import { ActivatedRoute, Router } from "@angular/router";
import { ItensService } from "./../itens.service";
import { Component, OnInit } from "@angular/core";



@Component({
  selector: "app-itens-update",
  templateUrl: "./itens-update.component.html",
  styleUrls: ["./itens-update.component.css"],
})
export class ItensUpdateComponent implements OnInit {
 
  
  itens: Itens = {
    name: "",
    quantidade: Number(null),
  };

  constructor(
    private ItensService: ItensService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ItensService.readById(id!).subscribe;((itens: Itens) => {
      this.itens = itens
    });
  }

  updateItens(): void {}

  cancel(): void {
    this.router.navigate(["/Itens"]);
  }
}
