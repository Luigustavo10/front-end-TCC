import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-itens-crud',
  templateUrl: './itens-crud.component.html',
  styleUrls: ['./itens-crud.component.css']
})
export class ItensCrudComponent implements OnInit {
 

  constructor(private router: Router) {}

  ngOnInit(): void {}

 navigateToItensCreate():void {
  this.router.navigate(['/itens/create'])
 }
  }

