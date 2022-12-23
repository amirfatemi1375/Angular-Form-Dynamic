import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMakerComponent } from './components/form-maker/form-maker.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicSelectComponent } from './components/dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicInputComponent } from './components/dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from './components/dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicTextareaComponent } from './components/dynamic-field/dynamic-textarea/dynamic-textarea.component';
import { DynamicCheckboxComponent } from './components/dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
@NgModule({
  declarations: [
    FormMakerComponent,
    DynamicFieldComponent,
    DynamicSelectComponent,
    DynamicInputComponent,
    DynamicRadioComponent,
    DynamicTextareaComponent,
    DynamicCheckboxComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
