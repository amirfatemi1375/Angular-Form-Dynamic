import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.scss'],
})
export class FormMakerComponent implements OnInit {
  @Output('sendFormData') sendFormData = new EventEmitter();
  @Input() model: any;
  public dynamicFormGroup: FormGroup;
  public fields: any[] = [];
  constructor() {}
  ngOnInit() {
    this.buildForm();
    this.changeFormValue();
  }
  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }
  changeFormValue() {
    this.dynamicFormGroup.valueChanges.subscribe((data) => {
      for (const field of Object.keys(data)) {
        this.model[field].value = data[field];
      }
      this.sendFormData.emit(this.dynamicFormGroup.controls);
    });
  }
  private getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators: any = this.addValidator(fieldProps.rules);
      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({
        ...fieldProps,
        fieldName: field,
      });
      this.fields = this.fields.sort(this.compareOrder);
    }

    return formGroupFields;
  }
  compareOrder(a: any, b: any) {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  }
  private addValidator(rules: any) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        //add more case for future.
      }
    });
    return validators;
  }
}
