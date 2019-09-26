import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';

@Component({
  selector: 'app-affiliation-element',
  templateUrl: './affiliation-element.component.html',
  styleUrls: ['./affiliation-element.component.css']
})
export class AffiliationElementComponent implements OnInit {

  @Input('affiliation')
  affiliation: Affiliation;

  @Output()
  eventDeleteAffiliation = new EventEmitter();

  @Output()
  eventUpdateAffiliation = new EventEmitter();

  @ViewChild('kek', {static: false})
  affiliationField: ElementRef;

  readonly: boolean = true;
  defaultOptionsDisabled: boolean = false;
  showModOptions: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  
  editModeAffiliation(): void {

    this.readonly = false;
    this.defaultOptionsDisabled = true;
    this.showModOptions = true;

    this.affiliationField.nativeElement.select();

  }

  abortModeAffiliation(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

  }

  updateAffiliation(): void {

    this.readonly = true;
    this.defaultOptionsDisabled = false;
    this.showModOptions = false;

    this.affiliation.name = this.affiliationField.nativeElement.value;

    this.eventUpdateAffiliation.emit(this.affiliation );

  }

  deleteAffiliation(): void {

    this.eventDeleteAffiliation.emit(this.affiliation);

  }
  

}
