import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ItemDetalisComponent } from './item-detalis/item-detalis.component';

const routes: Routes = [
  //{path:'', redirectTo:'products',pathMatch:'full'},
  {path:'', component:ProductsComponent},
  {path:'products', component: ProductsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:"item-details",component:ItemDetalisComponent},
  {path:'**',component: NotfoundpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
