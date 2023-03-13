import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from "primeng/button";
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from "primeng/card";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MultiSelectModule} from 'primeng/multiselect';



import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ActivityPipe } from './pipes/activity-pipe.pipe';
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import { HomeComponent } from './components/home/home.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {SidebarModule} from "primeng/sidebar";
import { PageForbidenComponent } from './components/page-forbiden/page-forbiden.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    ActivityPipe,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    PageForbidenComponent,

  ],
    imports: [
        MultiSelectModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        InputTextModule,
        RippleModule,
        CheckboxModule,
        ReactiveFormsModule,
        PasswordModule,
        ButtonModule,
        BrowserAnimationsModule,
        CardModule,
        HttpClientModule,
        TableModule,
        DialogModule,
        DropdownModule,
        TableModule,
        FormsModule,
        BreadcrumbModule,
        ToastrModule.forRoot(),
        SidebarModule
    ],
  // exports: [
  //   ActivityPipe
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
