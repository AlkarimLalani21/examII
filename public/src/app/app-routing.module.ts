import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './homepage/create/create.component';
import { UpdateComponent } from './homepage/update/update.component';
import { DetailsComponent } from './homepage/details/details.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path: 'products', component: HomepageComponent},
  {path: 'products/new', component: CreateComponent},
  {path: 'products/:id', component: DetailsComponent},
  {path: 'products/:id/update', component: UpdateComponent},
  { path: '**', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
