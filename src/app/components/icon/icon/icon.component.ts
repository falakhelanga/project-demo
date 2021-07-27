import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.btnClick.emit();
  }
}
