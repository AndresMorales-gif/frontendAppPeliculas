import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { FormMovieComponent } from './form-movie/form-movie.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'admin', component:AdminComponent},
    {path:'admin/nueva-pelicula', component:NewMovieComponent},
    {path:'prueba', component:FormMovieComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}