import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailtoService {

  protected url:string = 'https://mailthis.to/kimia_ehsani@yahoo.com';

  constructor(private http:HttpClient) {
  }

  contactar(formValue:Object){
    this.http.post(this.url, formValue).subscribe(
      (data) => {
        console.log(data);
      }
    ), (error: any) => {
      console.log(error);
    };
  }
}
