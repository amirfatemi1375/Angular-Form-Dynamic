import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-dynamic-textarea',
  templateUrl: './dynamic-textarea.component.html',
  styleUrls: ['./dynamic-textarea.component.scss'],
})
export class DynamicTextareaComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = this.formgroupDirective.control;
  }
}
