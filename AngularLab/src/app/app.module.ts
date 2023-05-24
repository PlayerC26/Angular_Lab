import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewCantUsersComponent } from './components/view-cant-users/view-cant-users.component';
import { RegisterUserOkComponent } from './components/register-user-ok/register-user-ok.component';
import { RegisterUserFailComponent } from './components/register-user-fail/register-user-fail.component';
import { AgeMaxComponent } from './components/age-max/age-max.component';
import { AgeMinComponent } from './components/age-min/age-min.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    NewUserComponent,
    RegisterComponent,
    ViewCantUsersComponent,
    RegisterUserOkComponent,
    RegisterUserFailComponent,
    AgeMaxComponent,
    AgeMinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
