import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';

import { IconModule } from '../components/icon/icon.module';
import { IconbtnModule } from '../components/iconbtn/iconbtn.module';
import { DeleteButtonModule } from '../components/delete-button/delete-button.module';
import { ButtonModule } from '../components/button/button.module';

const routes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IconModule,
    IconbtnModule,
    DeleteButtonModule,
    ButtonModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
