import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from '../firebaase-storage.service.spec';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  public messaggeFile = 'No hay un archivo seleccionado';
  public nameFile = '';
  constructor(private firebaseStorage: FirebaseStorageService) { }

  ngOnInit(): void {
  }

  newMovie(){
    
  }

  onUpload(e){
    if (e.target.files.length > 0) {
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = 'upload/imagen.png';
      console.log(e.target.files[0]);
      //const ref = this.firebaseStorage.referenciaCloudStorage(filePath);
      //const task = this.firebaseStorage.tareaCloudStorage(filePath, file);  
    }
    
  }
}
