import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  fullName: string;
  email: string;
  city: string;
  postCode: string;
  address: string;
  message: string;
  agreeTerms: boolean;

  constructor() {
    this.fullName = '';
    this.email = '';
    this.city = '';
    this.postCode = '';
    this.address = '';
    this.message = '';
    this.agreeTerms = false;
  }

  onSubmit() {
  
  }
}
