import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/Auth/auth.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:AuthComponent},
  {path:'home/:username',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
