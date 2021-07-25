import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  // deleteuser
  deleteUser(user: IUser) {
    const rawUsersData = localStorage.getItem('Users');
    const existingUsers: IUser[] = JSON.parse(rawUsersData ?? '[]');
    const filteredUsers: IUser[] = existingUsers.filter(
      (currentUser) => currentUser.Id !== user.Id
    );

    localStorage.setItem('Users', JSON.stringify(filteredUsers));
  }

  // get all users
  getUsers() {
    const rawUsersData = localStorage.getItem('Users');
    return JSON.parse(rawUsersData ?? '[]');
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
      const rawUsersData = localStorage.getItem('Users');
      const existingUsers: IUser[] = JSON.parse(rawUsersData ?? '[]');

      existingUsers.push(user);
      localStorage.setItem('Users', JSON.stringify(existingUsers));
    } else {
      const rawUsersData = localStorage.getItem('Users');
      const existingUsers: IUser[] = JSON.parse(rawUsersData ?? '[]');
      const existingUser = existingUsers.find((user) => user.Id === id);
      const existingUserIndex = existingUsers.findIndex(
        (user) => user === existingUser
      );
      existingUsers[existingUserIndex] = user;
      localStorage.setItem('Users', JSON.stringify(existingUsers));
    }
  }
}
