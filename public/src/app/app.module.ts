import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { navbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        navbarComponent,
        loginComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }