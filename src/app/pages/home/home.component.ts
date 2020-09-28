import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private headersApp;
  public movies;
  private body = {'data':{
        'nombreUsuario':'judapagon1996@hotmail.es',
        'clave':'Dpasaje10'
      }};
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.headersApp = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Access-Control-Allow-Methods, X-API-KEY,  X-SESION-ID, X-SESSION-ID, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, authorization',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'X-MAC-SO':'WigilabsTest'
    });
    this.http.post('https://apiselfservice.co/api/index.php/v1/soap/LoginUsuario.json', this.body, {headers: this.headersApp}).subscribe((resp:any) => {      
      console.log(resp)
    });
    this.http.get('http://localhost:8080/qualification/top', {responseType:'text'}).subscribe((res)=>{
      this.movies = JSON.parse(res);
    });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
