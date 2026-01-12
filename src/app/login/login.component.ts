import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
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

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: () => {
          console.log('Logueado correctamente');
          this.router.navigate(['/article-list']);
        },
        error: (err) => {
          console.error('Error al loguear:', err);
        }
      }
      );
    }
  }
}
