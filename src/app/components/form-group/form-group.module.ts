import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';
import { FieldErrorsModule } from '../field-errors/field-errors.module';

@NgModule({
  declarations: [FormGroupComponent],
  exports: [FormGroupComponent],
  imports: [CommonModule, FieldErrorsModule],
})
export class FormGroupModule {}
