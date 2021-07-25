import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  // get all users
  getUsers(): IUser[] {
    const rawUsersData = localStorage.getItem('Users');
    return JSON.parse(rawUsersData ?? '[]');
  }

  // deleteuser
  deleteUser(user: IUser) {
    const filteredUsers: IUser[] = this.getUsers().filter(
      (currentUser) => currentUser.Id !== user.Id
    );

    localStorage.setItem('Users', JSON.stringify(filteredUsers));
  }

  // update and create user
  createUser(userForm: FormGroup, edit: boolean, id: string) {
    const user: IUser = {
      Id: Math.round(Math.random() * 1000000).toString(),
      Age: userForm.get('age')?.value,
      CreatedTime: new Date(),
      Email: userForm.get('email')?.value,
      Name: userForm.get('name')?.value,
      Surname: userForm.get('surname')?.value,
    };

    if (!edit) {
      const existingUsers: IUser[] = this.getUsers();

      existingUsers.push(user);
      localStorage.setItem('Users', JSON.stringify(existingUsers));
    } else {
      const existingUsers: IUser[] = this.getUsers();
      const existingUser = existingUsers.find((user) => user.Id === id);
      const existingUserIndex = existingUsers.findIndex(
        (user) => user === existingUser
      );
      existingUsers[existingUserIndex] = user;
      localStorage.setItem('Users', JSON.stringify(existingUsers));
    }
  }
}
