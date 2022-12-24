import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormMakerComponent,
  DynamicFieldComponent,
  DynamicInputComponent,
  DynamicSelectComponent,
  DynamicRadioComponent,
  DynamicTextareaComponent,
  DynamicCheckboxComponent,
} from './components';
import { NumberDirective } from './directives/number-only/number.directive';
import { DynamicErrorComponent } from './components/form-maker/dynamic-error/dynamic-error.component';
@NgModule({
  declarations: [
    FormMakerComponent,
    DynamicFieldComponent,
    DynamicSelectComponent,
    DynamicInputComponent,
    DynamicRadioComponent,
    DynamicTextareaComponent,
    DynamicCheckboxComponent,
    NumberDirective,
    DynamicErrorComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormMakerComponent, NumberDirective],
})
export class SharedModule {}
