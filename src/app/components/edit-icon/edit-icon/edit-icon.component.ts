import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.scss'],
})
export class EditIconComponent implements OnInit {
  @Output() editUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.editUser.emit();
  }
}
