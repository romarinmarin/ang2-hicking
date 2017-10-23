import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  sendMessage(form) {
this._contactService.postContactForm(form.value);

  }


}
