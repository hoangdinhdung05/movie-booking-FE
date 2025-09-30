import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/core/models/auth/register.module';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
      this.registerForm = this.fb.group({
          name: ['', [Validators.required]],
          username: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      })
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const request: RegisterRequest = this.registerForm.value;

    this.authService.register(request).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['/auth/login']);
        } else {
          this.errorMessage = res.message; // backend trả message
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Đăng ký thất bại';
      }
    });
  }
}
