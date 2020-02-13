import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './pages/no-content';
import { HomeComponent } from './pages/home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/:firstName', component: HomeComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
