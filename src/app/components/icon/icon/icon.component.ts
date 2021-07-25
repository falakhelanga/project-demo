import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Output() editUser = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.editUser.emit();
  }
}
