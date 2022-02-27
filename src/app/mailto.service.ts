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

  contactar(formValue:Object):Observable<any>{
    return this.http.post(this.url, formValue);
  }
}
