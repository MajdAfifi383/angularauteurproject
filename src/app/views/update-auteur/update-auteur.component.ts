import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Auteur } from 'src/app/models/auteur';
import { AuteurService } from 'src/app/services/auteur.service';

@Component({
  selector: 'app-update-auteur',
  templateUrl: './update-auteur.component.html',
  styleUrls: ['./update-auteur.component.css']
})
export class UpdateAuteurComponent implements OnInit{

  id?: number
  auteur: Auteur = new Auteur();
  constructor(private auteurservice: AuteurService, private sniper: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.sniper.snapshot.params['id'];
    this.auteurservice.getAuteur(this.id).subscribe(

      data => this.auteur = data
      , error => console.log(error)
    );
  }

  onSubmit() {
    this.auteurservice.updateAuteur(this.id, this.auteur).subscribe(
      data => this.goToList(),
      error => console.log(error)
    );
  }

  goToList() {
    this.router.navigate(['list-auteur']);
  }
}
