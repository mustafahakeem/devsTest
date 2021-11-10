import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path : '' ,
    redirectTo : 'login' ,
    pathMatch : 'full'
  },
  {
    path:'login', component: LoginPageComponent,
  },
  {
    path:'table', component: TablePageComponent,
    canActivate : [AuthGuard],
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TablePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
