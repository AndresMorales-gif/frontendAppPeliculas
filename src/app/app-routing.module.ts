import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NewMovieComponent } from './pages/new-movie/new-movie.component';
import { FormMovieComponent } from './components/form-movie/form-movie.component';

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