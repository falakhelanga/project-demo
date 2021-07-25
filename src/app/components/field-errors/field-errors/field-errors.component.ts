import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
})
export class FieldErrorsComponent implements OnInit {
  @Input() userForm!: FormGroup;
  @Input() name!: string;
  constructor() {}

  ngOnInit(): void {}
}
