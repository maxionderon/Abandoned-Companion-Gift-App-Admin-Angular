import { Component, OnInit, Input } from '@angular/core';
import { Companion } from 'src/app/model/companion';

@Component({
  selector: 'app-companion-details',
  templateUrl: './companion-details.component.html',
  styleUrls: ['./companion-details.component.css']
})
export class CompanionDetailsComponent implements OnInit {

  @Input()
  companion: Companion;

  constructor() { }

  ngOnInit() {
  }

}
