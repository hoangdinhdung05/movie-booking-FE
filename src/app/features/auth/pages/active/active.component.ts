import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VerifyOtpRequest } from 'src/app/core/models/otp/verify-otp.module';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {
  activeForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
      this.activeForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        otp: ['', [Validators.required]]
      })
  }

  onSubmit() {
    if (this.activeForm.invalid) return;

    const request: VerifyOtpRequest = this.activeForm.value;
    this.authService.active(request).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['/auth/login']);
        } else {
          this.errorMessage = res.message;
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Active account chưa thành công';
      }
    });
  }
}
