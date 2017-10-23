import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
