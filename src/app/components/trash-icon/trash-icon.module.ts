import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashIconComponent } from './trash-icon/trash-icon.component';

@NgModule({
  declarations: [TrashIconComponent],
  exports: [TrashIconComponent],
  imports: [CommonModule],
})
export class TrashIconModule {}
