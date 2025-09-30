import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/core/models/users/user-response.module';
import { AdminUserService } from 'src/app/core/services/users/admin-user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserResponse[] = [];
  page = 0;
  size = 3;
  totalPages = 0;

  constructor(private adminUserService: AdminUserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminUserService.getAllUsers(this.page, this.size).subscribe({
      next: (res) => {
        this.users = res.data.content; 
        this.totalPages = res.data.totalPages;
        console.log('Users:', this.users);
      },
      error: (err) => {
        console.error('API error', err);
      }
    });
  }

  nextPage(): void {
    if (this.page + 1 < this.totalPages) {
      this.page++;
      this.loadUsers();
    }
  }

  prevPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadUsers();
    }
  }
}
