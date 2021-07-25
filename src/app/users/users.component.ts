import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';

import { Router } from '@angular/router';
import { IUser } from '../interface/user';

import * as dayjs from 'dayjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.changeDetector.markForCheck();
  }

  async createNewUser(): Promise<void> {
    await this.router.navigate(['/create-user']);
  }

  getFormattedCreatedTime(time: Date): string {
    // TODO: turn this into an Angular PIPE
    return dayjs(time).format('HH:mm:ss DD MMM YYYY');
  }

  async editUser(user: IUser): Promise<void> {
    await this.router.navigate(['/create-user'], {
      queryParams: {
        id: user.Id,
      },
      fragment: 'edit',
    });
  }
  async deleteUser(user: IUser): Promise<void> {
    this.userService.deleteUser(user);

    this.users = this.userService.getUsers();
  }
}
