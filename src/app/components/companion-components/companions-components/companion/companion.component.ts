import { Component, OnInit } from '@angular/core';
import { CompanionService } from 'src/app/services/companion.service';
import { Companion } from 'src/app/model/companion';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  companions: Companion[] = [];

  constructor(private companionService: CompanionService ) { }

  ngOnInit() {

    this.getCompanions();

  }

  getCompanions(): void  {

    this.companionService.getCompanions().subscribe( companions => {

      this.companions = companions

    });

  }

  deleteCompanion(companion: Companion): void {

    this.companionService.deleteCompanion(companion). subscribe( companions => {

      this.companions = companions;

    });

  }

}
