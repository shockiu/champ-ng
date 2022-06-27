import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  get email() {return this.registerForm.get('email')}
  get nickname() {return this.registerForm.get('nickname')}
  get password() {return this.registerForm.get('password')}

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
  }

  redirect() {
    this.router.navigate(['/auth/login']);
  }

}
