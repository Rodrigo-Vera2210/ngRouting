import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'hijo',
        component: HomePageComponent,
      }
    ],
    canActivate: [authGuard]
  },
  {
    path:'contacts',
    component:ContactsPageComponent,
    canActivate: [ authGuard ]
  },
  {
    path:'contacts/:id',
    component:ContactsDetailPageComponent
  },
  {
    path:'random',
    component:RandomContactPageComponent,
    canActivate: [authGuard]
  },
  {
    path:'**',
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
