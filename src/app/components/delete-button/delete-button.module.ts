import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [DeleteButtonComponent],
  exports: [DeleteButtonComponent],
  imports: [CommonModule],
})
export class DeleteButtonModule {}