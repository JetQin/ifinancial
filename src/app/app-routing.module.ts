import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { TabbarComponent } from './tabbar/tabbar.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'land', component: TabbarComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }