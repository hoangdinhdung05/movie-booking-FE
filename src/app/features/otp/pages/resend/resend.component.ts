import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from 'src/app/core/services/otp/otp.service';

@Component({
  selector: 'app-resend-otp',
  templateUrl: './resend.component.html',
  styleUrls: ['./resend.component.css']
})
export class ResendOtpComponent {
  resendForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private otpService: OtpService) {
    this.resendForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onResend() {
    if (this.resendForm.invalid) return;

    const request = this.resendForm.value;
    this.otpService.resend(request).subscribe({
      next: () => {
        this.successMessage = 'Mã OTP mới đã được gửi vào email';
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Không thể gửi lại OTP';
        this.successMessage = null;
      }
    });
  }
}
