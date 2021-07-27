import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUserComponent } from './create-user.component';
import { ButtonModule } from '../components/button/button.module';
import { FormGroupModule } from '../components/form-group/form-group.module';

import { IconModule } from '../components/icon/icon.module';

const routes: Routes = [{ path: '', component: CreateUserComponent }];

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FormGroupModule,

    IconModule,
  ],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
