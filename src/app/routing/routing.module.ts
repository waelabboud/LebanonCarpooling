import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from '../home/home.component';
import { AddCarpoolComponent } from '../add-carpool/add-carpool.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add', component: AddCarpoolComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }