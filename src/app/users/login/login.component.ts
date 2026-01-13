import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[!a-zA-Z0-9]+$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[!a-zA-Z0-9]+$')
      ])
    }
    );
  }

  serverMessage: string = '';

  isLogged(): boolean {
    return this.userService.isLogged();
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: () => {
          console.log('Logueado correctamente');
        },
        error: (err) => {
          console.error('Error al loguear:', err);
          this.serverMessage = err.error.msg;
        }
      }
      );
    }
  }
}
