import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Auteur } from 'src/app/models/auteur';
import { AuteurService } from 'src/app/services/auteur.service';

@Component({
  selector: 'app-add-auteur',
  templateUrl: './add-auteur.component.html',
  styleUrls: ['./add-auteur.component.css']
})
export class AddAuteurComponent implements OnInit {
  auteur?: Auteur = new Auteur();
  constructor(private auteurService:AuteurService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auteurService.addAuteur(this.auteur).subscribe(
      data=> this.goTOList(),
      error=> console.log(error)
    );
  }

  goTOList(){
    this.router.navigate(['/list-auteur']);
  }

}
