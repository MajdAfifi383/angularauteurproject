import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuteurComponent } from './views/list-auteur/list-auteur.component';
import { AddAuteurComponent } from './views/add-auteur/add-auteur.component';
import { UpdateAuteurComponent } from './views/update-auteur/update-auteur.component';
import { ByNationaliteComponent } from './views/by-nationalite/by-nationalite.component';
const routes: Routes = [

  {path:"list-auteur",component:ListAuteurComponent},
  {path:"add-auteur",component:AddAuteurComponent},
  {path:"update-auteur/:id",component:UpdateAuteurComponent},
  {path:"by-nationalite",component:ByNationaliteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
