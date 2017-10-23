import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor(private _http: Http) { }

  postContactForm(contactFormValue: any) {
   console.log(contactFormValue);
  }

}
