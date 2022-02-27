import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Mensaje } from './Mensaje';
import { HttpClient } from '@angular/common/http';
import { MailtoService } from '../mailto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public title:string;
  public myForm:FormGroup;
  public mensajes:Array<Mensaje>;
  public url:string;

  constructor(public fb:FormBuilder, private http:HttpClient, private _mailto:MailtoService) {
    this.title="Contact with us";
    this.mensajes=[];
    this.url="https://mailthis.to/kimia_ehsani@yahoo.com";
   }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      Name: new FormControl('', [Validators.required]),
      LastName: new FormControl('',[Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*@[a-zA-Z0-9]*\.[a-zA-Z]*$')]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required])
    });
  }

  enviar(){
    console.log(this.myForm.value);
    this.mensajes.push(this.myForm.value);
    this._mailto.contactar(this.myForm.value);
    //this.myForm.reset();

}
}
