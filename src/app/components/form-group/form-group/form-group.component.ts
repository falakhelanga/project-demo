import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormGroupComponent),
      multi: true,
    },
  ],
})
export class FormGroupComponent implements ControlValueAccessor {
  @Input() userForm!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  public value!: string;
  public changed!: (value: string) => void;
  public touched!: () => void;
  public isDisabled!: boolean;

  constructor() {}

  writeValue(value: string): void {
    this.value = value;
  }
  onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }
  registerOnChange(fn: (_: any) => void): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
