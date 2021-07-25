import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowBackComponent } from './arrow-back/arrow-back.component';

@NgModule({
  declarations: [ArrowBackComponent],
  exports: [ArrowBackComponent],
  imports: [CommonModule],
})
export class ArrowBackModule {}
