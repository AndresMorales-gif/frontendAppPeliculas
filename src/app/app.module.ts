import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NewMovieComponent } from './pages/new-movie/new-movie.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopOneMovieComponent } from './components/top-one-movie/top-one-movie.component';
import { TopOthersMovieComponent } from './components/top-others-movie/top-others-movie.component';
import { CarouselMoviesComponent } from './components/carousel-movies/carousel-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    NewMovieComponent,
    FormMovieComponent,
    TopOneMovieComponent,
    TopOthersMovieComponent,
    CarouselMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
