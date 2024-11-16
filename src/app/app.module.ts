import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactsDetailPageComponent,
    LoginFormComponent,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
