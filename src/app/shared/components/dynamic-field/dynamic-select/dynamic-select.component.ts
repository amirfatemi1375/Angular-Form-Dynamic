import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
})
export class DynamicSelectComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = this.formgroupDirective.control;
  }
}
