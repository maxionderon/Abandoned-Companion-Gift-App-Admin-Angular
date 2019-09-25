import { Component, OnInit, Input, ElementRef, ViewChild, Output } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-affiliation-element',
  templateUrl: './affiliation-element.component.html',
  styleUrls: ['./affiliation-element.component.css']
})
export class AffiliationElementComponent implements OnInit {

  @Input('affiliation')
  affiliation: Affiliation;

  
  eventDeleteAffiliation = new EventEmitter();

  
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

    this.affiliationField.nativeElement.focus();

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

  }
  

}
