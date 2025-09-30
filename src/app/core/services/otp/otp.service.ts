import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../models/base-response.module';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private apiUrl = `${environment.apiUrl}/otp`;

  constructor(private http: HttpClient) { }
}
