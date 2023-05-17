import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Auteur } from 'src/app/models/auteur';
import { AuteurService } from 'src/app/services/auteur.service';

@Component({
  selector: 'app-list-auteur',
  templateUrl: './list-auteur.component.html',
  styleUrls: ['./list-auteur.component.css']
})
export class ListAuteurComponent implements OnInit {

  welcome: string = 'List of auteurs'
  auteurs?: Observable<Auteur[]>;
  constructor(private auteurservice: AuteurService, private router: Router) { }

  ngOnInit(): void {
    this.auteurs = this.auteurservice.getList();
  }

  deleteAuteur(id: any) {
    if (confirm("Are you sure delete this product?")) {
      this.auteurservice.deleteAuteur(id).subscribe(

        data => this.auteurs = this.auteurservice.getList()
        , error => console.log(error)
      );
    }
  }

  update(id: any) {
    this.router.navigate(['update-auteur', id]);
  }
}
