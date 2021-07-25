import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  templateUrl: './trash-icon.component.html',
  styleUrls: ['./trash-icon.component.scss'],
})
export class TrashIconComponent implements OnInit {
  @Output() deleteUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.deleteUser.emit();
  }
}
