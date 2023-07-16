import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-formControlName',
  templateUrl: './basic-formControlName.component.html',
  styleUrls: ['./basic-formControlName.component.scss'],
})
export class BasicFormControlNameComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-formControlName.component.html').default; // DEMO IGNORE
  component = require('!!raw-loader!./basic-formControlName.component.ts').default; // DEMO IGNORE
  options = {
    lang: 'en',
    format: 'yyyy-MM-dd'
  };
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      myDate: [{ value: new Date(), disabled: false }]
    });
  }

  ngOnInit(): void { }

}
