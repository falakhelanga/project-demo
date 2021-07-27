import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';

import { ButtonModule } from '../components/button/button.module';

import { IconModule } from '../components/icon/icon.module';

const routes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UsersComponent],
  imports: [
    IconModule,
    RouterModule.forChild(routes),
    CommonModule,

    ButtonModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
