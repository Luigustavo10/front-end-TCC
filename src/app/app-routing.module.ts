import { ItensUpdateComponent } from './components/itens/itens-update/itens-update.component';
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItensCreateComponent } from "./components/itens/itens-create/itens-create.component";

import { HomeComponent } from "./views/home/home.component";
import { ItensCrudComponent } from "./views/itens-crud/itens-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Itens",
    component: ItensCrudComponent
  },
  {
    path: "itens/create",
    component: ItensCreateComponent
  },
  {
    path: "itens/update/:id",
    component: ItensUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
