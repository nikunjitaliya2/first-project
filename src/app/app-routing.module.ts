import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SellerAuthComponent} from "./components/seller-auth/seller-auth.component";
import {SellerHomeComponent} from "./components/seller-home/seller-home.component";
import {AuthGuard} from "./guards/auth.guard";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
