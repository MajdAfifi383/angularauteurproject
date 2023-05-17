import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddAuteurComponent } from './views/add-auteur/add-auteur.component';
import { ListAuteurComponent } from './views/list-auteur/list-auteur.component';
import { UpdateAuteurComponent } from './views/update-auteur/update-auteur.component';

import { ByNationaliteComponent } from './views/by-nationalite/by-nationalite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddAuteurComponent,
    ListAuteurComponent,
    UpdateAuteurComponent,
   
    ByNationaliteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
