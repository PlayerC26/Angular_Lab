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
import { AgeMaxComponent } from './components/age-max/age-max.component';

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
    AgeMaxComponent
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
