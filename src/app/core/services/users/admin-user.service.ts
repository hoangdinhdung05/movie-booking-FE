import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../../models/base-response.module';
import { Observable } from 'rxjs';
import { PageResponse } from '../../models/page-response.module';
import { UserResponse } from '../../models/users/user-response.module';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private apiUrl = `${environment.apiUrl}/admin/users`;

  constructor(private http: HttpClient) { }

  getAllUsers(page: number = 0, size: number = 10): Observable<BaseResponse<PageResponse<UserResponse>>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<BaseResponse<PageResponse<UserResponse>>>(this.apiUrl, { params });
  }

}
