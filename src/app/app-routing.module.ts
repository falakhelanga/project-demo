import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(({ UsersModule }) => UsersModule),
  },
  {
    path: 'create-user',
    loadChildren: () =>
      import('./create-user/create-user.module').then(
        ({ CreateUserModule }) => CreateUserModule
      ),
  },
  {
    path: '**',
    redirectTo: '/users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
