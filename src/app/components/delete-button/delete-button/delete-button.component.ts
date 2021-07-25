import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit {
  @Output() deleteUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.deleteUser.emit();
  }
}
