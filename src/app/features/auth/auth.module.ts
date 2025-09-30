import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/services/auth/core.module';
import { RegisterComponent } from './pages/register/register.component';
import { ActiveComponent } from './pages/active/active.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ActiveComponent],
  imports: [
    CommonModule, 
    AuthRoutingModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {}
