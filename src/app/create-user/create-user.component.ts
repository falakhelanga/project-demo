import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../interface/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  isInValid: boolean = false;
  edit: boolean = false;
  id: string = '';
  title: string = 'Create User';

  constructor(
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.id = data.id;
      const users = this.userService.getUsers();
      const user: IUser = users.find((user: IUser) => user.Id === data.id);

      this.userForm.setValue({
        name: user?.Name || '',
        surname: user?.Surname || '',
        email: user?.Email || '',
        age: user?.Age || '',
      });
    });
    this.route.fragment.subscribe((data) => {
      if (data) {
        this.edit = true;
        this.title = `Editing User - ${this.id}`;
      }
    });

    this.changeDetector.markForCheck();
  }

  saveUser(): void {
    if (!this.userForm.valid) {
      this.isInValid = true;
      return;
    }

    this.userService.createUser(this.userForm, this.edit, this.id);
    this.router.navigate(['/users']);
  }

  async goBack(): Promise<void> {
    await this.router.navigate(['/users']);
  }
}
