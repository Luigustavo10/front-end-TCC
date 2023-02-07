import { ItensService } from './../itens.service';
import { Itens } from './../itens.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens-read',
  templateUrl: './itens-read.component.html',
  styleUrls: ['./itens-read.component.css']
})
export class ItensReadComponent implements OnInit{

  Itens!: Itens[]
  displayedColumns = ['id', 'name', 'quantidade', 'action']

  constructor(private ItensService: ItensService) { }

  ngOnInit(): void {
    this.ItensService.read().subscribe(Itens =>{
      this.Itens = Itens
      console.log(Itens)
    })
    
  }

}
