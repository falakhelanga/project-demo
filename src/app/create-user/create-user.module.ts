import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrowBackModule } from '../components/arrow-back/arrow-back.module';
import { CreateUserComponent } from './create-user.component';
import { ButtonModule } from '../components/button/button.module';

const routes: Routes = [{ path: '', component: CreateUserComponent }];

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArrowBackModule,
    ButtonModule,
  ],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
