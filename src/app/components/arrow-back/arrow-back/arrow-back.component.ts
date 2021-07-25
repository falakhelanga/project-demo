import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow-back',
  templateUrl: './arrow-back.component.html',
  styleUrls: ['./arrow-back.component.scss'],
})
export class ArrowBackComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.btnClick.emit();
  }
}
