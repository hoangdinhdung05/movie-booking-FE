import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-response.module';
import { LoginRequest } from '../models/auth/login.module';
import { AuthResponseData } from '../models/auth/auth.module';
import { RegisterRequest } from '../models/auth/register.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<BaseResponse<AuthResponseData>> {
    return this.http.post<BaseResponse<AuthResponseData>>(
      `${this.apiUrl}/login`,
      request
    );
  }

  register(request: RegisterRequest): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(
      `${this.apiUrl}/register`,
      request
    );
  }

}
