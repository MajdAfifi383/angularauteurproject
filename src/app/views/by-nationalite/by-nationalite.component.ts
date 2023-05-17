import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Auteur } from 'src/app/models/auteur';
import { AuteurService } from 'src/app/services/auteur.service';

@Component({
  selector: 'app-by-nationalite',
  templateUrl: './by-nationalite.component.html',
  styleUrls: ['./by-nationalite.component.css']
})
export class ByNationaliteComponent implements OnInit {

  nationalite?: string;
  auteur?: Observable<Auteur[]>;
  
  constructor(private service: AuteurService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auteur =this.service.getAuteurNat(this.nationalite);
  }

  

}