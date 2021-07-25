import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';

import { ButtonModule } from '../components/button/button.module';
import { TrashIconModule } from '../components/trash-icon/trash-icon.module';
import { EditIconModule } from '../components/edit-icon/edit-icon.module';

const routes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

    EditIconModule,
    ButtonModule,
    TrashIconModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
