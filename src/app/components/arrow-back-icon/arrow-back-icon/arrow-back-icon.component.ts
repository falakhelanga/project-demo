import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow-back-icon',
  templateUrl: './arrow-back-icon.component.html',
  styleUrls: ['./arrow-back-icon.component.scss'],
})
export class ArrowBackIconComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.btnClick.emit();
  }
}
