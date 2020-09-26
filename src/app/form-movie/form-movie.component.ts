import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../firebaase-storage.service.spec';
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>; 

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private firebaseStorage: FirebaseStorageService, private router: Router) { }

  movieForm = this.formBuilder.group({
    title : ['', Validators.required],
    description : [''],
    kind : ['comedia'],
    serieOrMovie : ['0'],
    launching : [,Validators.required],
    image: []
  });

  ngOnInit(): void {
  }
  onUpload(e){
    if (e.target.files.length > 0) {
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = 'uploads/image_'+id;
      const ref = this.firebaseStorage.referenciaCloudStorage(filePath);
      const task = this.firebaseStorage.tareaCloudStorage(filePath, file);  
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();      
    }    
    
  }
  newMovie(){
    if (!this.movieForm.valid) {
      alert('Alguna regla de validacion no fue cumpida');
      return;
    }
    this.urlImage.subscribe(val => {
      this.movieForm.value.image = val;
      console.log(this.movieForm.value)
      this.http.post('http://localhost:8080/movie/save', this.movieForm.value, {responseType:'text'}).subscribe((resp:any) => {
        console.log(JSON.parse(resp));
        this.router.navigate(['/prueba']);
      });
    });    
  }
  
}
